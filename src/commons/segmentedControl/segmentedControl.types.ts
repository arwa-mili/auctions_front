import { SxProps, Theme } from "@mui/material";
import { FieldPath, FieldValues } from "react-hook-form";

export type SegmentedControlProps<
  T,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
  data: Array<T>;
  label?: string;
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  margin?: string;
  optionLabelColor?: string;
  borderColor?: string;
  position?: "center" | "start" | "end";
  sxContainer?: SxProps<Theme>;
  minWidth?: string | number;
  onChange?: (value: T) => void;
  getOptionValue: (item: T) => string | number;
  getOptionLabel?: (item: T) => string | number;
  getOptionIcon?: (item: T, selected?: boolean) => React.ReactNode;
};
