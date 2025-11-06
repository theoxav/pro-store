import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import ModeToggle from './mode-toggle';
import Link from 'next/link';
import UserButton from './user-button';

export const MenuItems = () => {
  return (
    <>
      <ModeToggle />
      <Button asChild variant="ghost">
        <Link href="/cart">
          <ShoppingCart />
          Cart
        </Link>
      </Button>
      <UserButton />
    </>
  );
};
