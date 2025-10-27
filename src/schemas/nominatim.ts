import { z } from 'zod';

export const nominatimSchema = z
  .object({
    display_name: z.string(),
    lat: z.string().transform((val) => parseFloat(val)),
    lon: z.string().transform((val) => parseFloat(val)),
  })
  .transform(({ display_name, lon, ...data }) => ({
    ...data,
    address: display_name,
    lng: lon,
  }));

export type Nominatim = z.infer<typeof nominatimSchema>;
