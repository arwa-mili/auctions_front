import { SxProps, Theme } from "@mui/material";
import { FieldPath, FieldValues, RegisterOptions } from "react-hook-form";

export type RadioGroupProps<
  T,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  label?: string;
  fullWidth?: boolean;
  size?: "medium" | "small";
  sxRadioGroup?: SxProps<Theme>;
  labelPlacement?: "bottom" | "end" | "start" | "top";
  data: Array<T & { icon?: React.ReactNode; checkedIcon?: React.ReactNode }>;
  row?: boolean;
  sx?: SxProps<Theme>;
  getOptionValue: (item: T) => string | number;
  getOptionLabel: (item: T) => string | number | JSX.Element;
  getOptionDisabled?: (item: T) => boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => void;
};
