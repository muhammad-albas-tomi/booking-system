'use client';

import {
  ActionIcon,
  Button,
  Divider,
  Group,
  Popover,
  Stack,
  Text,
} from '@mantine/core';
import { IconMinus, IconPlus, IconTrash } from '@tabler/icons-react';
import { useState } from 'react';
import { useSearchQuery } from '~/stores/search';

export default function RoomGuestSelector() {
  const [opened, setOpened] = useState(false);
  const { searchData, setSearchData } = useSearchQuery();
  const rooms = searchData.rooms;

  const totalRooms = rooms.length;
  const totalGuests = rooms.reduce((sum, r) => sum + r.adults + r.children, 0);

  const addRoom = () => {
    setSearchData({
      rooms: [...rooms, { adults: 1, children: 0 }],
    });
  };

  const removeRoom = (index: number) => {
    setSearchData({
      rooms: rooms.filter((_, i) => i !== index),
    });
  };

  const updateCount = (
    index: number,
    field: 'adults' | 'children',
    delta: number,
  ) => {
    const updatedRooms = rooms.map((room, i) =>
      i === index
        ? {
            ...room,
            [field]: Math.max(field === 'adults' ? 1 : 0, room[field] + delta),
          }
        : room,
    );
    setSearchData({ rooms: updatedRooms });
  };

  return (
    <Popover
      opened={opened}
      onChange={setOpened}
      width={350}
      position="bottom"
      withArrow
      shadow="lg"
      radius="md"
    >
      <Popover.Target>
        <Button
          variant="transparent"
          w="100%"
          onClick={() => setOpened((o) => !o)}
          leftSection="🛏️"
          rightSection={
            <Text size="sm" c="dimmed">
              {totalGuests} tamu
            </Text>
          }
          justify="space-between"
        >
          <Text size="md">{totalRooms} Kamar</Text>
        </Button>
      </Popover.Target>

      <Popover.Dropdown>
        <Stack gap="md">
          {rooms.map((room, index) => (
            <Stack key={index} gap="sm">
              <Group justify="space-between" align="center">
                <Text fw={600} size="md">
                  Kamar {index + 1}
                </Text>
                {rooms.length > 1 && (
                  <ActionIcon
                    variant="subtle"
                    color="red"
                    size="sm"
                    onClick={() => removeRoom(index)}
                  >
                    <IconTrash size={14} />
                  </ActionIcon>
                )}
              </Group>

              <Group justify="space-between" align="center">
                <Text size="sm">Dewasa</Text>
                <Group gap={8}>
                  <ActionIcon
                    variant="light"
                    size="sm"
                    disabled={room.adults <= 1}
                    onClick={() => updateCount(index, 'adults', -1)}
                  >
                    <IconMinus size={12} />
                  </ActionIcon>
                  <Text size="sm" w={24} ta="center" fw={500}>
                    {room.adults}
                  </Text>
                  <ActionIcon
                    variant="light"
                    size="sm"
                    disabled={room.adults >= 8}
                    onClick={() => updateCount(index, 'adults', 1)}
                  >
                    <IconPlus size={12} />
                  </ActionIcon>
                </Group>
              </Group>

              <Group justify="space-between" align="center">
                <Text size="sm">Anak-anak</Text>
                <Group gap={8}>
                  <ActionIcon
                    variant="light"
                    size="sm"
                    disabled={room.children <= 0}
                    onClick={() => updateCount(index, 'children', -1)}
                  >
                    <IconMinus size={12} />
                  </ActionIcon>
                  <Text size="sm" w={24} ta="center" fw={500}>
                    {room.children}
                  </Text>
                  <ActionIcon
                    variant="light"
                    size="sm"
                    disabled={room.children >= 4}
                    onClick={() => updateCount(index, 'children', 1)}
                  >
                    <IconPlus size={12} />
                  </ActionIcon>
                </Group>
              </Group>

              {index !== rooms.length - 1 && <Divider />}
            </Stack>
          ))}

          <Button
            variant="light"
            color="blue"
            onClick={addRoom}
            fullWidth
            leftSection={<IconPlus size={14} />}
            disabled={rooms.length >= 5}
          >
            Tambah Kamar
          </Button>

          <Button onClick={() => setOpened(false)} fullWidth color="blue">
            Terapkan
          </Button>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}
