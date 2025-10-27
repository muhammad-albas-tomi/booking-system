import { z } from 'zod';

export const clientSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export type Client = z.infer<typeof clientSchema>;
