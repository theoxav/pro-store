import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { EllipsisVertical } from 'lucide-react';
import { MenuItems } from './menu-item';

const MobileMenu = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger
          asChild
          className="flex items-center justify-center w-6 h-6"
        >
          <EllipsisVertical className="size-6" />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-start p-4">
          <SheetTitle>Menu</SheetTitle>
          <MenuItems />
          <SheetDescription></SheetDescription>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileMenu;
