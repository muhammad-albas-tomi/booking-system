'use client';
import {
  BackgroundImage,
  Badge,
  Box,
  Button,
  Center,
  Group,
  Overlay,
  Paper,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Transition,
  useMantineTheme,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useMediaQuery } from '@mantine/hooks';
import {
  IconCalendar,
  IconMapPin,
  IconSearch,
  IconSparkles,
  IconUsers,
} from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSearchQuery } from '~/stores/search';
import RoomGuestSelector from './room-selecttor';

const titles = [
  'Find Your Perfect Stay with StayEsea',
  'Discover Amazing Places with StayEsea',
  'Your Dream Vacation Awaits with StayEsea',
  'Explore Extraordinary Destinations with StayEsea',
];

const subtitles = [
  'Discover and book hotels, homes, and much more on StayEsea.',
  'From cozy apartments to luxury resorts, find your ideal accommodation.',
  'Book with confidence and enjoy memorable experiences worldwide.',
  'Travel smarter with our curated selection of premium properties.',
];

export const DashboardHeader = () => {
  const { searchData, setSearchData } = useSearchQuery();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const router = useRouter();
  const theme = useMantineTheme();
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    if (
      searchData.accommodationType ||
      searchData.checkIn ||
      searchData.checkOut
    ) {
      router.push('/booking');
    }
  };

  return (
    <Box style={{ position: 'relative', height: '100%' }}>
      <BackgroundImage
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        src="/images/header.jpg"
        h={isMobile ? '600px' : '500px'}
        w={'100%'}
      >
        <Overlay
          gradient="linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)"
          zIndex={1}
        />

        <Center p="md" h={'100%'} style={{ position: 'relative', zIndex: 2 }}>
          <Stack
            align="center"
            gap={isMobile ? 'lg' : 'xl'}
            w="100%"
            maw={1200}
            mx="auto"
          >
            <Transition
              mounted={true}
              transition="fade"
              duration={800}
              timingFunction="ease"
            >
              {(styles) => (
                <Stack align="center" gap="sm" style={styles}>
                  <Group gap="sm" mb="sm">
                    <Badge
                      size="lg"
                      variant="light"
                      color="yellow.3"
                      leftSection={<IconSparkles size={14} />}
                    >
                      Popular Choice
                    </Badge>
                    <Badge size="lg" variant="light" color="blue.2">
                      Best Prices
                    </Badge>
                  </Group>

                  <Text
                    fz={isMobile ? 'h2' : 'h1'}
                    fw={700}
                    c="white"
                    ta="center"
                    style={{
                      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                      lineHeight: 1.2,
                    }}
                  >
                    {titles[currentTitleIndex]}
                  </Text>

                  <Text
                    fz={isMobile ? 'md' : 'lg'}
                    c={'white'}
                    ta="center"
                    opacity={0.95}
                    maw={600}
                    style={{
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                    }}
                  >
                    {subtitles[currentTitleIndex]}
                  </Text>
                </Stack>
              )}
            </Transition>

            <Transition mounted={true} transition="skew-down" duration={1000}>
              {(styles) => (
                <Paper
                  mx={'auto'}
                  radius="xl"
                  shadow="2xl"
                  w={isMobile ? '95%' : isTablet ? '90%' : '80%'}
                  p={isMobile ? 'md' : 'xl'}
                  withBorder
                  style={{
                    backdropFilter: 'blur(20px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: `1px solid ${theme.colors.gray[2]}`,
                    transform: isSearchFocused ? 'scale(1.02)' : 'scale(1)',
                    transition: 'all 0.3s ease',
                    ...styles,
                  }}
                  onMouseEnter={() => setIsSearchFocused(true)}
                  onMouseLeave={() => setIsSearchFocused(false)}
                >
                  <Stack gap="md">
                    <Text size="lg" fw={600} ta="center" c="dark.9">
                      Quick Search
                    </Text>

                    <SimpleGrid
                      cols={{
                        base: 1,
                        sm: 2,
                        md: 3,
                      }}
                      spacing="md"
                    >
                      <Stack gap="xs">
                        <Group gap="xs">
                          <IconMapPin size={16} color={theme.colors.blue[6]} />
                          <Text size="sm" fw={500} c="dark.9">
                            Tipe Akomodasi
                          </Text>
                        </Group>
                        <Select
                          w="100%"
                          size="md"
                          placeholder="Pilih tipe akomodasi"
                          value={searchData.accommodationType}
                          onChange={(value) =>
                            setSearchData({ accommodationType: value || '' })
                          }
                          data={[
                            { value: 'hotel', label: '🏨 Hotel' },
                            { value: 'apartment', label: '🏢 Apartment' },
                            { value: 'villa', label: '🏡 Villa' },
                            { value: 'resort', label: '🏖️ Resort' },
                            { value: 'guesthouse', label: '🏠 Guest House' },
                          ]}
                          styles={{
                            input: {
                              minHeight: '48px',
                              fontSize: '16px',
                            },
                          }}
                        />
                      </Stack>

                      <Stack gap="xs">
                        <Group gap="xs">
                          <IconCalendar
                            size={16}
                            color={theme.colors.green[6]}
                          />
                          <Text size="sm" fw={500} c="dark.9">
                            Tanggal Menginap
                          </Text>
                        </Group>
                        <DatePickerInput
                          type="range"
                          w="100%"
                          size="md"
                          valueFormat="DD MMM YYYY"
                          placeholder="Pilih tanggal check-in - check-out"
                          value={[searchData.checkIn, searchData.checkOut]}
                          onChange={(dates) => {
                            const [checkIn, checkOut] = dates || [null, null];
                            setSearchData({ checkIn, checkOut });
                          }}
                          styles={{
                            input: {
                              minHeight: '48px',
                              fontSize: '16px',
                            },
                          }}
                        />
                      </Stack>

                      <Stack gap="xs">
                        <Group gap="xs">
                          <IconUsers size={16} color={theme.colors.orange[6]} />
                          <Text size="sm" fw={500} c="dark.9">
                            Kamar & Tamu
                          </Text>
                        </Group>
                        <Group
                          justify="space-between"
                          wrap="nowrap"
                          w={'100%'}
                          gap="sm"
                        >
                          <RoomGuestSelector />
                          <Button
                            size="md"
                            onClick={handleSearch}
                            leftSection={<IconSearch size={16} />}
                            style={{ flexShrink: 0 }}
                            variant="gradient"
                            gradient={{ from: 'blue', to: 'cyan' }}
                          >
                            {isMobile ? '' : 'Cari'}
                          </Button>
                        </Group>
                      </Stack>
                    </SimpleGrid>
                  </Stack>
                </Paper>
              )}
            </Transition>
          </Stack>
        </Center>
      </BackgroundImage>
    </Box>
  );
};
