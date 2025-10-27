import { ComponentPayrollType } from './component-payroll';

export type EmployeePayrollType = {
  employee: {
    id: number;
    employeeCode: string;
    basicSalary: string;
    fullName: string;
    role: {
      id: number;
      name: string;
    };
    jobPosition: {
      id: number;
      name: string;
    };
  };
  totalSalary: string;
  totalSalaryComponent: string;
  componentPayroll: ComponentPayrollType[];
};
