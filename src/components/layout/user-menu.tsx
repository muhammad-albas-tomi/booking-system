'use client';
import { Avatar, Button, Menu } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';
import { signOut } from 'next-auth/react';
import { useAuth } from '~/hooks/auth';

export function UserMenu() {
  const session = useAuth()?.session;
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button variant="transparent" size="fit-content">
          <Avatar
            name={session?.user?.name || ''}
            color="cyan"
            radius="xl"
          ></Avatar>
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          color="red"
          onClick={() => signOut()}
          leftSection={<IconTrash size={14} />}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
