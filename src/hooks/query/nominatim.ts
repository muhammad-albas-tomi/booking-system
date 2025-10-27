import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { z } from 'zod';
import { nominatimSchema } from '~/schemas/nominatim';

export function useNominatimSearch(query?: string) {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['nominatim', query],
    queryFn: async ({ signal, queryKey }) => {
      const [, query] = queryKey;

      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?addressdetails=1&q=${query}&format=jsonv2`,
        {
          signal,
          headers: {
            'Accept-Language': 'id',
          },
        },
      );

      if (!response.ok) {
        throw new Error('Failed to fetch search results.');
      }

      const data = await response.json();
      const validated = z.array(nominatimSchema).safeParse(data);

      if (!validated.success) throw validated.error;

      return validated.data;
    },
    placeholderData: keepPreviousData,
  });

  return { data, isLoading, isFetching };
}
