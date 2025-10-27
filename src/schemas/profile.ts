import { z } from 'zod';
import { permissionSchema } from './permission';
import { roleSchema } from './role';

export const profileSchema = z.object({
  tfaSecret: z.string().nullable(),
  isTfa: z.boolean().default(false),
  id: z.number(),
  fullName: z.string(),
  email: z.string().email(),
  username: z.string(),
  phoneNumber: z.string(),
  photoUrl: z.string().nullable(),
  role: roleSchema.omit({ permissions: true }),
  businessId: z.number().nullable(),
  permissions: z.array(permissionSchema),
});

export type ProfileSchema = z.infer<typeof profileSchema>;
