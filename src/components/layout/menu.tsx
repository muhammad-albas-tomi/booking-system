'use client';

import { Group, Skeleton } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Session } from 'next-auth';
import dynamic from 'next/dynamic';

const Toggle = dynamic(() => import('./color').then((mod) => mod.Toggle), {
  ssr: false,
  loading: () => <Skeleton w={34} h={34} />,
});

export function Menu({ session }: { session: Session | null }) {
  const profile = session ? (
    <Group visibleFrom="sm">
      <h1>User</h1>
    </Group>
  ) : (
    <></>
  );

  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Group gap={isMobile && session ? 0 : 10}>
      {profile}
      <Toggle />
    </Group>
  );
}
