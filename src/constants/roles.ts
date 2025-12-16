export const ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  SUPER_ADMIN: 'super_admin',
} as const;

export type RoleType = keyof typeof ROLES;