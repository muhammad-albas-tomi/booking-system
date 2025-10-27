import { StringOrTemplateHeader } from '@tanstack/react-table';
import { StringValidation } from 'zod';

export type PatrolStepsType = {
  id: number;
  description: string;
  time: string;
  status: 'berlangsung' | 'selesai';
  clientLocationPoint: {
    id: number;
    name: string;
    description: StringOrTemplateHeader;
    coordinates: {
      type: StringValidation;
      coordinates: [number, number];
    };
    pointType: string;
    step: number;
  };
};

type PatrolAttachment = {
  id: number;
  url: string;
};

type ClientLocationPoint = {
  id: number;
  name: string;
  description: string;
  coordinates: {
    type: string;
    coordinates: [number, number];
  };
  pointType: string;
  step: number;
};

type PatrolStep = {
  id: number;
  description: string;
  time: string;
  status: 'selesai' | 'berlangsung';
  clientLocationPoint: ClientLocationPoint;
  patrolAttachments: PatrolAttachment[];
};

export type ReportPatroliType = {
  id: number;
  createdAt: string;
  startTime: string;
  endTime: null;
  round: number;
  totalRounds: number;
  status: string;
  clientLocation: {
    id: number;
    name: string;
    client: {
      id: number;
      name: string;
    };
  };
  patrolSteps: PatrolStepsType[];
  employee: {
    id: number;
    externalId: number;
    fullName: string;
    employeeCode: string;
    jobPositonId: number;
    jobPositionName: string;
  };
};

export type PatrolRoundsType = {
  id: number;
  startTime: string;
  endTime: string;
  round: number;
  status: 'selesai' | 'berlangsung';
  patrolSteps: PatrolStep[];
};

export type DetailReportPatroliType = {
  id: number;
  createdAt: string;
  employee: {
    id: number;
    externalId: number;
    fullName: string;
    employeeCode: string;
    jobPositonId: number;
    jobPositionName: string;
  };
  clientLocation: {
    id: number;
    name: string;
    client: {
      id: number;
      name: string;
    };
  };
  patrolRounds: PatrolRoundsType[];
};
