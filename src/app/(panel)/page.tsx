import { Container } from '@mantine/core';
import { Metadata } from 'next';
import { Content } from '~/components/(panel)/dashboard/content';
import { DashboardHeader } from '~/components/(panel)/dashboard/header';

export const metadata: Metadata = {
  title: 'Dashboard - StayEsea',
  description: 'Find andbook hotels, homes, and much more on StayEsea.',
};

export default function Page() {
  return (
    <Container fluid px={0} mih={'30vh'} miw={'100vh'}>
      <DashboardHeader />
      <Content />
    </Container>
  );
}
