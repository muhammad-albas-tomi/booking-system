'use client';

import { Carousel } from '@mantine/carousel';
import { Button, Group, Paper, Text, Title } from '@mantine/core';
import { useState } from 'react';

// Contoh komponen untuk demonstrasi berbagai jenis indikator
const DemoSlide = ({ title }: { title: string }) => (
  <Paper h={200} bg="blue.1" display="flex" align="center" justify="center">
    <Text size="xl" fw={500}>{title}</Text>
  </Paper>
);

export const CarouselIndicatorsExample = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <DemoSlide key="1" title="Slide 1" />,
    <DemoSlide key="2" title="Slide 2" />,
    <DemoSlide key="3" title="Slide 3" />,
    <DemoSlide key="4" title="Slide 4" />,
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Title order={2} mb="md">Carousel Indicators Examples</Title>

      {/* 1. Default Indicators */}
      <section style={{ marginBottom: '40px' }}>
        <Title order={4} mb="sm">1. Default Indicators</Title>
        <Carousel
          w="100%"
          slideSize={{ base: '100%', sm: '50%' }}
          slideGap="md"
          withIndicators
        >
          {slides}
        </Carousel>
      </section>

      {/* 2. Carousel with Custom Controls */}
      <section style={{ marginBottom: '40px' }}>
        <Title order={4} mb="sm">2. With Custom Controls</Title>
        <Carousel
          w="100%"
          slideSize={{ base: '100%', sm: '50%' }}
          slideGap="md"
          withControls
          withIndicators
        >
          {slides}
        </Carousel>
      </section>

      {/* 3. Carousel without Controls (Only Indicators) */}
      <section style={{ marginBottom: '40px' }}>
        <Title order={4} mb="sm">3. Indicators Only (No Controls)</Title>
        <Carousel
          w="100%"
          slideSize={{ base: '100%', sm: '50%' }}
          slideGap="md"
          withControls={false}
          withIndicators
        >
          {slides}
        </Carousel>
      </section>

      {/* 4. Multiple Carousels */}
      <section style={{ marginBottom: '40px' }}>
        <Title order={4} mb="sm">4. Multiple Carousels with Different Sizes</Title>
        <Carousel
          w="100%"
          slideSize={{ base: '100%', sm: '33.333%', md: '25%' }}
          slideGap="md"
          withIndicators
          align="start"
        >
          {slides}
        </Carousel>
      </section>

      {/* 5. Custom Style Carousel */}
      <section style={{ marginBottom: '40px' }}>
        <Title order={4} mb="sm">5. Custom Styled Carousel</Title>
        <Carousel
          w="100%"
          slideSize={{ base: '100%', sm: '50%' }}
          slideGap="md"
          withControls
          controlSize={40}
          withIndicators
          styles={{
            control: {
              background: '#1c7ed6',
              border: 'none',
              '&[data-inactive]': {
                opacity: 0.5,
              },
            },
            indicator: {
              background: 'rgba(0, 0, 0, 0.3)',
              width: 8,
              height: 8,
              transition: 'width 0.2s ease',
              '&[data-active]': {
                background: '#1c7ed6',
                width: 24,
              },
            },
          }}
        >
          {slides}
        </Carousel>
      </section>
    </div>
  );
};

export default CarouselIndicatorsExample;