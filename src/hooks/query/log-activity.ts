import { useQuery } from '@tanstack/react-query';
import { PaginatedResponseType } from '~/types/core/response';

export function useGetLogActivityAction() {
  const { data, isFetching, isLoading } = useQuery<
    PaginatedResponseType<{ id: number; name: string }>
  >({
    queryKey: ['auths/audit-logs/actions', { limit: 1000 }],
  });

  const logActionACtivity = data?.data ?? [];

  return { logActionACtivity, isFetching, isLoading };
}
