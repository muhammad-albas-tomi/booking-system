'use client';

import { Container, FloatingIndicator, Group, Tabs } from '@mantine/core';
import { useState } from 'react';

import { Carousel } from '@mantine/carousel';

import { IconBedFilled, IconBuildingSkyscraper } from '@tabler/icons-react';
import { CardList } from './card';

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
      <Container my={'xl'}>
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
                <CardList roomIndex={0} />
              </Carousel.Slide>
              <Carousel.Slide>
                <CardList roomIndex={1} />
              </Carousel.Slide>
              <Carousel.Slide>
                <CardList roomIndex={2} />
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
        </Tabs>
      </Container>
      <Container mx={'auto'} fluid px={32} mb={48} maw={1200}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.2461349088453!2d112.64689888689868!3d-7.941783451495874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6299d697b0f9b%3A0x8b79b3b5afe9f2c9!2sGrand%20Mercure%20Malang%20Mirama!5e0!3m2!1sid!2sid!4v1761710041834!5m2!1sid!2sid"
          width="600"
          height="450"
          style={{ border: 0, width: '100%', marginTop: 32, borderRadius: 8 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container>
    </>
  );
};
