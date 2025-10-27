import { z } from 'zod';
import { locationSchema } from './location';
import { coordinateSchema } from './misc';

export const locationPointSchema = z.object({
  id: z.number(),
  name: z.string().nonempty('Nama lokasi tidak boleh kosong'),

  clientLocation: locationSchema,
  coordinates: coordinateSchema,

  code: z.string(),
  step: z.number().positive('Step harus bernilai positif'),
});

export const createLocationPointSchema = locationPointSchema
  .omit({
    id: true,
    clientLocation: true,
    coordinates: true,
    code: true,
  })
  .extend({
    clientLocationId: z.number().positive('Silahkan pilih lokasi cabang'),
    coordinates: z.object({
      latitude: z.coerce.number({ message: 'Harus diisi' }),
      longitude: z.coerce.number({ message: 'Harus diisi' }),
    }),
  });

export const editLocationPointSchema = createLocationPointSchema.partial();

export type LocationPoint = z.infer<typeof locationPointSchema>;

export type CreateLocationPoint = z.infer<typeof createLocationPointSchema>;

export type EditLocationPoint = z.infer<typeof editLocationPointSchema>;
