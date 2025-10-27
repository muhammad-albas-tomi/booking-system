export type SlipGajiType = {
  id: number;
  totalAmount: number;
  isIncludeAbsent: boolean;
  createdAt: string;
  paySlipUrl: string;
  payrollRun: {
    id: number;
    startDate: string;
    endDate: string;
    isPublished: boolean;
    businessId: number;
    clientId: number;
    clientName: string;
  };
};
