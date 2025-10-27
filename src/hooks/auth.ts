'use client';

import { useQuery } from '@tanstack/react-query';
import { getSession } from 'next-auth/react';

export function useAuth() {
  const {
    data: session,
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ['auth'],
    queryFn: async () => {
      return await getSession({ broadcast: false });
    },
    staleTime: 1000 * 60 * 3,
  });

  return {
    session,
    isFetching,
    isLoading,
  };
}
