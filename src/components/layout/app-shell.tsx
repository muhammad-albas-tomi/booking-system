'use client';

import '@mantine/carousel/styles.css';
import {
  AppShell as AppShell$1,
  Burger,
  Button,
  Group,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  NavLink,
  ScrollArea,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { poppins } from '~/configs/fonts';
import { menu } from '~/configs/menu';
import { useAuth } from '~/hooks/auth';
import { Footer } from './footer';
import { UserMenu } from './user-menu';

export function AppShell({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  const pathname =
    typeof window !== 'undefined' ? window.location.pathname : '';
  const session = useAuth()?.session;

  const menusAdmin = menu.filter(
    (menu) => menu.isProtected && menu.segment === 'admin',
  );
  const generalMenus = menu.filter((menu) => menu.segment !== 'admin');

  return (
    <AppShell$1
      withBorder
      header={{ height: 69 }}
      navbar={{
        width: 300,
        breakpoint: 'lg',
        collapsed: { mobile: !opened, desktop: true },
      }}
    >
      <AppShell$1.Header>
        <Group h="100%" maw={1400} mx="auto" px="md" justify="space-between">
          <Burger hiddenFrom="lg" opened={opened} onClick={toggle} />

          <Group gap={8}>
            <Text
              component="span"
              className={poppins.className}
              fz={'h2'}
              fw={'bold'}
            >
              丂ｲ乇
            </Text>
          </Group>

          <Group flex={1} justify="center" fw={400} fz={14} visibleFrom="lg">
            {(session?.user?.role === 'admin'
              ? [...generalMenus, ...menusAdmin]
              : generalMenus
            ).map((menu, key) => {
              const isActive = pathname.startsWith(`/${menu.segment}`);
              if ('href' in menu) {
                return (
                  <Button
                    autoContrast
                    key={key}
                    leftSection={<menu.icon style={{ strokeWidth: '2px' }} />}
                    variant="subtle"
                    color="gray.5"
                    bg={isActive ? '#33aded' : undefined}
                    c={isActive ? '#33aded' : '#4b5563'}
                    fz={14}
                    fw={500}
                    ff={poppins.style.fontFamily}
                    component={Link}
                    href={menu.href}
                  >
                    {menu.label}
                  </Button>
                );
              }

              return (
                <Menu
                  key={key}
                  trigger="click-hover"
                  width={192}
                  position="bottom-start"
                  shadow="md"
                  closeDelay={100}
                >
                  <MenuTarget>
                    <Button
                      leftSection={<menu.icon style={{ strokeWidth: '2px' }} />}
                      rightSection={
                        <IconChevronDown
                          style={{ width: '1.25rem', height: '1.25rem' }}
                        />
                      }
                      variant="subtle"
                      bg={isActive ? '#33aded' : undefined}
                      c={isActive ? '#33aded' : '#4b5563'}
                      color="gray.5"
                      fz={14}
                      fw={500}
                      ff={poppins.style.fontFamily}
                    >
                      {menu.label}
                    </Button>
                  </MenuTarget>

                  <MenuDropdown>
                    {menu.children.map((children, key) => {
                      return (
                        <MenuItem
                          component={Link}
                          href={children.href}
                          key={`children-${key}`}
                        >
                          {children.label}
                        </MenuItem>
                      );
                    })}
                  </MenuDropdown>
                </Menu>
              );
            })}
          </Group>

          <Group gap={16}>
            {session ? (
              <UserMenu />
            ) : (
              <>
                <Button
                  onClick={() => signIn('google')}
                  autoContrast
                  size="sm"
                  variant="subtle"
                >
                  Masuk
                </Button>
                <Button size="sm">Daftar</Button>
              </>
            )}
          </Group>
        </Group>
      </AppShell$1.Header>

      <AppShell$1.Navbar withBorder maw={{ xs: 300 }}>
        <ScrollArea scrollbarSize={1}>
          {menu.map((menu, key) => {
            const isActive = pathname.startsWith(`/${menu.segment}`);
            if ('href' in menu) {
              return (
                <NavLink
                  key={key}
                  label={menu.label}
                  data-active={isActive ? 'true' : undefined}
                  leftSection={<menu.icon />}
                  component={Link}
                  // Check if we should show alert for billing
                  href={menu.href}
                  onClick={toggle}
                />
              );
            }

            return (
              <NavLink
                key={key}
                label={menu.label}
                leftSection={<menu.icon />}
                defaultOpened={isActive}
              >
                {menu.children.map((children, key) => {
                  const isActive = pathname.startsWith(children.href);

                  return (
                    <NavLink
                      key={key}
                      label={children.label}
                      data-active={isActive ? 'true' : undefined}
                      onClick={toggle}
                      component={Link}
                      // Check if we should show alert for billing
                      href={children.href}
                    />
                  );
                })}
              </NavLink>
            );
          })}
        </ScrollArea>
      </AppShell$1.Navbar>

      <AppShell$1.Main bg="rgb(249 250 251)">{children}</AppShell$1.Main>

      <AppShell$1.Section>
        <Footer />
      </AppShell$1.Section>
    </AppShell$1>
  );
}
