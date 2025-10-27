import { ClientLocationType } from './client/client-location';

export type AuthorType = {
  id: number;
  externalId: number;
  fullName: string;
  employeeCode: string;
  jobPositonId: number;
  jobPositionName: string;
};

type AttactmentsType = {
  id: number;
  url: string;
};

type FeedbackType = {
  id: string;
  createdAt: string;
  description: string;
  author: AuthorType;
  attachments: AttactmentsType[];
};
export type ReportAttentionType = {
  id: number;
  createdAt: string;
  title: string;
  startDate: string;
  endDate: string;
  jobPositions: string[];
  author: AuthorType;
  description: string;
  clientLocation: ClientLocationType & {
    address: string;
  };
  feedbacks: FeedbackType[];
};

export type AttentionType = {};
