import { eachDayOfInterval, format, subDays, subYears } from "date-fns";
import { GetDaysParams } from "./bookingsChart.types";

export const getDays = (params: GetDaysParams) => {
  const { days, bookingsByCurrentYear, bookingsByPastYear } = params;

  if (bookingsByCurrentYear.length === 0 && bookingsByPastYear.length === 0) {
    return { allDays: [], dataCurrentYear: [], dataPastYear: [] };
  }

  const today = new Date();
  const newDataCurrentYear = bookingsByCurrentYear.map(o => ({ full: `${o.day}-${o.month}-${o.year}`, count: o.count || 0 }));
  const newDataPastYear = bookingsByPastYear.map(o => ({ full: `${o.day}-${o.month}-${o.year}`, count: o.count || 0 }));

  const endDays = subDays(today, days);
  const allDays: Array<Date> = eachDayOfInterval({ start: endDays, end: today });

  const dataCurrentYear = allDays.map(item => newDataCurrentYear.find(o => o.full === format(item, "d-M-yyyy"))?.count || 0);
  const dataPastYear = allDays.map(item => {
    const lastYearItem = subYears(item, 1);
    return newDataPastYear.find(o => o.full === format(lastYearItem, "d-M-yyyy"))?.count || 0;
  });

  return { allDays, dataCurrentYear, dataPastYear };
};
