import { z } from 'zod';
import { employeeSchema } from '~/components/(panel)/employees/detail/schema';

export const employeePayrollSchema = z.object({
  employee: employeeSchema
    .pick({
      employeeCode: true,
    })
    .extend({ id: z.number(), basicSalary: z.number(), fullName: z.string() }),
  componentPayroll: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      type: z.string(),
      value: z.number(),
    }),
  ),
  totalSalary: z.string(),
  totalSalaryComponent: z.string(),
});

export type EmployeePayroll = z.infer<typeof employeePayrollSchema>;
