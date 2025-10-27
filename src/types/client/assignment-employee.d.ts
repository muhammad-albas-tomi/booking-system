import { ClientLocationType } from './client-location';

export type AssigmentEmployeeType = {
  id: number;
  clientLocation: ClientLocationType;
  internalEmployee: {
    id: number;
    externalId: number;
    fullName: string;
    employeeCode: string;
    jobPositonId: number;
    jobPositionName: string;
  };
};
