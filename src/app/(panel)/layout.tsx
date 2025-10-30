import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '~/styles/globals.css';

import '@mantine/dates/styles.css';
import { Providers } from '~/components/providers';

export { metadata } from '~/configs/site';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Providers>{children}</Providers>;
}
