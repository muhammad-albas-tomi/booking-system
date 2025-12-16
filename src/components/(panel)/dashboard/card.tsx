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
  IconTools,
  IconPool,
  IconWeight,
  IconWind,
  IconChefHat,
  IconCandle,
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
    amenities: ['WiFi', 'Parking', 'Breakfast', 'AC'],
    available: true,
    discount: 17,
    size: '35 m²',
    highlights: ['Ocean View', 'Free Breakfast'],
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
    amenities: ['WiFi', 'Parking', 'Breakfast', 'Mini Bar', 'Living Room'],
    available: true,
    discount: 13,
    size: '65 m²',
    highlights: ['City View', 'Living Room', 'Mini Bar'],
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
    amenities: ['WiFi', 'Parking', 'Breakfast', 'Private Pool', 'Kitchen', 'Garden'],
    available: true,
    discount: 10,
    size: '120 m²',
    highlights: ['Private Pool', 'Garden View', 'Full Kitchen'],
  },
  {
    id: 4,
    name: 'Cozy Studio Apartment',
    type: 'Apartemen',
    price: 750000,
    originalPrice: 850000,
    rating: 4.6,
    reviews: 312,
    location: 'Jakarta Selatan',
    guests: 2,
    beds: 1,
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    amenities: ['WiFi', 'Gym', 'Pool', 'Kitchenette'],
    available: true,
    discount: 12,
    size: '28 m²',
    highlights: ['City Center', 'Gym Access', 'Modern Design'],
  },
  {
    id: 5,
    name: 'Luxury Beach Resort Suite',
    type: 'Resort',
    price: 5200000,
    originalPrice: 6000000,
    rating: 5.0,
    reviews: 98,
    location: 'Nusa Dua, Bali',
    guests: 4,
    beds: 2,
    image:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
    amenities: ['WiFi', 'Parking', 'Breakfast', 'Spa', 'Beach Access', 'Butler Service'],
    available: true,
    discount: 13,
    size: '95 m²',
    highlights: ['Beachfront', 'Spa Access', 'Butler Service'],
  },
  {
    id: 6,
    name: 'Budget Friendly Guest House',
    type: 'Guest House',
    price: 450000,
    originalPrice: null,
    rating: 4.4,
    reviews: 178,
    location: 'Yogyakarta',
    guests: 3,
    beds: 2,
    image:
      'https://images.unsplash.com/photo-1615873968403-62e3d082f31d?w=800&h=600&fit=crop',
    amenities: ['WiFi', 'Parking', 'Shared Kitchen'],
    available: true,
    discount: 0,
    size: '22 m²',
    highlights: ['Budget Friendly', 'Near Malioboro', 'Local Experience'],
  },
];

const amenityIcons: { [key: string]: React.ReactNode } = {
  WiFi: <IconWifi size={14} />,
  Parking: <IconCar size={14} />,
  Breakfast: <IconCoffee size={14} />,
  AC: <IconWind size={14} />,
  'Mini Bar': <IconCoffee size={14} />,
  'Living Room': <IconBed size={14} />,
  'Private Pool': <IconPool size={14} />,
  Kitchen: <IconTools size={14} />,
  Garden: <IconBed size={14} />,
  Kitchenette: <IconTools size={14} />,
  Gym: <IconWeight size={14} />,
  Pool: <IconPool size={14} />,
  Spa: <IconCandle size={14} />,
  'Beach Access': <IconPool size={14} />,
  'Butler Service': <IconChefHat size={14} />,
  'Shared Kitchen': <IconTools size={14} />,
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
                <Badge size="xs" variant="outline" color="gray">
                  {room.size}
                </Badge>
              </Group>
              {room.highlights && room.highlights.length > 0 && (
                <Group gap={6}>
                  {room.highlights.slice(0, 2).map((highlight) => (
                    <Badge key={highlight} size="xs" variant="dot" color="green">
                      {highlight}
                    </Badge>
                  ))}
                </Group>
              )}
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
  // Return different cards based on roomIndex to show more variety
  const indices = [
    0, // Deluxe Ocean View Room
    1, // Premium Suite
    2, // Family Garden Villa
    3, // Cozy Studio Apartment
    4, // Luxury Beach Resort
    5, // Budget Friendly Guest House
  ];

  const indexToDisplay = indices[roomIndex % indices.length];
  return <RoomCard room={roomData[indexToDisplay]} />;
}
