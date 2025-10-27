export type DashboardStatisticsType = {
  totalClient: 2;
  totalPenugasan: 2;
  totalLokasi: 1;
  totalKaryawan: 2;
  growthClient: 0;
  growthPenugasan: 0;
  growthLokasi: 0;
  growthKaryawan: 0;
};

export type ActivityHistoryType = {
  id: number;
  description: string;
  type: string;
  createdAt: string;
  employeeName: string;
  clientLocationName: string;
  businessId: number;
};
