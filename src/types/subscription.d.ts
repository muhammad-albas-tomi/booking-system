import { BillingType } from './billing';
import { PlanType } from './plan';
import { TenantType } from './tenant';

export type LastPaymentType = {
  id: number;
  redirectUrl: string;
  invoiceIdXendit: string;
  paidAmount: string;
  paidAt: string;
  status: string;
};

export type SubscriptionType = {
  id: number;
  createdAt: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'inactive' | 'expired' | 'pending';
  maxQuotaUser: number;
  currentQuotaUser: number;
  planSnapshot: PlanType;
  business: TenantType;
  billing: BillingType;
  lastPayment: LastPaymentType;
};
