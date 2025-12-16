import { Container, Stack } from '@mantine/core';
import { Metadata } from 'next';
import { Content } from '~/components/(panel)/dashboard/content';
import { FeaturesSection } from '~/components/(panel)/dashboard/features-section';
import { Footer } from '~/components/(panel)/dashboard/footer';
import { DashboardHeader } from '~/components/(panel)/dashboard/header';
import { TestimonialsSection } from '~/components/(panel)/dashboard/testimonials-section';

export const metadata: Metadata = {
  title: 'Dashboard - StayEsea',
  description: 'Find and book hotels, homes, and much more on StayEsea.',
};

export default function Page() {
  return (
    <Stack gap={0}>
      <DashboardHeader />
      <Container fluid px={0} miw={'100%'}>
        <Content />
      </Container>
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </Stack>
  );
}
