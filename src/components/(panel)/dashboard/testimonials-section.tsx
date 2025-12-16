'use client';

import {
  Container,
  Grid,
  Title,
  Text,
  Card,
  Avatar,
  Group,
  Stack,
  Rating,
  useMantineTheme,
} from '@mantine/core';
import { IconQuote } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    title: 'Marketing Manager',
    content: 'Pengalaman booking yang sangat menyenangkan! Proses mudah dan cepat. Akomodasinya sesuai dengan foto dan deskripsi.',
    location: 'Jakarta, Indonesia',
  },
  {
    id: 2,
    name: 'Budi Santoso',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    title: 'Software Engineer',
    content: 'StayEsea menjadi pilihan utama saya untuk business trip. Harga kompetitif dan customer service responsif.',
    location: 'Surabaya, Indonesia',
  },
  {
    id: 3,
    name: 'Maya Putri',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    rating: 4,
    title: 'Travel Blogger',
    content: 'Variasi akomodasi sangat lengkap, dari budget hotel hingga luxury resort. Review dari pengguna lain sangat membantu.',
    location: 'Bali, Indonesia',
  },
  {
    id: 4,
    name: 'David Chen',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    title: 'Entrepreneur',
    content: 'Platform booking yang user-friendly dengan fitur filter yang membantu menemukan akomodasi sesuai kebutuhan.',
    location: 'Singapore',
  },
  {
    id: 5,
    name: 'Amanda Lee',
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face',
    rating: 4,
    title: 'Digital Nomad',
    content: 'Sering traveling untuk workation, StayEsea selalu punya pilihan akomodasi dengan WiFi yang baik.',
    location: 'Yogyakarta, Indonesia',
  },
  {
    id: 6,
    name: 'Rizki Ahmad',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    title: 'Photographer',
    content: 'Booking family vacation jadi mudah dengan StayEsea. Bisa filter akomodasi yang family-friendly.',
    location: 'Bandung, Indonesia',
  },
];

export function TestimonialsSection() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Container
      size="xl"
      py={80}
      px={isMobile ? 'md' : 'xl'}
      style={{
        backgroundColor: theme.colors.gray[0],
      }}
    >
      <Stack align="center" gap={40}>
        <Stack align="center" gap={16} maw={600} mx="auto">
          <Title order={2} size={isMobile ? 32 : 48} fw={700} ta="center" c="dark.9">
            Apa Kata Mereka?
          </Title>
          <Text
            size={isMobile ? 'md' : 'lg'}
            c="dimmed"
            ta="center"
            lh={1.6}
          >
            Ribuan pelanggan puas telah mempercayai StayEsea untuk kebutuhan akomodasi mereka
          </Text>
        </Stack>

        <Grid>
          {testimonials.map((testimonial) => (
            <Grid.Col key={testimonial.id} span={{ base: 12, sm: 6, lg: 4 }}>
              <Card
                withBorder
                radius="md"
                p="xl"
                h="100%"
                style={{
                  transition: 'all 0.3s ease',
                  backgroundColor: 'white',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = theme.shadows.xl;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = theme.shadows.md;
                }}
              >
                <Stack gap={16} h="100%">
                  <Group justify="space-between" align="flex-start">
                    <IconQuote
                      size={24}
                      color={theme.colors.blue[6]}
                      style={{ opacity: 0.5 }}
                    />
                    <Rating value={testimonial.rating} fractions={2} readOnly />
                  </Group>

                  <Text
                    size="sm"
                    lh={1.6}
                    c="dark.9"
                    style={{ flex: 1 }}
                  >
                    &ldquo;{testimonial.content}&rdquo;
                  </Text>

                  <Group gap={12}>
                    <Avatar
                      src={testimonial.avatar}
                      size={48}
                      radius="50%"
                    />
                    <Stack gap={2} style={{ flex: 1 }}>
                      <Text fw={600} size="sm" c="dark.9">
                        {testimonial.name}
                      </Text>
                      <Text size="xs" c="dimmed">
                        {testimonial.title}
                      </Text>
                      <Text size="xs" c="blue.6">
                        📍 {testimonial.location}
                      </Text>
                    </Stack>
                  </Group>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}