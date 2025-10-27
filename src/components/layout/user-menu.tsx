'use client';
import {
  Avatar,
  Group,
  NavLink,
  rem,
  ScrollArea,
  Stack,
  Text,
} from '@mantine/core';
import { IconDoorExit } from '@tabler/icons-react';
import classes from '~/styles/user-menu.module.css';

export function UserMenu() {
  const iconStyle = { width: rem(16), height: rem(16) };

  return (
    <ScrollArea mah={500} className={classes.scrollarea} type="auto">
      <Stack
        m={'sm'}
        p={'sm'}
        gap={'xs'}
        align="center"
        style={{ border: '1px solid var(--mantine-color-default-border)' }}
      >
        <Group>
          <Avatar name={'ALbas tomi'} color="initials" />

          <Text>Albas</Text>
        </Group>
      </Stack>

      <NavLink
        href="/logout"
        c="red"
        label="Keluar"
        leftSection={<IconDoorExit style={iconStyle} />}
      />
    </ScrollArea>
  );
}
