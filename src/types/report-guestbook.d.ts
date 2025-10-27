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

export type ReportGuestBookType = {
  id: number;
  createdAt: string;
  type: 'kehilangan' | 'pekerjaan';
  description: string;
  coordinates: CoordinateType;
  author: AuthorType;
  clientLocation: ClientLocationType & {
    address: string;
  };
  attachments: AttactmentsType[];
  visitorName: string;
  visitorCount: number;
  description: string;
  phoneNumber: string;
};
