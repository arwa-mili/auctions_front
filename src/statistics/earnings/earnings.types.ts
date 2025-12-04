export type EarningsByDayData = {
  day?: number;
  month?: number;
  year?: number;
  earnings?: number;
  currencyCode?: string;
};

export type EarningsByMonthData = {
  month?: number;
  year?: number;
  earnings?: number;
  currencyCode?: string;
};

export type EarningsProps = {
  labelEarned?: string;
  earningsByMonth?: Array<EarningsByMonthData>;
  earningsByDay?: Array<EarningsByDayData>;
  currencyCode: string;
};

//functions
export type GetEarnedByMonthParams = {
  days: Array<EarningsByDayData>;
  month: number;
};
