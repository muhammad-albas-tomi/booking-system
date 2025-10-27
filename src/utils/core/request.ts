import { isServer } from '@tanstack/react-query';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';
import { auth, signOut } from '../auth';

type OptionsType = RequestInit & {
  withAuth?: boolean;
  formData?: FormData;
};

export async function request(
  url: string | URL | globalThis.Request,
  options?: OptionsType,
) {
  const allOptions = {
    withAuth: false,
    ...options,
  };

  const controller = new AbortController();
  const timeout = setTimeout(
    () => {
      controller.abort();
    },
    Number(process.env.NEXT_PUBLIC_DEFAULT_REQUEST_TIMEOUT_DURATION) || 30000,
  );

  const headers = new Headers(allOptions.headers);
  const { withAuth, formData, ...otherOptions } = allOptions;

  if (!formData) {
    headers.set('Content-Type', 'application/json');
  }

  if (withAuth) {
    /**
     * Handle withAuth here, for example:
     * - Add Authorization header
     */
    const session = (
      typeof window === 'undefined' ? await auth() : await getSession()
    ) as Session;
    if (!session) {
      if (typeof window === 'undefined') {
        await signOut({
          redirectTo: '/auth/login',
          redirect: true,
        });
      } else {
        await signOut({
          redirectTo: '/auth/login',
          redirect: true,
        });
      }
    }

    if (session?.tokens.accessToken) {
      headers.set('Authorization', `Bearer ${session.tokens.accessToken}`);
    }
  }

  const response = await fetch(url, {
    ...otherOptions,
    body: formData || otherOptions?.body,
    headers,
    signal: AbortSignal.any(
      [otherOptions?.signal, controller.signal].filter(
        (signal): signal is AbortSignal => signal !== undefined,
      ),
    ),
    credentials: 'omit',
  });

  clearTimeout(timeout);

  if (response.status === 204) {
    return;
  }

  const data = await response.json();

  if (!response.ok) {
    if (response.status === 401) {
      signOut({
        redirectTo: '/auth/login',
        redirect: true,
      });
      if (!isServer) {
        window.location.reload();
      }
    }

    if ('errors' in data) {
      const errors = data.errors as ({ detail: string } | string)[];

      throw new Error(
        errors
          .map((error) => {
            if (typeof error === 'string') {
              return error;
            }

            return error.detail;
          })
          .join(', '),
      );
    }

    throw new Error(JSON.stringify(data));
  } else {
    return data;
  }
}
