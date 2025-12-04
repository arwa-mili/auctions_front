import { FC } from "react";
//compoennts
import { ActivityToday } from "./activityToday/activityToday";
import { BookingsCalendar } from "./bookingsCalendar/bookingsCalendar";
//styles
import { Paper } from "./calendarStats.styles";
//types
import { CalendarStatsProps } from "./calendarStats.types";

const CalendarStats: FC<CalendarStatsProps> = props => {
  const { activityToday, calendar } = props;
  return (
    <Paper variant="outlined">
      <BookingsCalendar {...calendar} />
      <ActivityToday {...activityToday} />
    </Paper>
  );
};
export { CalendarStats };
