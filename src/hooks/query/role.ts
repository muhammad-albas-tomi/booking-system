import { useQuery } from '@tanstack/react-query';
import { PaginatedResponseType } from '~/types/core/response';
import { RoleType } from '~/types/rbac/roles';

export function useGetRoles() {
  const { data, isFetching, isLoading } = useQuery<
    PaginatedResponseType<RoleType>
  >({
    queryKey: ['auths/roles'],
  });

  const roles = data?.data ?? [];

  return { roles, isFetching, isLoading };
}
