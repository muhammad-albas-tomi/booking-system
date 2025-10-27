import {
  CreateLocationPoint,
  EditLocationPoint,
} from '~/schemas/location-point';
import { request } from '~/utils/core/request';
import { generateUrl } from '~/utils/core/uri';

export async function createLocationPoint(payload: CreateLocationPoint) {
  return await request(generateUrl('saas/client-location-points'), {
    method: 'POST',
    body: JSON.stringify(payload),
    withAuth: true,
  });
}

export async function editLocationPoint(
  id: number | string,
  payload: EditLocationPoint,
) {
  return await request(generateUrl('saas/client-location-points/' + id), {
    method: 'PATCH',
    body: JSON.stringify(payload),
    withAuth: true,
  });
}

export async function deleteLocationPoint(id: number) {
  return await request(generateUrl(`saas/client-location-points/${id}`), {
    method: 'DELETE',
    withAuth: true,
  });
}
