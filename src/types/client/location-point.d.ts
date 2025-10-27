import { ClientLocationType } from './client-location';

export type PointLocationType = {
  id: number;
  name: string | null;
  description: string | null;
  coordinates: CoordinateType | null;
  isActive: null | boolean;
  createdAt: string;
  pointType: string | null;
  step: number | null;
  clientLocation: ClientLocationType;
  code?: string | null;
};

export type CoordinateType = {
  id?: number;
  type?: string;
  coordinates: [number, number];
};
