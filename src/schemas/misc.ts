import { z } from 'zod';

export const coordinateSchema = z.object({
  type: z.literal('Point'),
  coordinates: z.tuple([z.number(), z.number()]),
});

export type Coordinate = z.infer<typeof coordinateSchema>;
