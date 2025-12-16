'use client';

import {
  Container,
  Grid,
  Group,
  Stack,
  Text,
  Title,
  Anchor,
  ActionIcon,
  Divider,
  Box,
  useMantineTheme,
} from '@mantine/core';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
  IconMapPin,
  IconPhone,
  IconMail,
  IconClock,
} from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

const footerLinks = {
  'Tentang Kami': [
    { label: 'Tentang StayEsea', href: '#' },
    { label: 'Karir', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  'Layanan': [
    { label: 'Hotel', href: '#' },
    { label: 'Apartemen', href: '#' },
    { label: 'Villa', href: '#' },
    { label: 'Resort', href: '#' },
  ],
  'Bantuan': [
    { label: 'FAQ', href: '#' },
    { label: 'Hubungi Kami', href: '#' },
    { label: 'Kebijakan Privasi', href: '#' },
    { label: 'Syarat & Ketentuan', href: '#' },
  ],
};

const socialLinks = [
  { icon: IconBrandFacebook, href: '#', label: 'Facebook' },
  { icon: IconBrandInstagram, href: '#', label: 'Instagram' },
  { icon: IconBrandTwitter, href: '#', label: 'Twitter' },
  { icon: IconBrandYoutube, href: '#', label: 'Youtube' },
];

export function Footer() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Box
      style={{
        backgroundColor: theme.colors.dark[9],
        color: 'white',
      }}
    >
      <Container size="xl" py={60} px={isMobile ? 'md' : 'xl'}>
        <Grid gutter={40}>
          {/* Company Info */}
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Stack gap={24}>
              <Title order={3} size={24} fw={700} c="white">
                StayEsea
              </Title>
              <Text size="sm" c="gray.4" lh={1.6}>
                Platform booking akomodasi terpercaya di Indonesia.
                Temukan tempat tinggal impian Anda dengan mudah dan aman.
              </Text>

              <Group gap={16}>
                {socialLinks.map((social) => (
                  <ActionIcon
                    key={social.label}
                    variant="subtle"
                    color="gray.4"
                    size={36}
                    radius="md"
                    component="a"
                    href={social.href}
                    style={{
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = theme.colors.blue[6];
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = theme.colors.gray[4];
                    }}
                  >
                    <social.icon size={18} />
                  </ActionIcon>
                ))}
              </Group>
            </Stack>
          </Grid.Col>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <Grid.Col key={category} span={{ base: 6, md: 3, lg: 2 }}>
              <Stack gap={16}>
                <Text fw={600} size="lg" c="white">
                  {category}
                </Text>
                <Stack gap={12}>
                  {links.map((link) => (
                    <Anchor
                      key={link.label}
                      href={link.href}
                      size="sm"
                      c="gray.4"
                      style={{
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = theme.colors.blue[4];
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = theme.colors.gray[4];
                      }}
                    >
                      {link.label}
                    </Anchor>
                  ))}
                </Stack>
              </Stack>
            </Grid.Col>
          ))}

          {/* Contact Info */}
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Stack gap={16}>
              <Text fw={600} size="lg" c="white">
                Hubungi Kami
              </Text>
              <Stack gap={12}>
                <Group gap={12}>
                  <IconMapPin size={16} color={theme.colors.blue[4]} />
                  <Text size="sm" c="gray.4">
                    Jl. Sudirman No. 123, Jakarta Pusat 10110
                  </Text>
                </Group>

                <Group gap={12}>
                  <IconPhone size={16} color={theme.colors.blue[4]} />
                  <Anchor
                    href="tel:+62123456789"
                    size="sm"
                    c="gray.4"
                    style={{ textDecoration: 'none' }}
                  >
                    +62 123 456 789
                  </Anchor>
                </Group>

                <Group gap={12}>
                  <IconMail size={16} color={theme.colors.blue[4]} />
                  <Anchor
                    href="mailto:info@stayesea.com"
                    size="sm"
                    c="gray.4"
                    style={{ textDecoration: 'none' }}
                  >
                    info@stayesea.com
                  </Anchor>
                </Group>

                <Group gap={12}>
                  <IconClock size={16} color={theme.colors.blue[4]} />
                  <Text size="sm" c="gray.4">
                    Senin - Jumat: 09:00 - 18:00 WIB
                  </Text>
                </Group>
              </Stack>
            </Stack>
          </Grid.Col>
        </Grid>

        <Divider
          color={theme.colors.dark[3]}
          my={40}
          style={{ opacity: 0.3 }}
        />

        <Group justify="space-between" align="center">
          <Text size="sm" c="gray.4">
            © 2024 StayEsea. Semua hak dilindungi.
          </Text>
          <Text size="sm" c="gray.4">
            Made with ❤️ in Indonesia
          </Text>
        </Group>
      </Container>
    </Box>
  );
}