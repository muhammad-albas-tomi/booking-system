import { useQuery } from '@tanstack/react-query';
import { PaginatedResponseType } from '~/types/core/response';
import { ClientLocationPoint } from '~/types/report-patroli';

export function useGetClientPointLocations(clientId?: number | null) {
  const { data, isFetching, isLoading } = useQuery<
    PaginatedResponseType<ClientLocationPoint>
  >({
    queryKey: ['saas/client-location-points', { limit: 1000, clientId }],
  });

  const clientPointLocations = data?.data ?? [];

  return { clientPointLocations, isFetching, isLoading };
}
