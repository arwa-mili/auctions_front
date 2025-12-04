import { SelectChangeEvent, SxProps, Theme } from "@mui/material";
import { FieldPath, FieldValues, RegisterOptions } from "react-hook-form";

export type SelectProps<
  T,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
  label?: string | null;
  placeholder?: string | null;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  data: Array<T>;
  variant?: "filled" | "outlined" | "standard";
  size?: "small" | "medium";
  heightPaper?: number | string;
  fullWidth?: boolean;
  disabled?: boolean;
  multiple?: boolean;
  color?: ColorInputProps;
  sxMenuItem?: SxProps<Theme>;
  sx?: SxProps<Theme>;
  emptyLabel?: string;
  IconComponent?: React.ElementType<any, keyof React.JSX.IntrinsicElements>;
  renderValue?: (value: Array<string>) => React.ReactNode;
  getOptionValue?: (item: T) => string | number;
  getOptionLabel?: (item: T) => JSX.Element | string | number;
  getOptionDisabled?: (item: T) => boolean;
  onChange?: (event: SelectChangeEvent<string>) => void;
};

export type ColorInputProps =
  | "error"
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | undefined;
