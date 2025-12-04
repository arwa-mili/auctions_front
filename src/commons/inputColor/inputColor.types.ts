import { SxProps, Theme } from "@mui/material";
import { MuiColorInputColors, MuiColorInputFormat } from "mui-color-input";
import { FieldPath, FieldValues, RegisterOptions } from "react-hook-form";

export type InputColorProps<
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
  format?: MuiColorInputFormat;
  margin?: number | string;
  minWidth?: number | string;
  width?: number | string;
  tooltip?: React.ReactNode;
  helperText?: string | null;
  size?: "small" | "medium";
  color?: ColorInputProps;
  disabled?: boolean;
  sx?: SxProps<Theme>;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  onChange?: (value: string, colors: MuiColorInputColors) => void;
};

export type ColorInputProps =
  | "error"
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | undefined;
