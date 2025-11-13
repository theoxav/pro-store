import { z } from 'zod';
import { insertProductSchema } from '@/lib/validators/product';
import { cartItemSchema, insertCartSchema } from '@/lib/validators/cart';

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: string;
  numReviews: number;
  createdAt: Date;
};

export type Cart = z.infer<typeof insertCartSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;