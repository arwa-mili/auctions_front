import { StaticDatePicker } from "@mui/x-date-pickers";
import { addMonths, format, subMonths } from "date-fns";
import { FC, useState } from "react";
//components
import CalendarHeader from "./calendarHeader/calendarHeader";
import PickersDay from "./pickersDay/pickersDay";
//styles
import { Container } from "./bookingsCalendar.styles";
//types
import { BookingsCalendarProps } from "./bookingsCalendar.types";

const BookingsCalendar: FC<BookingsCalendarProps> = (props) => {
  const { defaultValue, bordered = true, data = [], onClickDay } = props;
  const [value, setValue] = useState<Date>(defaultValue || new Date());
  //functions
  const onClickNextMonth = () => {
    setValue(addMonths(value, 1));
  };
  const onClickPreviousMonth = () => {
    setValue(subMonths(value, 1));
  };
  const onClickItem = (date: Date) => {
    onClickDay && onClickDay(date);
  };

  return (
    <Container>
      <StaticDatePicker
        value={value}
        dayOfWeekFormatter={(date) => format(date, "EEEEEE")}
        slots={{
          actionBar: () => null,
          toolbar: () => null,
          calendarHeader: (props) => (
            <CalendarHeader
              {...props}
              onClickLeft={onClickPreviousMonth}
              onClickRight={onClickNextMonth}
            />
          ),
          day: (props) => (
            <PickersDay {...props} data={data} onClickDay={onClickItem} />
          ),
        }}
        views={["day"]}
        disableHighlightToday
        //    minDate={subMonths(new Date(), 2)}
        sx={(theme) => ({
          border: bordered ? `1px solid ${theme.palette.divider}` : undefined,
          "& .MuiDateCalendar-root": {},
          "& .MuiDayCalendar-weekDayLabel": {
            fontSize: 14,
            fontWeight: 500,
            color: theme.palette.grey[700],
          },
        })}
      />
    </Container>
  );
};

export { BookingsCalendar };
