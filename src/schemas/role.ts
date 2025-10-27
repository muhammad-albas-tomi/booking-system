import { z } from 'zod';
import { permissionSchema } from './permission';

export const roleSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  permissions: z.array(permissionSchema),
});

export type RoleSchema = z.infer<typeof roleSchema>;
