import { PermissionType } from './permission';

export type AuthMeType = {
  role: {
    id: number;
    name: string;
    description: string | null;
  };
  permissions: PermissionType[];
  tfaSecret: string | null;
  isTfa: boolean;
  id: number;
  fullName: string;
  email: string;
  username: string;
  phoneNumber: string;
  photoUrl: string | null;
};
