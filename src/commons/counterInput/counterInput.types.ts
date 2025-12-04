import { SxProps, Theme } from "@mui/material";
import { FieldPath, FieldValues, RegisterOptions } from "react-hook-form";

export type CounterInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  label?: string;
  min?: number;
  note?: string;
  direction?: "row" | "column";
  size?: "small" | "medium";
  bgColorCounter?: string;
  disabled?: boolean;
  sx?: SxProps<Theme>;
  onDecrease?: () => void;
  onIncrease?: () => void;
};
