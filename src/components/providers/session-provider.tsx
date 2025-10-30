'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

interface SessionProviderWrapperProps {
  children: ReactNode;
}

export function SessionProviderWrapper({ children }: SessionProviderWrapperProps) {
  return (
    <SessionProvider
      refetchInterval={5 * 60} // Refetch every 5 minutes
      session={null} // Let NextAuth handle session
    >
      {children}
    </SessionProvider>
  );
}