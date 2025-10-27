'use client';
import {
  BackgroundImage,
  Box,
  Button,
  Center,
  Group,
  Overlay,
  Paper,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export const DashboardHeader = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
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
          <Stack align="center" gap="md">
            <Text fz={isMobile ? 'h1' : 'h3'} fw={'bold'} c="white">
              Find Your Perfect Stay with StayEsea
            </Text>
            <Text c={'white'}>
              Discover and book hotels, homes, and much more on StayEsea.
            </Text>
            <Paper w={'fit-content'} mx={'auto'} flex={'row'} p={8}>
              <Group p={0} justify="center" w={'100%'}>
                <TextInput
                  style={{
                    border: 'none',
                    width: isMobile ? '200px' : '350px',
                    borderRadius: '4px',
                  }}
                  placeholder="Search..."
                />
                <Button ml={'sm'} size="sm">
                  Search
                </Button>
              </Group>
            </Paper>
          </Stack>
        </Center>
      </BackgroundImage>
    </Box>
  );
};
