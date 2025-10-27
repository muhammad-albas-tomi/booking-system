import { ClientLocationType, CoordinateType } from './client/client-location';

export type AuthorType = {
  id: number;
  externalId: number;
  fullName: string;
  employeeCode: string;
  jobPositonId: number;
  jobPositionName: string;
};

type AttactmentsType = {
  url: string;
};
export type ReportActivityType = {
  id: number;
  createdAt: number;
  type: 'kehilangan' | 'pekerjaan';
  description: string;
  coordinates: CoordinateType;
  author: AuthorType;
  clientLocation: ClientLocationType & {
    address: string;
  };
  attachments: AttactmentsType[];
};
