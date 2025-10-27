import { useQuery } from '@tanstack/react-query';
import { ProfileSchema } from '~/schemas/profile';

import { ResponseType } from '~/types/core/response';

export function useGetMe() {
  const { data, isFetching, isLoading } = useQuery<ResponseType<ProfileSchema>>(
    {
      queryKey: ['/auths/auths/me'],
      refetchOnWindowFocus: true,
      refetchOnMount: true,
    },
  );

  return {
    profile: data?.data,
    isFetching,
    isLoading,
  };
}
