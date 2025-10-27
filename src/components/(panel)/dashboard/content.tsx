'use client';

import { Container, FloatingIndicator, Group, Tabs } from '@mantine/core';
import { useState } from 'react';

import { Carousel } from '@mantine/carousel';

import { IconBedFilled, IconBuildingSkyscraper } from '@tabler/icons-react';
import classes from '~/styles/(panel)/content/tabs.shift.module.css';
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
    <Container my={'xl'}>
      <Tabs variant="none" value={value} onChange={setValue}>
        <Group w={'100%'} mb={16} justify="center">
          <Tabs.List w={300} ref={setRootRef} className={classes.list}>
            <Tabs.Tab
              value="1"
              leftSection={<IconBuildingSkyscraper size={18} />}
              ref={setControlRef('1')}
              className={classes.tab}
            >
              Kamar
            </Tabs.Tab>
            <Tabs.Tab
              value="2"
              ref={setControlRef('2')}
              className={classes.tab}
              leftSection={<IconBedFilled size={18} />}
            >
              Suites
            </Tabs.Tab>

            <FloatingIndicator
              target={value ? controlsRefs[value] : null}
              parent={rootRef}
              className={classes.indicator}
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
              <CardList />
            </Carousel.Slide>

            <Carousel.Slide>
              <CardList />
            </Carousel.Slide>

            <Carousel.Slide>
              <CardList />
            </Carousel.Slide>
            <Carousel.Slide>
              <CardList />
            </Carousel.Slide>
            <Carousel.Slide>
              <CardList />
            </Carousel.Slide>
            <Carousel.Slide>
              <CardList />
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
              <CardList />
            </Carousel.Slide>
          </Carousel>
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};
