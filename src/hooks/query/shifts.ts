import { useQuery } from '@tanstack/react-query';
import { ClientLocationType } from '~/types/client/client-location';
import { PaginatedResponseType } from '~/types/core/response';

export function useGetShifts({ search }: { search?: string } = {}) {
  const { data, isFetching, isLoading } = useQuery<
    PaginatedResponseType<ClientLocationType>
  >({
    queryKey: ['hris/shifts', { limit: 10, search }],
  });

  const shiftsData = data?.data ?? [];

  return { shiftsData, isFetching, isLoading };
}
