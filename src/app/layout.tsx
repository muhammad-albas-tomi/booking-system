import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '~/styles/globals.css';

import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import '@mantine/dates/styles.css';
import { Providers } from '~/components/providers';

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
