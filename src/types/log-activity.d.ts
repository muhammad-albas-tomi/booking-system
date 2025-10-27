import { UserType } from './user';

export type LogActivityType = {
  user: UserType;
  id: number;
  createdAt: string;
  action: string;
  description: string;
  ipAddress: string;
  userAgent: string;
  oldValue: string;
  newValue: string;
  originService: string;
};
