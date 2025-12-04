import { ActivityTodayProps } from "./activityToday/activityToday.types";
import { BookingsCalendarProps } from "./bookingsCalendar/bookingsCalendar.types";

export type CalendarStatsProps = {
  calendar: BookingsCalendarProps;
  activityToday: ActivityTodayProps;
};
