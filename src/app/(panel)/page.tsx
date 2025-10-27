import { Container } from '@mantine/core';
import { Content } from '~/components/(panel)/dashboard/content';
import { DashboardHeader } from '~/components/(panel)/dashboard/header';

export default function Page() {
  return (
    <Container fluid px={0} mih={'30vh'} miw={'100vh'}>
      <DashboardHeader />
      <Content />
    </Container>
  );
}
