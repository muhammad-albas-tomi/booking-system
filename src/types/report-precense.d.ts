import { ScheduleType } from './schedule';

export type ReportPresencesType = {
  id: number;
  createdAt: string;
  clockIn: string;
  clockOut: string;
  clockInCoordinates: {
    type: string;
    coordinates: [number, number];
  };
  photoUrlIn: string;
  status: 'tepat_waktu' | 'terlambat' | 'absen';
  employee: {
    jobPosition: {
      id: number;
      name: string;
    };
    id: number;
    employeeCode: string;
    fullName: string;
    businessId: number;
    role: {
      id: number;
      name: string;
    };
  };
  clientLocation: {
    id: number;
    name: string;
    coordinates: {
      type: string;
      coordinates: [number, number];
    };
    client: {
      id: number;
      name: string;
    };
  };

  schedule: ScheduleType;
};
