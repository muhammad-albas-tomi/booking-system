import { z } from 'zod';
import { tokenSchema } from './token';

export const loginBodySchema = z.object({
  username: z
    .string()
    .email('Email tidak valid')
    .trim()
    .min(1, { message: 'Wajib diisi' })
    .refine(
      (val) => {
        if (val.includes('@')) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
        }

        return true;
      },
      {
        message: 'Email tidak valid',
      },
    ),
  password: z.string().min(6, 'Password minimal 6 karakter'),
});

export const loginResponseSchema = tokenSchema.extend({
  isActive: z.boolean().optional().default(false),
  tfaRequired: z.boolean().optional().default(false),

  email: z.string().email(),
  sessionId: z.string().nonempty('Session ID missing.'),
});

export type LoginBodySchema = z.infer<typeof loginBodySchema>;

export type LoginResponseSchema = z.infer<typeof loginResponseSchema>;
