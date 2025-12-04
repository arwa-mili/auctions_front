import { PickersDayProps as MuiPickersDayProps } from "@mui/x-date-pickers";

export type PickersDayProps = MuiPickersDayProps<Date> & {
  data: Array<{
    day?: number;
    month?: number;
    year?: number;
    count?: number;
  }>;
  onClickDay?: (date: Date) => void;
};
