export type ReportPayrollType = {
  id: number;
  startDate: string;
  endDate: string;
  totalEmployees: number;
  totalPayroll: string;
  isPublished: boolean;
  businessId: number;
  clientId: number;
  clientName: string;
  createdAt: string;
};
export type PayrollRunEmployeesType = {
  id: number;
  isIncludeAbsent: boolean;
  totalAmount: string;
  basicSalary: string;
  employee: {
    id: number;
    fullName: string;
    employeeCode: string;
  };
  payrollRunComponents: {
    id: number;
    component: {
      id: number;
      name: string;
      type: 'allowance' | 'deduction' | string;
    };
    value: string;
  }[];
};

export type DetailReportPayrolls = {
  id: number;
  createdAt: string;
  startDate: string;
  endDate: string;
  totalEmployees: number;
  totalPayroll: string;
  isPublished: boolean;
  businessId: number;
  clientId: number;
  clientName: string;
  payrollRunEmployees: PayrollRunEmployeesType[];
};
