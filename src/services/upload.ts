import { request } from '~/utils/core/request';
import { generateUrl } from '~/utils/core/uri';

export async function upload(file: File, params?: string) {
  const body = new FormData();
  body.append('file', file);

  return await request(generateUrl('/external/s3', { type: params || '' }), {
    method: 'POST',
    body,
  });
}
