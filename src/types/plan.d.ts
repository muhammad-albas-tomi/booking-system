export type PlanType = {
  id: number;
  createdAt: number;
  name: string;
  originPrice: number;
  currentPrice: number;
  durationDays: number;
  maxQuotaUser: number;
  isDefault: booelan;
  isTrial: boolean;
  isFavorite: boolean;
  color?: string;
};
