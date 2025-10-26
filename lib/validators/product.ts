import { z } from 'zod';
import { formatNumberWithDecimal } from '../utils';

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    'Price must have exactly two decimal places'
  );


// Schema for inserting products
export const insertProductSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters long'),
  slug: z.string().min(1),
  category: z.string().min(1),
  brand: z.string().min(1),
  description: z.string().min(1),
  stock: z.coerce.number().min(0),
  images: z.array(z.string()).min(1, 'Product must have at least one image'),
  isFeatured: z.boolean().default(false),
  banner: z.string().nullable(),
  price: currency,
});
