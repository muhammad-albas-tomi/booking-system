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

type SosFeedbackType = {
  description: string;
  createdAt: string;
  author: AuthorType;
};
export type ReportSoSType = {
  id: number;
  createdAt: number;
  audioUrl: string;
  coordinates: CoordinateType;
  clientLocation: ClientLocationType & {
    address: string;
  };
  status: boolean;
  type: 'kehilangan' | 'pekerjaan';
  description: string;
  author: AuthorType;
  attachments: AttactmentsType[];

  sosFeedback: SosFeedbackType;
};
