import { z } from 'zod';
import { clientSchema } from './client';
import { coordinateSchema } from './misc';

export const locationSchema = z.object({
  id: z.number(),
  name: z.string().nonempty('Nama lokasi tidak boleh kosong'),
  code: z.string(),

  address: z.string().nullable(),

  client: clientSchema,
  coordinates: coordinateSchema,
});

export const createLocationSchema = locationSchema
  .omit({
    id: true,
    client: true,
    coordinates: true,
    code: true,
  })
  .extend({
    address: z.string().nonempty('Alamat lokasi tidak boleh kosong'),
    clientId: z.number(),
    coordinates: z.object({
      latitude: z.coerce.number({ message: 'Harus diisi' }),
      longitude: z.coerce.number({ message: 'Harus diisi' }),
    }),
  });

export const editLocationSchema = createLocationSchema.partial();

export type Location = z.infer<typeof locationSchema>;

export type CreateLocation = z.infer<typeof createLocationSchema>;

export type EditLocation = z.infer<typeof editLocationSchema>;
