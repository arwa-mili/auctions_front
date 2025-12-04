import { GridSize, SxProps, Theme } from "@mui/material";
import { FieldPath, FieldValues, RegisterOptions } from "react-hook-form";

export type CheckboxGroupProps<
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
  labelSelectAll?: string;
  size?: "medium" | "small";
  labelPlacement?: "bottom" | "end" | "start" | "top";
  data: Array<T>;
  row?: boolean;
  gridBreakpoints?: GridBreakpointsProps;
  sx?: SxProps<Theme>;
  sxFormControlLabel?: SxProps<Theme>;
  getOptionValue: (item: T) => string | number;
  getOptionLabel: (item: T) => JSX.Element;
  getOptionDisabled?: (item: T) => boolean;
  onChange?: (
    event: React.SyntheticEvent<Element, Event>,
    value: string | number,
    checked: boolean
  ) => void;
};
export type GridBreakpointsProps = {
  xl?: boolean | GridSize;
  lg?: boolean | GridSize;
  md?: boolean | GridSize;
  sm?: boolean | GridSize;
  xs?: boolean | GridSize;
};
