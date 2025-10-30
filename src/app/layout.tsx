import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '~/styles/globals.css';

import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import '@mantine/dates/styles.css';
import { Notifications } from '@mantine/notifications';
import { SessionProviderWrapper } from '~/components/providers/session-provider';

export { metadata } from '~/configs/site';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link
          rel="shortcut icon"
          // href="/images/logo-astax.png"
          type="image/x-icon"
        />
      </head>
      <body>
        <SessionProviderWrapper>
          <MantineProvider>
            <Notifications />
            {children}
          </MantineProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
