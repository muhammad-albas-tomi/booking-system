import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Group,
  Image,
  Stack,
  Text,
  Tooltip,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import {
  IconArrowRight,
  IconBed,
  IconCar,
  IconCoffee,
  IconDotsVertical,
  IconHeart,
  IconMapPin,
  IconStar,
  IconUsers,
  IconWifi,
} from '@tabler/icons-react';
import { useState } from 'react';

const roomData = [
  {
    id: 1,
    name: 'Deluxe Ocean View Room',
    type: 'Kamar',
    price: 1250000,
    originalPrice: 1500000,
    rating: 4.8,
    reviews: 234,
    location: 'Denpasar, Bali',
    guests: 2,
    beds: 1,
    image:
      'https://www.theanvayabali.com/wp-content/uploads/2023/01/1440x768-1.jpg',
    amenities: ['WiFi', 'Parking', 'Breakfast'],
    available: true,
    discount: 17,
  },
  {
    id: 2,
    name: 'Premium Suite dengan City View',
    type: 'Suite',
    price: 2800000,
    originalPrice: 3200000,
    rating: 4.9,
    reviews: 156,
    location: 'Kuta, Bali',
    guests: 4,
    beds: 2,
    image:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
    amenities: ['WiFi', 'Parking', 'Breakfast', 'Mini Bar'],
    available: true,
    discount: 13,
  },
  {
    id: 3,
    name: 'Family Garden Villa',
    type: 'Villa',
    price: 4500000,
    originalPrice: 5000000,
    rating: 4.7,
    reviews: 89,
    location: 'Ubud, Bali',
    guests: 6,
    beds: 3,
    image:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
    amenities: ['WiFi', 'Parking', 'Breakfast', 'Private Pool'],
    available: false,
    discount: 10,
  },
];

const amenityIcons: { [key: string]: React.ReactNode } = {
  WiFi: <IconWifi size={14} />,
  Parking: <IconCar size={14} />,
  Breakfast: <IconCoffee size={14} />,
};

interface RoomCardProps {
  room: (typeof roomData)[0];
}

function RoomCard({ room }: RoomCardProps) {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      withBorder
      shadow={isHovered ? 'xl' : 'md'}
      radius="lg"
      h="100%"
      style={{
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card.Section pos="relative">
        <Image
          src={room.image}
          h={isMobile ? 160 : isTablet ? 180 : 200}
          alt={room.name}
          style={{
            transition: 'transform 0.3s ease',
            transform: isHovered && !isMobile ? 'scale(1.05)' : 'scale(1)',
          }}
        />

        {room.discount && (
          <Badge
            pos="absolute"
            top={12}
            left={12}
            color="red"
            variant="filled"
            size="sm"
            fw={600}
          >
            {room.discount}% OFF
          </Badge>
        )}

        <ActionIcon
          pos="absolute"
          top={12}
          right={12}
          variant="light"
          color="white"
          size="lg"
          radius="xl"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
          }}
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
        >
          <IconHeart
            size={18}
            fill={isLiked ? 'red' : 'none'}
            color={isLiked ? 'red' : theme.colors.gray[6]}
          />
        </ActionIcon>

        {!room.available && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text c="white" fw={600} size="lg">
              Tidak Tersedia
            </Text>
          </div>
        )}
      </Card.Section>

      <Card.Section inheritPadding p={isMobile ? 'sm' : 'md'}>
        <Stack gap="sm">
          <Group justify="space-between" align="flex-start">
            <Stack gap={4}>
              <Text fw={600} size={isMobile ? 'md' : 'lg'} lineClamp={1}>
                {room.name}
              </Text>
              <Group gap={8} c="dimmed">
                <Group gap={4}>
                  <IconMapPin size={12} />
                  <Text size="xs">{room.location}</Text>
                </Group>
                <Badge size="xs" variant="light" color="blue">
                  {room.type}
                </Badge>
              </Group>
            </Stack>

            <Tooltip label="More options">
              <ActionIcon variant="subtle" size="sm">
                <IconDotsVertical size={14} />
              </ActionIcon>
            </Tooltip>
          </Group>

          <Group gap={16}>
            <Group gap={4}>
              <IconStar size={14} fill="gold" color="gold" />
              <Text fw={600} size="sm">
                {room.rating}
              </Text>
              <Text size="xs" c="dimmed">
                ({room.reviews})
              </Text>
            </Group>

            <Group gap={4}>
              <IconUsers size={14} />
              <Text size="xs" c="dimmed">
                {room.guests} Tamu
              </Text>
            </Group>

            <Group gap={4}>
              <IconBed size={14} />
              <Text size="xs" c="dimmed">
                {room.beds} Kasur
              </Text>
            </Group>
          </Group>

          <Group gap={6}>
            {room.amenities.slice(0, 3).map((amenity) => (
              <Group key={amenity} gap={4}>
                {amenityIcons[amenity]}
                <Text size="xs" c="dimmed">
                  {amenity}
                </Text>
              </Group>
            ))}
          </Group>

          <Group justify="space-between" align="flex-end">
            <Stack gap={2}>
              <Group gap={4} align="baseline">
                {room.originalPrice && (
                  <Text size="sm" c="dimmed" td="line-through" fw={400}>
                    Rp {room.originalPrice.toLocaleString('id-ID')}
                  </Text>
                )}
                <Text fw={700} size="xl" c="blue.6">
                  Rp {room.price.toLocaleString('id-ID')}
                </Text>
              </Group>
              <Text size="xs" c="dimmed">
                per malam
              </Text>
            </Stack>

            <Group gap={8}>
              <Badge
                variant={room.available ? 'light' : 'outline'}
                color={room.available ? 'green' : 'red'}
                size="sm"
              >
                {room.available ? 'Tersedia' : 'Penuh'}
              </Badge>

              {room.available && (
                <Button
                  size="sm"
                  radius="md"
                  variant="gradient"
                  gradient={{ from: 'blue', to: 'cyan' }}
                  rightSection={<IconArrowRight size={14} />}
                  style={{
                    transition: 'all 0.2s ease',
                    transform: isHovered ? 'translateX(2px)' : 'translateX(0)',
                  }}
                >
                  Pesan
                </Button>
              )}
            </Group>
          </Group>
        </Stack>
      </Card.Section>
    </Card>
  );
}

export function CardList({ roomIndex = 0 }: { roomIndex?: number }) {
  return <RoomCard room={roomData[roomIndex % roomData.length]} />;
}
