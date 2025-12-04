import { eachDayOfInterval, getDaysInMonth } from "date-fns";
import { EarningsByDayData, GetEarnedByMonthParams } from "./earnings.types";

export const getEarnedByMonth = (
  params: GetEarnedByMonthParams
): { allDays: Array<Date>; earnings: Array<EarningsByDayData> } => {
  const { days, month = 0 } = params;
  const date = new Date(new Date().getFullYear(), month, 1);
  const daysInMonth = getDaysInMonth(date);
  const earnings: Array<EarningsByDayData> = new Array(daysInMonth)
    .fill(0)
    .map((_, index) => {
      const target = days.find((o) => o.month === month && o.day === index + 1);
      if (target) {
        return { ...target };
      }
      return {
        currencyCode: "",
        day: index + 1,
        earnings: 0,
        month: month,
        year: 0,
      };
    });
  const allDays: Array<Date> = eachDayOfInterval({
    start: date,
    end: new Date(new Date().getFullYear(), month, daysInMonth),
  });
  const sum = earnings.reduce(
    (accumulator, currentValue) => accumulator + (currentValue?.earnings || 0),
    0
  );

  if (sum === 0) {
    return { allDays: [], earnings: [] };
  }
  return { allDays, earnings };
};

export const toRound = (value: number) => {
  return Math.round(value * 100) / 100;
};
