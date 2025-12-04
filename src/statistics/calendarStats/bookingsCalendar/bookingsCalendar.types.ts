export type BookingsCalendarProps = {
  defaultValue?: Date;
  bordered?: boolean;
  data?: Array<{
    day?: number;
    month?: number;
    year?: number;
    count?: number;
  }>;
  onClickDay?: (date: Date) => void;
};
