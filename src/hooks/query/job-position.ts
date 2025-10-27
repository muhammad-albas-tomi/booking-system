import { useQuery } from '@tanstack/react-query';
import { PaginatedResponseType } from '~/types/core/response';
import { jobPositionType } from '~/types/employee';

export function useGetJobPositions() {
  const { data, isFetching, isLoading } = useQuery<
    PaginatedResponseType<jobPositionType>
  >({
    queryKey: ['hris/job-positions', { limit: 20 }],
    enabled: true,
  });

  const jobPositions = data?.data ?? [];

  return { jobPositions, isFetching, isLoading };
}
