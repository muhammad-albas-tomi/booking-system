'use client';

import {
  Box,
  Button,
  Container,
  Group,
  LoadingOverlay,
  Paper,
  Text,
  Title,
} from '@mantine/core';
import { IconBrandGoogle } from '@tabler/icons-react';
import { getSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [sessionLoading, setSessionLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await getSession();
        if (session) {
          router.push('/');
        }
      } catch (error) {
        console.error('Error checking session:', error);
      } finally {
        setSessionLoading(false);
      }
    };

    checkSession();
  }, [router]);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      // Menggunakan signIn dari next-auth/react untuk NextAuth v5
      const result = await signIn('google', {
        callbackUrl: '/',
        redirect: false,
      });

      if (result?.error) {
        throw new Error(result.error);
      } else if (result?.url) {
        router.push(result.url);
      }
    } catch (error) {
      console.error('Google sign in error:', error);
      // Fallback ke manual redirect jika error
      window.location.href = '/api/auth/signin?callbackUrl=/login';
    } finally {
      setLoading(false);
    }
  };

  if (sessionLoading) {
    return (
      <Box h="100vh" pos="relative">
        <LoadingOverlay visible={true} />
      </Box>
    );
  }

  return (
    <Container size={420} my={40}>
      <Box pos="relative">
        <LoadingOverlay visible={loading} />

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <Title ta="center" order={2}>
            Selamat Datang!
          </Title>
          <Text c="dimmed" size="sm" ta="center" mt={5}>
            Masuk ke akun Anda untuk melanjutkan
          </Text>

          <Group grow mb="md" mt="md">
            <Button
              leftSection={<IconBrandGoogle size={18} />}
              variant="outline"
              onClick={handleGoogleSignIn}
              fullWidth
            >
              Masuk dengan Google
            </Button>
          </Group>

          <Text c="dimmed" size="xs" ta="center" mt="md">
            Dengan melanjutkan, Anda menyetujui syarat dan ketentuan kami
          </Text>
        </Paper>
      </Box>
    </Container>
  );
}
