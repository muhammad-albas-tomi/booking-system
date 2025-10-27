import { useQuery } from '@tanstack/react-query';
import { PaginatedResponseType } from '~/types/core/response';
import { ReportActivityType } from '~/types/report-activity';

export function useGetActivity({ search }: { search?: string }) {
  const { data, isFetching, isLoading } = useQuery<
    PaginatedResponseType<ReportActivityType>
  >({
    queryKey: ['saas/activities', { limit: 1000, search }],
  });

  const activityData = data?.data ?? [];

  return { activityData, isFetching, isLoading };
}
