import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

export function Toggle() {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      size="xl"
      onClick={toggleColorScheme}
      c="black"
      variant="transparent"
      aria-label={colorScheme.toString()}
    >
      {colorScheme === 'dark' ? (
        <IconMoon
          style={{
            width: 25,
            height: 25,
          }}
        />
      ) : (
        <IconSun
          style={{
            width: 25,
            height: 25,
          }}
        />
      )}
    </ActionIcon>
  );
}
