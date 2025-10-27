import { LoginBodySchema, LoginResponseSchema } from '~/schemas/login';
import { ProfileSchema } from '~/schemas/profile';
import { TokenSchema } from '~/schemas/token';
import { ResponseType } from '~/types/core/response';
import { request } from '~/utils/core/request';
import { generateUrl } from '~/utils/core/uri';

export async function login(
  creds: LoginBodySchema,
): Promise<ResponseType<LoginResponseSchema>> {
  const url = generateUrl('/auths/auths/login');

  return await request(url, {
    method: 'POST',
    body: JSON.stringify(creds),
  });
}

export async function refresh({
  refreshToken,
  sessionId,
}: {
  refreshToken: string;
  sessionId: string;
}): Promise<
  ResponseType<{
    accessToken: string;
    refreshToken: string;
  }>
> {
  const url = generateUrl('/auths/auths/refresh-token');

  /**
   * The following code is the same as the one in the `request` function. But, request function include Authorization Bearer to the header. So we need to use fetch directly.
   */
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refreshToken: refreshToken, sessionId: sessionId }),
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return await res.json();
}

export async function getProfile(
  accessToken: TokenSchema['accessToken'],
): Promise<ResponseType<ProfileSchema>> {
  return await request(generateUrl('/auths/auths/me'), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
