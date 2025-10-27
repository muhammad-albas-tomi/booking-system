import {
  Container,
  Divider,
  Group,
  List,
  SimpleGrid,
  Text,
} from '@mantine/core';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandTwitter,
  IconBrandYoutube,
} from '@tabler/icons-react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <Container bg={'primary'} fluid component="footer" py="md" px="md">
      <Group justify="center" align="center">
        <Divider
          my="sm"
          size={'md'}
          w={{
            base: '30%',
            md: '41%',
          }}
        />
        <Text fz={'h2'} fw={'bold'} c={'white'}>
          © 丂ｲ乇
        </Text>
        <Divider
          my="sm"
          size={'md'}
          w={{
            base: '30%',
            md: '41%',
          }}
        />
      </Group>

      <Container size={'93%'} mt={'md'}>
        <SimpleGrid
          cols={{
            xs: 1,
            sm: 2,
            lg: 4,
            md: 3,
          }}
        >
          <List spacing="sm" listStyleType="none">
            {/* Perusahaan */}
            <List.Item fw={'bold'} fz={'md'} c={'white'}>
              Perusahaan
            </List.Item>
            <List.Item fz={'sm'} c="white">
              Group Easye
            </List.Item>
            <List.Item fz={'sm'} c="white">
              Managemen & Pengembangan
            </List.Item>
            <List.Item fz={'sm'} c="white">
              Karir
            </List.Item>
            <List.Item fz={'sm'} c="white">
              Program Afilisasi
            </List.Item>
          </List>

          {/* Navigasi */}
          <List spacing="sm" listStyleType="none">
            <List.Item fw={'bold'} fz={'md'} c={'white'}>
              Navigasi
            </List.Item>
            <List.Item fz={'sm'} c="white">
              Petas Situs
            </List.Item>
            <List.Item fz={'sm'} c="white">
              Aksesbilitas Website
            </List.Item>
          </List>

          {/* Solusi  Profesional */}
          <List spacing="sm" listStyleType="none">
            <List.Item fw={'bold'} fz={'md'} c={'white'}>
              Solusi Profesional
            </List.Item>
            <List.Item fz={'sm'} c="white">
              Perjalanan Bisnis
            </List.Item>
            <List.Item fz={'sm'} c="white">
              Pertemuan & Acara
            </List.Item>
            <List.Item fz={'sm'} c="white">
              Profesional & Sewa Jangka Panjang
            </List.Item>
          </List>

          {/* Butuh Bantuan */}
          <List spacing="sm" listStyleType="none">
            <List.Item fw={'bold'} fz={'md'} c={'white'}>
              Butuh Bantuan
            </List.Item>
            <List.Item fz={'sm'} c="white">
              Kelola Pemesanan Anda
            </List.Item>
            <List.Item fz={'sm'} c="white">
              Dukungan Pelanggan
            </List.Item>
            <List.Item fz={'sm'} c="white">
              Bantuan & Kontak Kami
            </List.Item>
          </List>
        </SimpleGrid>

        <Divider my="md" size={'xs'} color="gray.4" />

        <Group mt={'md'} justify="center" align="center">
          <Link
            href={'#'}
            style={{
              textDecoration: 'none',
            }}
          >
            <IconBrandFacebook
              color="white"
              style={{
                height: '24px',
                width: '24px',
              }}
            />
          </Link>
          <Link
            href={'#'}
            style={{
              textDecoration: 'none',
            }}
          >
            <IconBrandInstagram
              color="white"
              style={{
                height: '24px',
                width: '24px',
              }}
            />
          </Link>
          <Link
            href={'#'}
            style={{
              textDecoration: 'none',
            }}
          >
            <IconBrandTiktok
              color="white"
              style={{
                height: '24px',
                width: '24px',
              }}
            />
          </Link>
          <Link
            href={'#'}
            style={{
              textDecoration: 'none',
            }}
          >
            <IconBrandTwitter
              color="white"
              style={{
                height: '24px',
                width: '24px',
              }}
            />
          </Link>
          <Link
            href={'#'}
            style={{
              textDecoration: 'none',
            }}
          >
            <IconBrandYoutube
              color="white"
              style={{
                height: '24px',
                width: '24px',
              }}
            />
          </Link>
        </Group>
        <Group justify="center" align="center">
          <Text fz={'sm'} c="white" mt={'md'}>
            All rights reserved. © 丂ㄒ卂ㄚ乇丂乇卂 2025
          </Text>
        </Group>
      </Container>
    </Container>
  );
};
