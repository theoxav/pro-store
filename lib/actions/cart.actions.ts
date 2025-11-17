"use server";

import { cookies } from 'next/headers';
import { CartItem } from '@/types';
import { convertToPlainObject, formatErrors } from '../utils';
import { auth } from '@/auth';
import prisma from '../prisma';
import { cartItemSchema } from '../validators/cart';

export async function addItemToCart(data: CartItem) {
  try {
    // Check for the cart cookie
    const sessionCartId = (await cookies()).get('sessionCartId')?.value;

    if (!sessionCartId) throw new Error('Cart session not found');

    // Get session and userId
    const session = await auth();
    const userId = session?.user?.id ? (session.user.id as string) : undefined;

    // Get cart
    const cart = await getMyCart();

    // Parse and validate item
    const item = cartItemSchema.parse(data);

    // find product in database
    const product = await prisma.product.findFirst({
      where: {
        id: item.productId,
      },
    });

    console.log({
      'session cart id': sessionCartId,
      'user id': userId,
      'item requested': item,
      'product found': product,
    });

    return {
      success: true,
      message: 'Item added to cart successfully',
    };
  } catch (error) {
    return {
      success: false,
      message: formatErrors(error),
    };
  }
}

export async function getMyCart() {
  // Check for the cart cookie
  const sessionCartId = (await cookies()).get('sessionCartId')?.value;

  if (!sessionCartId) throw new Error('Cart session not found');

  // Get session and userId
  const session = await auth();
  const userId = session?.user?.id ? (session.user.id as string) : undefined;

  // GET USER CART FROM DATABASE
  const cart = await prisma.cart.findFirst({
    where: userId ? { userId } : { sessionCartId },
  });

  if (!cart) return undefined;

  // CONVERT DECIMALS AND RETURN
  return convertToPlainObject({
    ...cart,
    items: cart.items as CartItem[],
    itemsPrice: cart.itemsPrice.toString(),
    totalPrice: cart.totalPrice.toString(),
    shippingPrice: cart.shippingPrice.toString(),
    taxPrice: cart.taxPrice.toString(),
  });
}