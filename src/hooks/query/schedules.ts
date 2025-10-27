import { useQuery } from '@tanstack/react-query';
import { PaginatedResponseType } from '~/types/core/response';
import { ScheduleType } from '~/types/schedule';

export function useGetSchedules({
  search,
  startDate,
  endDate,
}: {
  search?: string;
  startDate?: Date | null;
  endDate?: Date | null;
}) {
  const { data, isFetching, isLoading } = useQuery<
    PaginatedResponseType<ScheduleType>
  >({
    queryKey: ['hris/schedules', { limit: 1000, startDate, endDate, search }],
  });

  const schedules = data?.data ?? [];
  return { schedules, isFetching, isLoading };
}
