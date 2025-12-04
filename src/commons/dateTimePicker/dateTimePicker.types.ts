import { SxProps, Theme } from "@mui/material";
import { FieldPath, FieldValues, RegisterOptions } from "react-hook-form";

export type DateTimePickerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  label?: React.ReactNode | null;
  placeholder?: string | null;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: "small" | "medium";
  variant?: "filled" | "standard" | "outlined";
  minDate?: String | Number | Date;
  maxDate?: Date;
  format?: string;
  readOnly?: boolean;
  sxContainer?: SxProps<Theme>;
  sx?: SxProps<Theme>;
  onChange?: (value: any, context: any) => void;
};
