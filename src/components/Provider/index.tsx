'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  return <SessionProvider session={null}>{children}</SessionProvider>;
};

interface AuthProviderProps {
  children: React.ReactNode;
}
