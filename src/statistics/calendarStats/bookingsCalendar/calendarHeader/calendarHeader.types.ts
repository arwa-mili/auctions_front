import { PickersCalendarHeaderProps } from "@mui/x-date-pickers";

export type CalendarHeaderProps = PickersCalendarHeaderProps<Date> & {
  onClickLeft?: () => void;
  onClickRight?: () => void;
};
