import { auth } from '@/auth';
import SignUpForm from '@/components/features/auth/signup-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { APP_NAME } from '@/constants';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Sign up for a new account',
};
const SignUpPage = async (props: {
  searchParams: Promise<{ callbackUrl: string }>;
}) => {
  const { callbackUrl } = await props.searchParams;
  
  const session = await auth();

  if (session) {
    redirect(callbackUrl || '/');
  }

  return (
    <>
      <div className="w-full max-w-md mx-auto">
        <Card>
          <CardHeader className="space-y-4">
            <Link href="/" className="flex items-center justify-center">
              <Image
                src="/images/logo.svg"
                alt={APP_NAME}
                width={100}
                height={100}
                priority
              />
            </Link>
            <CardTitle className="text-center">Sign Up</CardTitle>
            <CardDescription className="text-center">
              Enter your information below to create an account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <SignUpForm />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default SignUpPage;
