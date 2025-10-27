import { useQuery } from '@tanstack/react-query';
import { PaginatedResponseType } from '~/types/core/response';
import { EmployeePayrollType } from '~/types/employee-payroll';

export function useGetEmployeesPayrolls({
  clientId,
}: {
  clientId: number | string;
}) {
  const { data, isFetching, isLoading } = useQuery<
    PaginatedResponseType<EmployeePayrollType>
  >({
    queryKey: ['hris/employee-payrolls', { limit: 1000, clientId }],
  });

  const employeesPayrollData = data?.data ?? [];

  return { employeesPayrollData, isFetching, isLoading };
}
