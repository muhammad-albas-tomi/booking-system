import { z } from 'zod';

export const tokenSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
  isActive: z.coerce.boolean(),
  tfaRequired: z.coerce.boolean().optional().default(false),
  email: z.string(),
  sessionId: z.string(),
});
