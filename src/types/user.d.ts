export type UserType = {
  id: number;
  fullName: string;
  email: string;
  username: string;
  phoneNumber: string;
  photoUrl: string | null;
  tfaSecret: string | null;
  isTfa: boolean;
  role?: RoleType;
};
