import { Metadata } from 'next';
import Link from 'next/link';
import UserAuthForm from './user-auth-form';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
};

export default function LogInViewPage() {
  return (
    <div className="relative h-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="flex h-full items-center p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
            <p className="text-sm text-muted-foreground">
              Enter your credentials to log in.
            </p>
          </div>
          <UserAuthForm />

          {/* Already have an account? */}
          <div className="flex">
            <p className="text-center text-sm text-muted-foreground">
              Dont have an account?
              <Link
                className="ml-2 underline underline-offset-4 hover:text-primary"
                href="/"
              >
                Create account.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}