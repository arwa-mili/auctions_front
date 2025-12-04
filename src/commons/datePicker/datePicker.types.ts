import { SxProps, Theme } from "@mui/material";
import { DateView } from "@mui/x-date-pickers";
import { FieldPath, FieldValues, RegisterOptions } from "react-hook-form";

export type DatePickerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  label?: string | null;
  placeholder?: string | null;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: "small" | "medium";
  variant?: "filled" | "standard" | "outlined";
  minDate?: Date | String | Number;
  maxDate?: Date | String | Number;
  readOnly?: boolean;
  disableFuture?: boolean;
  disablePast?: boolean;
  format?: string;
  views?: DateView[];
  referenceDate?: any;
  sxContainer?: SxProps<Theme>;
  sx?: SxProps<Theme>;
  onChange?: (value: any, context: any) => void;
};
