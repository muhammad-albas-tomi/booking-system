import { useQuery } from '@tanstack/react-query';
import { Client } from '~/schemas/client';
import { PaginatedResponseType } from '~/types/core/response';

export function useGetClients() {
  const { data, isFetching, isLoading } = useQuery<
    PaginatedResponseType<Client>
  >({
    queryKey: ['saas/clients', { limit: 1000 }],
  });

  const clients = data?.data ?? [];

  return { clients, isFetching, isLoading };
}
