import { format } from "date-fns";
import { FC, useMemo } from "react";
//styles
import { Badge, Mask, MuiPickersDay } from "./pickersDay.styles";
//types
import { PickersDayProps } from "./pickersDay.types";

const PickersDay: FC<PickersDayProps> = (props) => {
  const { data, onClickDay, ...rest } = props;
  const currentday = useMemo(
    () => ({
      day: Number.parseInt(format(rest.day, "d")),
      month: Number.parseInt(format(rest.day, "M")),
      year: Number.parseInt(format(rest.day, "yyyy")),
    }),
    [rest.day]
  );
  const targetDay = useMemo(
    () =>
      data.find(
        (o) =>
          o.day === currentday.day &&
          o.month === currentday.month &&
          o.year === currentday.year
      ),
    [currentday, data]
  );
  const onClickItem = () => {
    onClickDay && onClickDay(rest.day);
  };
  return (
    <MuiPickersDay {...rest}>
      <Mask selected={rest.selected} today={rest.today} onClick={onClickItem}>
        {format(rest.day, "d")}

        {!rest.outsideCurrentMonth &&
          targetDay?.count &&
          targetDay?.count > 0 && (
            <Badge>{targetDay?.count > 99 ? "99+" : targetDay?.count}</Badge>
          )}
      </Mask>
    </MuiPickersDay>
  );
};

export default PickersDay;
