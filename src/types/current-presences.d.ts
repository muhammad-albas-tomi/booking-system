import { ReportPresencesType } from './report-precense';
import { ShiftType } from './shift';

export type CurrentPresenceType = {
  schedule: {
    id: number;
    date: string;
    shift: ShiftType;
  };
  presence: ReportPresencesType;
};
