'use client';

import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Burger,
  Button,
  Collapse,
  Container,
  Divider,
  Drawer,
  Flex,
  Group,
  Image,
  Menu,
  NavLink,
  NavLinkProps,
  rem,
  Stack,
  Text,
  Tooltip,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconBell,
  IconBoxMargin,
  IconChevronDown,
  IconChevronRight,
  IconHome,
  IconLayoutDashboard,
  IconLogout,
  IconSettings,
  IconUsers,
  IconUserScan,
  IconUsersGroup,
  IconWallet,
} from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const iconStyle = { width: rem(18), height: rem(18) };
const iconStyleLarge = { width: rem(20), height: rem(20) };

export const navs: (NavLinkProps & { href: string })[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    leftSection: <IconHome style={iconStyle} />,
  },
  {
    label: 'Data Karyawan',
    href: '/employees',
    leftSection: <IconUsersGroup style={iconStyle} />,
  },
  {
    label: 'Data Klien',
    href: '/clients',
    leftSection: <IconUserScan style={iconStyle} />,
  },
  {
    label: 'Pengaturan',
    href: '/settings',
    leftSection: <IconSettings style={iconStyle} />,
  },
];

export const HRISMenus: (NavLinkProps & { href: string })[] = [
  {
    label: 'Karyawan',
    href: '/hris/employees',
  },
  {
    label: 'Shift',
    href: '/hris/schedulings',
  },
];
export const OutsourceMenus: (NavLinkProps & { href: string })[] = [
  {
    label: 'Klien',
    href: '/outsource/clients',
  },
  {
    label: 'Report',
    href: '/outsource/reports',
  },
];

