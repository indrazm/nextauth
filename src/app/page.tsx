/* eslint-disable @next/next/no-img-element */

'use client';

import { signOut, useSession } from 'next-auth/react';

import { Login } from '@/components/Auth/Login';
import { Button } from '@/components/ui/button';

export default function Page() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div>
      {session ? (
        <div className="flex justify-between p-8">
          <div className="text-lg font-bold">App.</div>
          <div className="flex items-center gap-4">
            <div>{session.user?.name}</div>
            <img
              alt=""
              src={session.user?.image as string}
              width={40}
              height={40}
              className="rounded-full"
            />
            <Button onClick={() => signOut()}>Logout</Button>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}
