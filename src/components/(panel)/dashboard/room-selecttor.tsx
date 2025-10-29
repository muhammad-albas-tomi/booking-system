'use client';

import {
  ActionIcon,
  Badge,
  Button,
  Divider,
  Flex,
  Group,
  Popover,
  Stack,
  Text,
} from '@mantine/core';
import {
  IconMinus,
  IconPlus,
  IconTrash,
  IconUser,
  IconUsers,
} from '@tabler/icons-react';
import { useState } from 'react';
import { useSearchQuery } from '~/stores/search';

const MAX_ROOMS = 5;
const MAX_ADULTS = 8;
const MAX_CHILDREN = 4;
const MIN_ADULTS = 1;

export default function RoomGuestSelector() {
  const [opened, setOpened] = useState(false);
  const { searchData, setSearchData } = useSearchQuery();
  const rooms = searchData.rooms;

  const totalRooms = rooms.length;
  const totalGuests = rooms.reduce((sum, r) => sum + r.adults + r.children, 0);

  const addRoom = () => {
    if (rooms.length < MAX_ROOMS) {
      setSearchData({
        rooms: [...rooms, { adults: 1, children: 0 }],
      });
    }
  };

  const removeRoom = (index: number) => {
    if (rooms.length > 1) {
      setSearchData({
        rooms: rooms.filter((_, i) => i !== index),
      });
    }
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
            [field]: Math.max(
              field === 'adults' ? MIN_ADULTS : 0,
              Math.min(
                field === 'adults' ? MAX_ADULTS : MAX_CHILDREN,
                room[field] + delta,
              ),
            ),
          }
        : room,
    );
    setSearchData({ rooms: updatedRooms });
  };

  return (
    <Popover
      opened={opened}
      onChange={setOpened}
      width={380}
      position="bottom"
      withArrow
      shadow="xl"
      radius="md"
      offset={10}
    >
      <Popover.Target>
        <Button
          variant="light"
          w="100%"
          onClick={() => setOpened((o) => !o)}
          p="sm"
          justify="space-between"
          h="48px"
          style={{
            textAlign: 'left',
            backgroundColor: opened ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
            border: opened
              ? '1px solid rgb(59, 130, 246)'
              : '1px solid #e5e7eb',
          }}
          leftSection={
            <Group gap={6}>
              <IconUsers size={16} />
              <Text fw={500} size="sm">
                {totalRooms} Kamar
              </Text>
            </Group>
          }
        >
          <Text fz="sm" c="dimmed" truncate>
            {totalGuests} Tamu
          </Text>
        </Button>
      </Popover.Target>

      <Popover.Dropdown p="md">
        <Stack gap="lg">
          <Group justify="space-between" align="center">
            <Text fw={600} size="lg" c="dark.9">
              Detail Tamu
            </Text>
            <Badge variant="light" color="blue" size="sm">
              {totalGuests} Total
            </Badge>
          </Group>

          <Stack gap="md" mb="sm">
            {rooms.map((room, index) => (
              <Stack
                key={index}
                gap="sm"
                p="sm"
                style={{
                  backgroundColor: 'rgba(248, 250, 252, 0.8)',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                }}
              >
                <Group justify="space-between" align="center">
                  <Group gap="xs">
                    <Text fw={600} size="md" c="dark.9">
                      Kamar {index + 1}
                    </Text>
                    <Badge variant="light" size="xs" color="gray">
                      {room.adults + room.children} Tamu
                    </Badge>
                  </Group>
                  {rooms.length > 1 && (
                    <ActionIcon
                      variant="subtle"
                      color="red"
                      size="sm"
                      onClick={() => removeRoom(index)}
                      title="Hapus kamar"
                    >
                      <IconTrash size={14} />
                    </ActionIcon>
                  )}
                </Group>

                <Flex direction="column" gap="sm">
                  <Group justify="space-between" align="center">
                    <Group gap="xs">
                      <IconUser size={14} color="#6b7280" />
                      <Text size="sm" fw={500}>
                        Dewasa
                      </Text>
                    </Group>
                    <Group gap={6}>
                      <ActionIcon
                        variant="light"
                        size="sm"
                        disabled={room.adults <= MIN_ADULTS}
                        onClick={() => updateCount(index, 'adults', -1)}
                        color="blue"
                      >
                        <IconMinus size={12} />
                      </ActionIcon>
                      <Text
                        size="sm"
                        w={28}
                        ta="center"
                        fw={600}
                        c="dark.9"
                        style={{
                          backgroundColor: '#f3f4f6',
                          borderRadius: '4px',
                          padding: '2px 0',
                        }}
                      >
                        {room.adults}
                      </Text>
                      <ActionIcon
                        variant="light"
                        size="sm"
                        disabled={room.adults >= MAX_ADULTS}
                        onClick={() => updateCount(index, 'adults', 1)}
                        color="blue"
                      >
                        <IconPlus size={12} />
                      </ActionIcon>
                    </Group>
                  </Group>

                  <Group justify="space-between" align="center">
                    <Group gap="xs">
                      <IconUsers size={14} color="#6b7280" />
                      <Text size="sm" fw={500}>
                        Anak-anak
                      </Text>
                      <Text size="xs" c="dimmed">
                        (2-11 tahun)
                      </Text>
                    </Group>
                    <Group gap={6}>
                      <ActionIcon
                        variant="light"
                        size="sm"
                        disabled={room.children <= 0}
                        onClick={() => updateCount(index, 'children', -1)}
                        color="blue"
                      >
                        <IconMinus size={12} />
                      </ActionIcon>
                      <Text
                        size="sm"
                        w={28}
                        ta="center"
                        fw={600}
                        c="dark.9"
                        style={{
                          backgroundColor: '#f3f4f6',
                          borderRadius: '4px',
                          padding: '2px 0',
                        }}
                      >
                        {room.children}
                      </Text>
                      <ActionIcon
                        variant="light"
                        size="sm"
                        disabled={room.children >= MAX_CHILDREN}
                        onClick={() => updateCount(index, 'children', 1)}
                        color="blue"
                      >
                        <IconPlus size={12} />
                      </ActionIcon>
                    </Group>
                  </Group>
                </Flex>

                {index !== rooms.length - 1 && <Divider variant="dashed" />}
              </Stack>
            ))}
          </Stack>

          {rooms.length < MAX_ROOMS && (
            <Button
              variant="light"
              color="blue"
              onClick={addRoom}
              fullWidth
              leftSection={<IconPlus size={14} />}
              size="sm"
            >
              Tambah Kamar
            </Button>
          )}

          <Button
            onClick={() => setOpened(false)}
            fullWidth
            color="blue"
            size="sm"
          >
            Terapkan
          </Button>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}
