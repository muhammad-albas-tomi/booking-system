import { useQuery } from '@tanstack/react-query';
import { ClientLocationType } from '~/types/client/client-location';
import { PaginatedResponseType } from '~/types/core/response';

export function useGetClientLocations(clientId?: number | null) {
  const { data, isFetching, isLoading } = useQuery<
    PaginatedResponseType<ClientLocationType>
  >({
    queryKey: ['saas/client-locations', { limit: 100, clientId }],
  });

  const clientLocations = data?.data ?? [];

  return { clientLocations, isFetching, isLoading };
}
