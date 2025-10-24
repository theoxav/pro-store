import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.svg"
        alt="not found page"
        width={48}
        height={48}
        priority
      />
      <div className="p-6 rounded-lg shadow-md text-center w-1/3">
        <h1 className="text-3xl font-bold mb-4">Not found</h1>
        <p className="text-destructive">Cound not find requested page</p>
        <Link href="/" className='mb-4'>
          <Button variant='outline' className='cursor-pointer'>Go back to home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
