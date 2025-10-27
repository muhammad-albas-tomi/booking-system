import { useQuery } from '@tanstack/react-query';
import { ComponentPayrollType } from '~/types/component-payroll';
import { PaginatedResponseType } from '~/types/core/response';

export function useGetComponentSalary() {
  const { data, isFetching, isLoading } = useQuery<
    PaginatedResponseType<ComponentPayrollType>
  >({
    queryKey: ['hris/component-payrolls', { limit: 1000 }],
  });

  const masterPayrollComponent = data?.data ?? [];

  return { masterPayrollComponent, isFetching, isLoading };
}
