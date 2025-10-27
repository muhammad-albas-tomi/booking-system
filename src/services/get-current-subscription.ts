import { ResponseType } from '~/types/core/response';
import { SubscriptionType } from '~/types/subscription';
import { request } from '~/utils/core/request';
import { generateUrl } from '~/utils/core/uri';

export async function getCurrentSubscription(): Promise<ResponseType<
  SubscriptionType & {
    success: boolean;
    message: string;
  }
> | null> {
  try {
    const response = await request(
      generateUrl(`auths/subscriptions/current-subscription`),
      {
        cache: 'no-store',
        withAuth: true,
        method: 'GET',
      },
    );

    return response;
  } catch (error) {
    console.error('Error fetching current subscription:', error);

    return null;
  }
}