export const PayrollMenus: (NavLinkProps & { href: string })[] = [
  {
    label: 'Payroll Option 1',
    href: '/payroll/option1',
  },
  {
    label: 'Payroll Option 2',
    href: '/payroll/option2',
  },
];

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [opened, { toggle, close }] = useDisclosure(false);

  // Mobile collapsible sections
  const [hrisOpened, { toggle: toggleHris }] = useDisclosure(false);
  const [outsourceOpened, { toggle: toggleOutsource }] = useDisclosure(false);
  const [payrollOpened, { toggle: togglePayroll }] = useDisclosure(false);

  // Function to determine if a link is active
  const isLinkActive = (href: string) => {
    if (href === '/dashboard') {
      return href === pathname;
    }
    return pathname.startsWith(href);
  };

  // Check if menu sections are active
  const isHrisActive = pathname.includes('/hris');
  const isOutsourceActive = pathname.includes('/outsource');
  const isPayrollActive = pathname.includes('/payroll');

  return (
    <>
      {/* Desktop Navigation */}
      <Box
        h={60}
        style={{
          borderBottom: '0.7px solid var(--mantine-color-default-border)',
          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
          position: pathname.includes('settings') ? 'sticky' : 'relative',
          backgroundColor: pathname.includes('settings') ? 'white' : '',
          top: 0,
          zIndex: 100,
        }}
      >
        <Container size="xl" h="100%">
          <Group h="100%" justify="space-between">
            {/* Logo and Navigation Links */}
            <Group h="100%">
              <Link href={'/dashboard'}>
                <Image h={25} src={'/images/logo-astax.png'} alt="Logo" />
              </Link>
            </Group>

            {/* Main Navigation - Hidden on Mobile */}
            <Flex gap="md" visibleFrom="md">
              <NavLink
                component={Link}
                leftSection={<IconLayoutDashboard size={14} />}
                href="/dashboard"
                label={
                  <Text size="sm" fw={500}>
                    Dashboard
                  </Text>
                }
                style={(theme) => ({
                  padding: '8px 12px',
                  borderRadius: theme.radius.sm,
                  color: isLinkActive('/dashboard')
                    ? theme.colors.primary[7]
                    : theme.colors.gray[7],
                  backgroundColor: isLinkActive('/dashboard')
                    ? theme.colors.primary[0]
                    : 'transparent',
                  '&:hover': {
                    backgroundColor: theme.colors.gray[0],
                  },
                })}
                active={isLinkActive('/dashboard')}
              />

              {/* HRIS Dropdown */}
              <Menu shadow="md" width={200} position="bottom-start">
                <Menu.Target>
                  <NavLink
                    leftSection={<IconUsers size={14} />}
                    rightSection={<IconChevronDown size={14} />}
                    label={
                      <Group gap="xs">
                        <Text size="sm" fw={500}>
                          HRIS
                        </Text>
                      </Group>
                    }
                    style={(theme) => ({
                      padding: '8px 12px',
                      borderRadius: theme.radius.sm,
                      color: isLinkActive('/hris')
                        ? theme.colors.primary[7]
                        : theme.colors.gray[7],
                      backgroundColor: isLinkActive('/hris')
                        ? theme.colors.primary[0]
                        : 'transparent',
                      '&:hover': {
                        backgroundColor: theme.colors.primary[0],
                      },
                    })}
                    active={isLinkActive('/hris')}
                  />
                </Menu.Target>

                <Menu.Dropdown>
                  {HRISMenus.map((link, index) => (
                    <Menu.Item key={index}>
                      <NavLink
                        label={
                          <Group gap="xs">
                            <Text size="sm" fw={500}>
                              {link.label}
                            </Text>
                          </Group>
                        }
                        component={Link}
                        href={link.href}
                        style={(theme) => ({
                          padding: '8px 12px',
                          borderRadius: theme.radius.sm,
                          color: isLinkActive(`${link.href}`)
                            ? theme.colors.primary[7]
                            : theme.colors.gray[7],
                          backgroundColor: isLinkActive(`${link.href}`)
                            ? theme.colors.primary[0]
                            : 'transparent',
                          '&:hover': {
                            backgroundColor: theme.colors.primary[0],
                          },
                        })}
                        active={isLinkActive(`${link.href}`)}
                      />
                    </Menu.Item>
                  ))}
                </Menu.Dropdown>
              </Menu>

              {/* Outsource Dropdown */}
              <Menu shadow="md" width={200} position="bottom-start">
                <Menu.Target>
                  <NavLink
                    w={'100%'}
                    leftSection={<IconBoxMargin size={14} />}
                    rightSection={<IconChevronDown size={14} />}
                    label={
                      <Group gap="xs">
                        <Text size="sm" fw={500}>
                          Outsource
                        </Text>
                      </Group>
                    }
                    style={(theme) => ({
                      padding: '8px 12px',
                      borderRadius: theme.radius.sm,
                      color: isLinkActive('/outsource')
                        ? theme.colors.primary[7]
                        : theme.colors.gray[7],
                      backgroundColor: isLinkActive('/outsource')
                        ? theme.colors.primary[0]
                        : 'transparent',
                      '&:hover': {
                        backgroundColor: theme.colors.gray[0],
                      },
                    })}
                    active={isLinkActive('/outsource')}
                  />
                </Menu.Target>

                <Menu.Dropdown>
                  {OutsourceMenus.map((link, index) => (
                    <Menu.Item key={index}>
                      <NavLink
                        w={'100%'}
                        label={
                          <Group gap="xs">
                            <Text size="sm" fw={500}>
                              {link.label}
                            </Text>
                          </Group>
                        }
                        component={Link}
                        href={link.href}
                        style={(theme) => ({
                          padding: '8px 12px',
                          borderRadius: theme.radius.sm,
                          color: isLinkActive(`${link.href}`)
                            ? theme.colors.primary[7]
                            : theme.colors.gray[7],
                          backgroundColor: isLinkActive(`${link.href}`)
                            ? theme.colors.primary[0]
                            : 'transparent',
                          '&:hover': {
                            backgroundColor: theme.colors.primary[0],
                          },
                        })}
                        active={isLinkActive(`${link.href}`)}
                      />
                    </Menu.Item>
                  ))}
                </Menu.Dropdown>
              </Menu>

              {/* Payroll Dropdown */}
              <Menu shadow="md" width={200} position="bottom-start">
                <Menu.Target>
                  <NavLink
                    leftSection={<IconWallet size={14} />}
                    rightSection={<IconChevronDown size={14} />}
                    label={
                      <Group gap="xs">
                        <Text size="sm" fw={500}>
                          Payroll
                        </Text>
                      </Group>
                    }
                    style={(theme) => ({
                      padding: '8px 12px',
                      borderRadius: theme.radius.sm,
                      color: isLinkActive('/payroll')
                        ? theme.colors.blue[7]
                        : theme.colors.gray[7],
                      backgroundColor: isLinkActive('/payroll')
                        ? theme.colors.blue[0]
                        : 'transparent',
                      '&:hover': {
                        backgroundColor: theme.colors.gray[0],
                      },
                    })}
                    active={isLinkActive('/payroll')}
                  />
                </Menu.Target>

                <Menu.Dropdown>
                  {PayrollMenus.map((link, index) => (
                    <Menu.Item key={index}>{link.label}</Menu.Item>
                  ))}
                </Menu.Dropdown>
              </Menu>

              <NavLink
                leftSection={<IconSettings size={14} />}
                label={
                  <Group gap="xs">
                    <Text size="sm" fw={500}>
                      Settings
                    </Text>
                  </Group>
                }
                component={Link}
                href="/settings"
                style={(theme) => ({
                  padding: '8px 12px',
                  borderRadius: theme.radius.sm,
                  color: isLinkActive('/settings')
                    ? theme.colors.primary[7]
                    : theme.colors.gray[7],
                  backgroundColor: isLinkActive('/settings')
                    ? theme.colors.primary[0]
                    : 'transparent',
                  '&:hover': {
                    backgroundColor: theme.colors.gray[0],
                  },
                })}
                active={isLinkActive('/settings')}
              />
            </Flex>

            {/* Right Side Actions */}
            <Group>
              {/* Toggle and Action Icons - Visible on Desktop */}
              <Group visibleFrom="md" gap="md">
                <Tooltip label="Notifications">
                  <ActionIcon
                    variant="subtle"
                    color="gray"
                    size="md"
                    radius="xl"
                    pos="relative"
                  >
                    <IconBell style={iconStyleLarge} />
                    <Badge
                      size="xs"
                      color="red"
                      variant="filled"
                      p={0}
                      h={12}
                      w={12}
                      style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        transform: 'translate(30%, -30%)',
                      }}
                    >
                      2
                    </Badge>
                  </ActionIcon>
                </Tooltip>
                <Tooltip label="User Profile">
                  <ActionIcon
                    variant="subtle"
                    color="gray"
                    size="md"
                    radius="xl"
                    component={Link}
                    href="/profile"
                  >
                    <Avatar color="blue" radius="xl" size="sm">
                      US
                    </Avatar>
                  </ActionIcon>
                </Tooltip>
              </Group>

              {/* Mobile Menu Button */}
              <Burger opened={opened} onClick={toggle} hiddenFrom="md" />
            </Group>
          </Group>
        </Container>
      </Box>

      {/* Mobile Navigation Drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        size="80%"
        padding="md"
        title={
          <Group>
            <Image h={20} src={'/images/logo-astax.png'} alt="Logo" />
          </Group>
        }
        hiddenFrom="md"
        zIndex={1000}
      >
        <Stack mt="md" gap="xs">
          {/* User info for mobile */}
          <Box
            p="md"
            style={{
              backgroundColor: 'var(--mantine-color-blue-0)',
              borderRadius: 'var(--mantine-radius-md)',
            }}
          >
            <Group>
              <Avatar color="blue" radius="xl">
                US
              </Avatar>
              <Box>
                <Text fw={500}>User Name</Text>
                <Text size="xs" c="dimmed">
                  user@example.com
                </Text>
              </Box>
            </Group>
          </Box>

          <Divider my="xs" />

          {/* Dashboard Link */}
          <NavLink
            label="Dashboard"
            leftSection={<IconLayoutDashboard style={iconStyle} />}
            rightSection={<IconChevronRight size={16} />}
            active={isLinkActive('/dashboard')}
            onClick={() => {
              router.push('/dashboard');
              close();
            }}
            style={(theme) => ({
              borderRadius: theme.radius.sm,
              color: isLinkActive('/dashboard')
                ? theme.colors.primary[7]
                : theme.colors.gray[7],
              backgroundColor: isLinkActive('/dashboard')
                ? theme.colors.primary[0]
                : 'transparent',
            })}
          />

          {/* HRIS Menu */}
          <NavLink
            label="HRIS"
            leftSection={<IconUsers style={iconStyle} />}
            rightSection={
              <IconChevronDown
                size={16}
                style={{
                  transform: hrisOpened ? 'rotate(180deg)' : 'none',
                  transition: 'transform 200ms ease',
                }}
              />
            }
            active={isHrisActive}
            onClick={toggleHris}
            style={(theme) => ({
              borderRadius: theme.radius.sm,
              color: isHrisActive
                ? theme.colors.primary[7]
                : theme.colors.gray[7],
              backgroundColor: isHrisActive
                ? theme.colors.primary[0]
                : 'transparent',
            })}
          />
          <Collapse in={hrisOpened}>
            <Stack gap={0} pl="md" mt="xs">
              {HRISMenus.map((link, index) => (
                <NavLink
                  key={index}
                  label={link.label}
                  onClick={() => {
                    router.push(link.href);
                    close();
                  }}
                  active={isLinkActive(link.href)}
                  style={(theme) => ({
                    borderRadius: theme.radius.sm,
                    color: isLinkActive(link.href)
                      ? theme.colors.primary[7]
                      : theme.colors.gray[7],
                    backgroundColor: isLinkActive(link.href)
                      ? theme.colors.primary[0]
                      : 'transparent',
                  })}
                />
              ))}
            </Stack>
          </Collapse>

          {/* Outsource Menu */}
          <NavLink
            label="Outsource"
            leftSection={<IconBoxMargin style={iconStyle} />}
            rightSection={
              <IconChevronDown
                size={16}
                style={{
                  transform: outsourceOpened ? 'rotate(180deg)' : 'none',
                  transition: 'transform 200ms ease',
                }}
              />
            }
            active={isOutsourceActive}
            onClick={toggleOutsource}
            style={(theme) => ({
              borderRadius: theme.radius.sm,
              color: isOutsourceActive
                ? theme.colors.primary[7]
                : theme.colors.gray[7],
              backgroundColor: isOutsourceActive
                ? theme.colors.primary[0]
                : 'transparent',
            })}
          />
          <Collapse in={outsourceOpened}>
            <Stack gap={0} pl="md" mt="xs">
              {OutsourceMenus.map((link, index) => (
                <NavLink
                  key={index}
                  label={link.label}
                  onClick={() => {
                    router.push(link.href);
                    close();
                  }}
                  active={isLinkActive(link.href)}
                  style={(theme) => ({
                    borderRadius: theme.radius.sm,
                    color: isLinkActive(link.href)
                      ? theme.colors.primary[7]
                      : theme.colors.gray[7],
                    backgroundColor: isLinkActive(link.href)
                      ? theme.colors.primary[0]
                      : 'transparent',
                  })}
                />
              ))}
            </Stack>
          </Collapse>

          {/* Payroll Menu */}
          <NavLink
            label="Payroll"
            leftSection={<IconWallet style={iconStyle} />}
            rightSection={
              <IconChevronDown
                size={16}
                style={{
                  transform: payrollOpened ? 'rotate(180deg)' : 'none',
                  transition: 'transform 200ms ease',
                }}
              />
            }
            active={isPayrollActive}
            onClick={togglePayroll}
            style={(theme) => ({
              borderRadius: theme.radius.sm,
              color: isPayrollActive
                ? theme.colors.primary[7]
                : theme.colors.gray[7],
              backgroundColor: isPayrollActive
                ? theme.colors.primary[0]
                : 'transparent',
            })}
          />
          <Collapse in={payrollOpened}>
            <Stack gap={0} pl="md" mt="xs">
              {PayrollMenus.map((link, index) => (
                <NavLink
                  key={index}
                  label={link.label}
                  onClick={() => {
                    router.push(link.href);
                    close();
                  }}
                  active={isLinkActive(link.href)}
                  style={(theme) => ({
                    borderRadius: theme.radius.sm,
                    color: isLinkActive(link.href)
                      ? theme.colors.primary[7]
                      : theme.colors.gray[7],
                    backgroundColor: isLinkActive(link.href)
                      ? theme.colors.primary[0]
                      : 'transparent',
                  })}
                />
              ))}
            </Stack>
          </Collapse>

          {/* Settings Link */}
          <NavLink
            label="Settings"
            leftSection={<IconSettings style={iconStyle} />}
            rightSection={<IconChevronRight size={16} />}
            active={isLinkActive('/settings')}
            onClick={() => {
              router.push('/settings');
              close();
            }}
            style={(theme) => ({
              borderRadius: theme.radius.sm,
              color: isLinkActive('/settings')
                ? theme.colors.primary[7]
                : theme.colors.gray[7],
              backgroundColor: isLinkActive('/settings')
                ? theme.colors.primary[0]
                : 'transparent',
            })}
          />

          <Divider my="md" />

          {/* Mobile Bottom Actions */}
          <Group px="xs">
            {/* Notifications for Mobile */}
            <ActionIcon
              variant="light"
              color="gray"
              size="lg"
              radius="md"
              pos="relative"
            >
              <IconBell style={iconStyle} />
              <Badge
                size="xs"
                color="red"
                variant="filled"
                p={0}
                h={12}
                w={12}
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  transform: 'translate(30%, -30%)',
                }}
              >
                2
              </Badge>
            </ActionIcon>

            {/* Logout Button */}
            <Button
              variant="outline"
              color="red"
              leftSection={<IconLogout style={iconStyle} />}
              size="sm"
              radius="md"
              fullWidth
            >
              Logout
            </Button>
          </Group>
        </Stack>
      </Drawer>
    </>
  );
}
