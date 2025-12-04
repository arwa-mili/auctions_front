import { SxProps, Theme } from "@mui/material";
import { FieldPath, FieldValues, RegisterOptions } from "react-hook-form";

export type InputPhoneProps<
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
  fullWidth?: boolean;
  defaultCountry?: any;
  disabled?: boolean;
  size?: "small" | "medium";
  variant?: "filled" | "outlined";
  color?: ColorInputProps;
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  sx?: SxProps<Theme>;
};

export type ColorInputProps =
  | "error"
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | undefined;
