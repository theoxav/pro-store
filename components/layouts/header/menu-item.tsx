import { Button } from '@/components/ui/button';
import { ShoppingCart, UserIcon } from 'lucide-react';
import ModeToggle from './mode-toggle';
import Link from 'next/link';

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
      <Button asChild variant="default">
        <Link href="/sign-in">
          <UserIcon />
          Sign in
        </Link>
      </Button>
    </>
  );
};
