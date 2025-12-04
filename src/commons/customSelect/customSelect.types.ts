import { SxProps, Theme } from "@mui/material";
import { FieldPath, FieldValues, RegisterOptions } from "react-hook-form";

export type CustomSelectProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name?: TName;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  label?: string | null;
  placeholder?: string | null;
  sxContainer?: SxProps<Theme>;
  sxInput?: SxProps<Theme>;
  children?: React.ReactNode;
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  getFieldValue?: (value: any) => string;
  onClose?: () => void;
};
