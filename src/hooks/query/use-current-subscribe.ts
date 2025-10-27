import { useQuery } from '@tanstack/react-query';
import { ResponseType } from '~/types/core/response';
import { SubscriptionType } from '~/types/subscription';

export function useGetCurrentSubscribe() {
  const { data, isFetching, isLoading } = useQuery<
    ResponseType<SubscriptionType>
  >({
    queryKey: ['auths/subscribtions/current-subscription'],
  });

  const currentSubscription = data?.data ?? [];

  return { currentSubscription, isFetching, isLoading };
}
