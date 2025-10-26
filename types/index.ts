import { z } from 'zod';
import { insertProductSchema } from '@/lib/validators/product';

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: string;
  numReviews: number;
  createdAt: Date;
};
