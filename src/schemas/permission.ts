import { z } from 'zod';

export const permissionSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export type PermissionSchema = z.infer<typeof permissionSchema>;
