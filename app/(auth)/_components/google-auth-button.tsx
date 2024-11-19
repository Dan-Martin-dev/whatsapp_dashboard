'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';

function GoogleLoginLink() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  return (
    <>
      <Button
        className="w-full"
        variant="outline"
        onClick={() =>
          signIn('google', { callbackUrl: callbackUrl ?? '/dashboard' })
        }
      >
        <Icons.google className="mr-2 h-4 w-4" />
        Continue with Google
      </Button>
    </>
  );
}

export default GoogleLoginLink;
