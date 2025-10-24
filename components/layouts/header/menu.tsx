import React from 'react';
import MobileMenu from './mobile-menu';
import { MenuItems } from './menu-item';

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <MenuItems />
      </nav>

      <MobileMenu />
    </div>
  );
};

export default Menu;
