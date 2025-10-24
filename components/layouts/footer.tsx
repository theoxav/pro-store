import { APP_NAME } from '@/constants';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="p-5 flex items-center justify-center">
        {currentYear} {APP_NAME}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
