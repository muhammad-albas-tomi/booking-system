'use client';

import {
  Container,
  Grid,
  Title,
  Text,
  Card,
  ThemeIcon,
  Stack,
  useMantineTheme,
} from '@mantine/core';
import {
  IconShieldCheck,
  IconCurrencyDollar,
  IconHeadset,
  IconMap2,
  IconBolt,
  IconUsers,
} from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

const features = [
  {
    icon: IconShieldCheck,
    title: 'Aman Terpercaya',
    description: 'Sistem pembayaran yang aman dan perlindungan data pribadi Anda',
    color: 'blue',
  },
  {
    icon: IconCurrencyDollar,
    title: 'Harga Terbaik',
    description: 'Dapatkan penawaran terbaik dan jaminan harga termurah',
    color: 'green',
  },
  {
    icon: IconHeadset,
    title: 'Support 24/7',
    description: 'Tim customer service kami siap membantu kapan saja',
    color: 'orange',
  },
  {
    icon: IconMap2,
    title: 'Lokasi Strategis',
    description: 'Pilihan akomodasi di lokasi-lokasi terbaik',
    color: 'purple',
  },
  {
    icon: IconBolt,
    title: 'Booking Cepat',
    description: 'Proses pemesanan yang cepat dan mudah tanpa ribet',
    color: 'red',
  },
  {
    icon: IconUsers,
    title: 'Review Jujur',
    description: 'Ulasan dari tamu nyata untuk membantu pilihan Anda',
    color: 'cyan',
  },
];

export function FeaturesSection() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Container size="xl" py={80} px={isMobile ? 'md' : 'xl'}>
      <Stack align="center" gap={40}>
        <Stack align="center" gap={16} maw={600} mx="auto">
          <Title order={2} size={isMobile ? 32 : 48} fw={700} ta="center" c="dark.9">
            Mengapa Memilih StayEsea?
          </Title>
          <Text
            size={isMobile ? 'md' : 'lg'}
            c="dimmed"
            ta="center"
            lh={1.6}
          >
            Platform booking terpercaya dengan berbagai keunggulan untuk memenuhi kebutuhan perjalanan Anda
          </Text>
        </Stack>

        <Grid>
          {features.map((feature, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6, lg: 4 }}>
              <Card
                withBorder
                radius="md"
                p="xl"
                h="100%"
                style={{
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
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
                <Stack align="flex-start" gap={16}>
                  <ThemeIcon
                    size={48}
                    radius="md"
                    variant="light"
                    color={feature.color}
                  >
                    <feature.icon size={24} />
                  </ThemeIcon>

                  <Stack gap={8}>
                    <Text fw={600} size="lg" c="dark.9">
                      {feature.title}
                    </Text>
                    <Text size="sm" c="dimmed" lh={1.5}>
                      {feature.description}
                    </Text>
                  </Stack>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}