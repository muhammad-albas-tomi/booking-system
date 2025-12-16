'use client';

import { Container, FloatingIndicator, Group, Tabs, Grid, Title, Text, ThemeIcon, Stack, Card } from '@mantine/core';
import { useState } from 'react';

import { Carousel } from '@mantine/carousel';

import { IconBedFilled, IconBuildingSkyscraper, IconHome, IconUsers, IconStarFilled, IconTrendingUp } from '@tabler/icons-react';
import { CardList } from './card';

const stats = [
  { icon: IconHome, label: 'Properti Tersedia', value: '10,000+', color: 'blue' },
  { icon: IconUsers, label: 'Pelanggan Puas', value: '50,000+', color: 'green' },
  { icon: IconStarFilled, label: 'Rating Rata-rata', value: '4.8/5', color: 'yellow' },
  { icon: IconTrendingUp, label: 'Pertumbuhan', value: '150%/tahun', color: 'orange' },
];

export const Content = () => {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string | null>('1');
  const [controlsRefs, setControlsRefs] = useState<
    Record<string, HTMLButtonElement | null>
  >({});
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };
  return (
    <>
      {/* Stats Section */}
      <Container size="xl" my={'xl'} px="xl">
        <Grid gutter="lg">
          {stats.map((stat, index) => (
            <Grid.Col key={index} span={{ base: 6, sm: 3 }}>
              <Stack align="center" gap={8} p="md" style={{ backgroundColor: 'white', borderRadius: 12, border: '1px solid #e5e7eb' }}>
                <ThemeIcon size={48} radius="md" variant="light" color={stat.color}>
                  <stat.icon size={24} />
                </ThemeIcon>
                <Text size="xl" fw={700} c="dark.9" ta="center">
                  {stat.value}
                </Text>
                <Text size="sm" c="dimmed" ta="center">
                  {stat.label}
                </Text>
              </Stack>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      {/* Main Content */}
      <Container my={'xl'}>
        <Stack align="center" gap={32} mb={48}>
          <Title order={2} size={32} fw={700} ta="center" c="dark.9">
            Temukan Akomodasi Impian Anda
          </Title>
          <Text size="lg" c="dimmed" ta="center" maw={800}>
            Pilihan terbaik untuk liburan, bisnis, atau staycation Anda.
            Nikmati pengalaman menginap yang tak terlupakan.
          </Text>
        </Stack>

        <Tabs variant="outline" value={value} onChange={setValue}>
          <Group w={'100%'} mb={16} justify="center">
            <Tabs.List ref={setRootRef}>
              <Tabs.Tab
                value="1"
                leftSection={<IconBuildingSkyscraper size={18} />}
                ref={setControlRef('1')}
              >
                Kamar
              </Tabs.Tab>
              <Tabs.Tab
                value="2"
                ref={setControlRef('2')}
                leftSection={<IconBedFilled size={18} />}
              >
                Suites
              </Tabs.Tab>

              <FloatingIndicator
                target={value ? controlsRefs[value] : null}
                parent={rootRef}
              />
            </Tabs.List>
          </Group>

          <Tabs.Panel value="1">
            <Carousel
              w="100%"
              slideSize={{ base: '100%', sm: '50%', md: '33.333%' }}
              slideGap="md"
              controlsOffset={0}
              controlSize={32}
              withIndicators
              loop
              align="start"
              styles={{
                indicator: {
                  width: 8,
                  height: 8,
                  transition: 'width 250ms',
                  backgroundColor: 'var(--mantine-color-primary-9)',
                },
                indicators: {
                  bottom: -15,
                  zIndex: 10,
                },
              }}
              withControls
              nextControlProps={{
                style: {
                  background: 'white',
                  position: 'absolute',
                  top: '45%',
                  right: -20,
                  boxShadow:
                    '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
                },
              }}
              previousControlProps={{
                style: {
                  background: 'white',
                  position: 'absolute',
                  top: '45%',
                  left: -20,
                  boxShadow:
                    '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
                },
              }}
            >
              <Carousel.Slide>
                <CardList roomIndex={0} />
              </Carousel.Slide>

              <Carousel.Slide>
                <CardList roomIndex={1} />
              </Carousel.Slide>

              <Carousel.Slide>
                <CardList roomIndex={2} />
              </Carousel.Slide>

              <Carousel.Slide>
                <CardList roomIndex={3} />
              </Carousel.Slide>

              <Carousel.Slide>
                <CardList roomIndex={4} />
              </Carousel.Slide>

              <Carousel.Slide>
                <CardList roomIndex={5} />
              </Carousel.Slide>
            </Carousel>
          </Tabs.Panel>
          <Tabs.Panel value="2">
            <Carousel
              w="100%"
              slideSize={{ base: '100%', sm: '50%', md: '33.333%' }}
              slideGap="md"
              controlsOffset={0}
              controlSize={32}
              withIndicators
              loop
              align="start"
              styles={{
                indicator: {
                  width: 8,
                  height: 8,
                  transition: 'width 250ms',
                  backgroundColor: 'var(--mantine-color-primary-9)',
                },
                indicators: {
                  bottom: -15,
                  zIndex: 10,
                },
              }}
              withControls
              nextControlProps={{
                style: {
                  background: 'white',
                  position: 'absolute',
                  top: '45%',
                  right: -20,
                  boxShadow:
                    '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
                },
              }}
              previousControlProps={{
                style: {
                  background: 'white',
                  position: 'absolute',
                  top: '45%',
                  left: -20,
                  boxShadow:
                    '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
                },
              }}
            >
              <Carousel.Slide>
                <CardList roomIndex={1} />
              </Carousel.Slide>
            </Carousel>
          </Tabs.Panel>
          <Tabs.Panel value="2">
            <Carousel
              w="100%"
              slideSize={{ base: '100%', sm: '50%', md: '33.333%' }}
              slideGap="md"
              controlsOffset={0}
              controlSize={32}
              withIndicators
              loop
              align="start"
              styles={{
                indicator: {
                  width: 8,
                  height: 8,
                  transition: 'width 250ms',
                  backgroundColor: 'var(--mantine-color-primary-9)',
                },
                indicators: {
                  bottom: -15,
                  zIndex: 10,
                },
              }}
              withControls
              nextControlProps={{
                style: {
                  background: 'white',
                  position: 'absolute',
                  top: '45%',
                  right: -20,
                  boxShadow:
                    '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
                },
              }}
              previousControlProps={{
                style: {
                  background: 'white',
                  position: 'absolute',
                  top: '45%',
                  left: -20,
                  boxShadow:
                    '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
                },
              }}
            >
              <Carousel.Slide>
                <CardList roomIndex={1} />
              </Carousel.Slide>

              <Carousel.Slide>
                <CardList roomIndex={2} />
              </Carousel.Slide>

              <Carousel.Slide>
                <CardList roomIndex={4} />
              </Carousel.Slide>
            </Carousel>
          </Tabs.Panel>
        </Tabs>
      </Container>
      <Container size="xl" py={60} px="xl">
        <Stack align="center" gap={24} mb={48}>
          <Title order={2} size={32} fw={700} ta="center" c="dark.9">
            Lokasi Strategis
          </Title>
          <Text size="lg" c="dimmed" ta="center" maw={600}>
            Akomodasi kami tersebar di lokasi-lokasi terbaik seluruh Indonesia
          </Text>
        </Stack>

        <Card
          shadow="lg"
          radius="md"
          p={0}
          style={{
            overflow: 'hidden',
            border: '1px solid #e5e7eb',
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.2461349088453!2d112.64689888689868!3d-7.941783451495874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6299d697b0f9b%3A0x8b79b3b5afe9f2c9!2sGrand%20Mercure%20Malang%20Mirama!5e0!3m2!1sid!2sid!4v1761710041834!5m2!1sid!2sid"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Card>
      </Container>
    </>
  );
};
