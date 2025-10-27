export type ShiftType = {
  id: number;
  code: string;
  name: string;
  startTime: string;
  endTime: string;
  description: string;
  earlyClockInLimit: number;
  lateClockOutLimit: number;
  lateClockInTolerance: number;
  earlyClockOutTolerance: number;
};
