import { z } from 'zod';
import { loginResponseSchema } from './login';

export const authSchema = loginResponseSchema.pick({
  isActive: true,
  email: true,
  sessionId: true,
  tfaRequired: true,
});

export type AuthSchema = z.infer<typeof authSchema>;
