'use client';
import {
  BackgroundImage,
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
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useMediaQuery } from '@mantine/hooks';
import { IconCalendarEvent } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useSearchQuery } from '~/stores/search';
import RoomGuestSelector from './room-selecttor';

export const DashboardHeader = () => {
  const { searchData, setSearchData } = useSearchQuery();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const router = useRouter();
  return (
    <Box style={{ position: 'relative', height: '100%' }}>
      <BackgroundImage
        style={{
          backgroundSize: 'cover',
        }}
        src="/images/header.jpg"
        h={'500px'}
        w={'100%'}
      >
        {/* overlay gelap */}
        <Overlay color="#000" opacity={0.5} zIndex={1} />

        {/* konten di atas overlay */}
        <Center p="md" h={'100%'} style={{ position: 'relative', zIndex: 2 }}>
          <Stack align="center" gap="xl" w="100%">
            <Stack align="center" gap="sm">
              <Text fz={isMobile ? 'h2' : 'h1'} fw={700} c="white" ta="center">
                Find Your Perfect Stay with StayEsea
              </Text>
              <Text
                fz={isMobile ? 'md' : 'lg'}
                c={'white'}
                ta="center"
                opacity={0.9}
              >
                Discover and book hotels, homes, and much more on StayEsea.
              </Text>
            </Stack>

            <Paper
              mx={'auto'}
              p="lg"
              radius="lg"
              shadow="xl"
              withBorder
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <SimpleGrid
                cols={{
                  base: 1,
                  sm: 2,
                  md: 3,
                }}
                spacing="sm"
                w={'100%'}
              >
                <Select
                  w="100%"
                  size="md"
                  leftSection="🏨"
                  label={
                    <Text size="sm" fw={500}>
                      Tipe Akomodasi
                    </Text>
                  }
                  placeholder="Pilih tipe akomodasi"
                  value={searchData.accommodationType}
                  onChange={(value) =>
                    setSearchData({ accommodationType: value || '' })
                  }
                  data={[
                    { value: 'hotel', label: 'Hotel' },
                    { value: 'apartment', label: 'Apartment' },
                    { value: 'villa', label: 'Villa' },
                    { value: 'resort', label: 'Resort' },
                    { value: 'guesthouse', label: 'Guest House' },
                  ]}
                  styles={{
                    input: {
                      minHeight: '48px',
                    },
                  }}
                />

                <DatePickerInput
                  type="range"
                  clearable
                  w="100%"
                  size="md"
                  leftSection={<IconCalendarEvent />}
                  label={
                    <Text size="sm" fw={500}>
                      Tanggal Menginap
                    </Text>
                  }
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
                    },
                  }}
                />
                <Stack gap={5} w="100%">
                  <Text mt={'2px'} size="sm" fw={500}>
                    Kamar & Tamu
                  </Text>
                  <Group wrap="nowrap" w={'100%'} gap="sm">
                    <RoomGuestSelector />
                    <Button
                      size="md"
                      onClick={() => {
                        router.push('/booking');
                      }}
                      leftSection="🔍"
                      style={{ flexShrink: 0 }}
                    >
                      Cari
                    </Button>
                  </Group>
                </Stack>
              </SimpleGrid>
            </Paper>
          </Stack>
        </Center>
      </BackgroundImage>
    </Box>
  );
};
