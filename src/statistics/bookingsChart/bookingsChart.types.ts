export type BookingsChartProps = {
  title?: string;
  subTitle?: React.ReactNode;
  bookingsByCurrentYear?: Array<DataItem>;
  bookingsByPastYear?: Array<DataItem>;
  views: Array<{ days: number; label: string }>;
  legends?: Array<{ pointColor: string; label: string }>;
};

export type ViewChart =
  | "LAST_7_DAYS"
  | "LAST_15_DAYS"
  | "LAST_30_DAYS "
  | "LAST_90_DAYS";

export type DataItem = {
  day?: number;
  month?: number;
  year?: number;
  count?: number;
};

//functions
export type GetDaysParams = {
  days: number;
  bookingsByCurrentYear: Array<DataItem>;
  bookingsByPastYear: Array<DataItem>;
};
