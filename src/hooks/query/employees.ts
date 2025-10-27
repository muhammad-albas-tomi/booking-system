import { useQuery } from '@tanstack/react-query';
import { PaginatedResponseType } from '~/types/core/response';
import { EmployeeType } from '~/types/employee';

export function useGetEmployees({
  search,
  jobPositionId,
  jobPositionName,
}: {
  search?: string;
  jobPositionName?: string;
  jobPositionId?: number;
}) {
  const { data, isFetching, isLoading } = useQuery<
    PaginatedResponseType<EmployeeType>
  >({
    queryKey: [
      'hris/employees',
      { limit: 1000, search, jobPositionId, jobPositionName },
    ],
  });

  const employeesData = data?.data ?? [];

  return { employeesData, isFetching, isLoading };
}
