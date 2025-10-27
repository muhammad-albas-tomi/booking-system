import { ClientDataType } from './client/client';

export type DashboardClientType = {
  client: ClientDataType;
  total: {
    supervisor: string;
    security: string;
    janitor: string;
    general: string;
    clientLocation: string;
    locationPoint: string;
    activity: string;
    attention: string;
    patrol: string;
    sos: string;
  };
};
