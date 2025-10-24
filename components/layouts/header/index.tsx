import Link from 'next/link';
import Image from 'next/image';
import { APP_NAME } from '@/constants';
import Menu from './menu';

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="flex items-center justify-between wrapper">
        <div className="flex flex-start">
          <Link href="/" className="flex items-center p-2">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              width={40}
              height={40}
              priority
            />
            <span className="hidden md:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="space-x-4 mr-4 flex items-center">
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
