import { ClientDataType } from './client';

export type ClientLocationType = {
  id: number;
  name: string | null;
  description: string | null;
  coordinates: CoordinateType | null;
  isActive: null | boolean;
  createdAt: string;
  locationType: string | null;
  code: string;
  isActive: true;
  client: ClientDataType;
};

export type CoordinateType = {
  id?: number;
  type?: string;
  coordinates: [number, number];
};
