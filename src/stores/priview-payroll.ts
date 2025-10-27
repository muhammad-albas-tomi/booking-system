import { create } from 'zustand';

type PayrollPreviewStore = {
  previewData: {
    startDate: string;
    endDate: string;
    employeeIds: number[];
  } | null;
  setPreviewData: (data: {
    startDate: string;
    endDate: string;
    employeeIds: number[];
  }) => void;
  clearPreviewData: () => void;
};

export const usePayrollPreviewStore = create<PayrollPreviewStore>((set) => ({
  previewData: null,
  setPreviewData: (data) => set({ previewData: data }),
  clearPreviewData: () => set({ previewData: null }),
}));
