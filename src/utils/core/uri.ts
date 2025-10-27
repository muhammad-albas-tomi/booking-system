import { ParamsType } from '~/types/core/uri';

export function generateUrl(context: string, params?: ParamsType): string {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_API_URL is not defined');
  }
  const basePath = process.env.NEXT_PUBLIC_API_PATH || '';

  const url = new URL(baseUrl);

  url.pathname = url.pathname + '/' + context;
  url.pathname = url.pathname.replace(/\/+/g, '/');

  if (basePath) {
    url.pathname = basePath + url.pathname;
  }

  if (params) {
    url.search = generateParams(params);
  }

  return url.toString();
}

export function generateParams(params: ParamsType): string {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value || typeof value === 'boolean') {
      if (Array.isArray(value)) {
        value.forEach((value) => {
          searchParams.append(key, String(value));
        });
      } else if (value instanceof Date) {
        searchParams.append(key, value.toISOString());
      } else {
        searchParams.append(key, String(value));
      }
    }
  });

  return searchParams.toString();
}
