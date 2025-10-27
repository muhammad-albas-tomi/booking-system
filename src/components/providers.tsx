'use client';

import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import NextTopLoader from 'nextjs-toploader';
import { theme } from '~/utils/mantine';
import { getQueryClient } from '~/utils/query';
import { AppShell } from './layout/app-shell';
import { ProgressBarClient } from './layout/progress-bar';

export interface ProvidersProps extends React.PropsWithChildren {
  withQueryDevtools?: boolean;
}

export function Providers({
  withQueryDevtools = true,
  children,
}: ProvidersProps) {
  const client = getQueryClient();

  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={client}>
        {/* Trigger progress bar for router push */}
        <ProgressBarClient />
        {/* Trigger progress bar for router push */}
        <NextTopLoader height={3} color="#33aded" showSpinner={false} />
        <AppShell>{children}</AppShell>
        {withQueryDevtools && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>

      <Notifications />
    </MantineProvider>
  );
}
