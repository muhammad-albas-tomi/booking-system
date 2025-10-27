import { PlanType } from './plan';

export type BillingItemType = {
  id: number;
  description: string;
  quantity: number;
  price: string;
  unit: string;
  subTotal: string;
  displayPrice: string;
};

export type PromoCodeSnapShotType = {
  id: number;
  title: string;
  code: string;
  description: string;
  startDate: string;
  endDate: string;
  maxUsage: number;
  value: string;
  valueType: string;
};

export type BillingPaymentType = {
  id: number;
  redirectUrl: string;
  status: string;
  paidAmount: string;
  paidAt: string;
  invoiceIdXendit: string;
  paymentMethod:
    | 'BANK_TRANSFER'
    | 'CASH_ON_DELIVERY'
    | 'RETAIL_OUTLET'
    | 'EWALLET'
    | 'QR_CODE'
    | 'DIRECT_DEBIT'
    | 'PAYLATER';

  paymentChannel: string;
  promoCodeSnapshot: PromoCodeSnapShotType;
};

export type BillingType = {
  id: number;
  createdAt: string;
  billingNumber: string;
  billingType: 'addtional-quota' | 'subscription';
  status: 'unpaid' | 'awaiting-payment' | 'paid' | 'overdue' | 'payment-failed';
  totalAmount: string;
  discountAmount: string;
  finalAmount: string;
  planSnapshot: PlanType;
  planSnapshot: PlanType;
  dueDate: string;
  billingItems: BillingItemType[];
  billingPayment: BillingPaymentType;
};

export type EstimateEndTrialType = {
  packageNow: {
    planName: string;
    daysLeft: number;
    endDate: string;
  };
  nextPackage: {
    planName: string;
    countEmployee: number;
    periode: string;
  };
  totalPrice: string;
};
