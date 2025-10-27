import { NavLink, ScrollArea } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import { useNavbarCloser } from '~/stores/navbarcloser';
import { navs } from './navigation';

export function Navbar() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { close } = useNavbarCloser();
  return (
    <ScrollArea mah={isMobile ? '100vh' : 500} scrollbarSize={2} type="auto">
      {navs.map((navlink, key) => (
        <NavLink
          onClick={() => close()}
          key={key}
          component={Link}
          {...navlink}
        />
      ))}
    </ScrollArea>
  );
}
