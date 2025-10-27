import { RoleType } from './rbac/roles';

export type IdentityType = {
  id: number;
  identityNumber: string;
  familyCardMember: string;
  npwpNumber: string;
  kis: string;
  bpjsNumber: string;
};

export type jobPositionType = {
  id: number;
  code: string;
  name: string;
};
export type EmployeeType = {
  id: number;
  nip: string;
  isActive: boolean;
  userId?: number;
  jobPositionId: number;
  fullName: string;
  phoneNumber: string;
  password?: string;
  email: string;
  birthDate: string;
  birthPlace: string;
  address: string;
  role: RoleType;
  roleId: number;
  description: string;
  photoUrl: string;
  employeeCode: string;
  motherName: string;
  lastEducation: string;
  endDate: string;
  joinDate: string;
  identity: IdentityType;
  isAdmin: boolean;
  jobPosition?: jobPositionType;
  lastLogin: string | null;
};
export type EmployeePropsType = {
  nip: string;
  fullName: string;
  phoneNumber: string;
  password?: string;
  email: string;
  birthDate: string;
  birthPlace: string;
  address: string;
  description: string;
  photoUrl: string;
  employeeCode: string;
  joinDate: string;
  identity: IdentityType;
  jobPosition?: {
    id: number;
    code: string;
    name: string;
  };
};
