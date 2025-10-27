import { CreateLocation, EditLocation } from '~/schemas/location';
import { request } from '~/utils/core/request';
import { generateUrl } from '~/utils/core/uri';

export async function createLocation(payload: CreateLocation) {
  return await request(generateUrl('saas/client-locations'), {
    method: 'POST',
    body: JSON.stringify(payload),
    withAuth: true,
  });
}

export async function editLocation(id: number | string, payload: EditLocation) {
  return await request(generateUrl('saas/client-locations/' + id), {
    method: 'PATCH',
    body: JSON.stringify(payload),
    withAuth: true,
  });
}

export async function deleteLocation(id: number) {
  return await request(generateUrl(`saas/client-locations/${id}`), {
    method: 'DELETE',
    withAuth: true,
  });
}
