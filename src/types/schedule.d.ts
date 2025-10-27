import { EmployeeType } from './employee';
import { ShiftType } from './shift';

export type BackupType = {
  id: number;
  createdAt: string;
  replacementReason: string | null;
  employee: EmployeeType;
};
export type ScheduleType = {
  id: number;
  createdAt: string;
  date: string;
  employee: EmployeeType;
  shift: ShiftType;
  backupSchedule: BackupType | null;
};
