import { SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

export type HeaderProps = {
  iconLeft?: React.ReactNode;
  title?: string;
  tooltip?: ReactNode;
  subTitle?: string;
  labelMore?: string;
  labelLess?: string;
  searchPlaceholder?: string;
  labelButtonFilter?: string;
  labelButtonReset?: string;
  breakpointsFilterButtons?: Breakpoints;
  buttons?: Array<ItemButton>;
  filters?: Array<ItemFilter>;
  isAppliedFilter?: boolean;
  sx?: SxProps<Theme>;
  right?: React.ReactNode;
  sxLeft?: SxProps<Theme>;
  sxRight?: SxProps<Theme>;
  onClickFilter?: () => void;
  onClickReset?: () => void;
  onChangeTextSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// ***************** BUTTONS *****************
export type ItemButton = {
  disabled?: boolean;
  bgColor?: string;
  hide?: boolean;
  sx?: SxProps<Theme>;
} & (ItemButtonProps | ItemIconButtonProps | ItemButtonWithMenuProps);

export type ItemButtonProps = { type: "Button" } & {
  label: string;
  variant?: "text" | "outlined" | "contained";
  size?: "small" | "medium" | "large";
  startIcon?: React.ReactNode;
  buttonLoading?: boolean;
  minWidth?: number | string;
  minHeight?: number | string;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  onClick?: () => void;
};

export type ItemIconButtonProps = { type: "IconButton" } & {
  icon: JSX.Element;
  size?: "small" | "medium" | "large" | "extra-small";
  color?:
    | "inherit"
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "standard";
  borderColor?: string;
  onClick?: () => void;
  sx?: SxProps<Theme>;
};

export type ItemButtonWithMenuProps = { type: "ButtonWithMenu" } & {
  label: string;
  variant?: "text" | "outlined" | "contained";
  size?: "small" | "medium" | "large";
  startIcon?: React.ReactNode;
  minWidth?: number | string;
  minHeight?: number | string;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  options: Array<OptionProps>;
};
export type OptionProps = {
  label: string;
  icon?: JSX.Element;
  textColor?: string;
  disabled?: boolean;
  onClickOption?: () => void;
};

// ***************** FILTER *****************
type Breakpoints = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};
export type ItemFilter = {
  name: string;
  label?: string | null;
  placeholder?: string | null;
  disabled?: boolean;
  breakpoints?: Breakpoints;
} & (
  | ItemFilterSelect
  | ItemFilterAutocomplete
  | ItemFilterDatePicker
  | ItemFilterDateTimePicker
  | ItemFilterTimePicker
  | ItemFilterRangeSlider
);
export type ItemFilterSelect = { type: "Select" } & {
  data: Array<any>;
  getOptionValue?: (item: any) => string | number;
  getOptionLabel?: (item: any) => JSX.Element | string | number;
  getOptionDisabled?: (item: any) => boolean;
  onChange?: (option: any) => void;
};

export type ItemFilterAutocomplete = { type: "Autocomplete" } & {
  nameSearch?: string;
  data: Array<any>;
  loading?: boolean;
  getOptionLabel?: (option: any) => string;
  isOptionEqualToValue?: (option: any, value: any) => boolean;
  startAdornment?: (value: any) => React.ReactNode;
  renderOption?: (props: any, option: any) => React.ReactNode;
  onChange?: (option: any | null) => void;
};
export type ItemFilterDatePicker = { type: "DatePicker" } & {
  name: string;
  minDate?: Date;
  maxDate?: Date;
  readOnly?: boolean;
  format?: string;
  onChange?: (value: any, context: any) => void;
};

export type ItemFilterDateTimePicker = { type: "DateTimePicker" } & {
  name: string;
  minDate?: Date;
  maxDate?: Date;
  readOnly?: boolean;
  format?: string;
  onChange?: (value: any, context: any) => void;
};
export type ItemFilterTimePicker = { type: "TimePicker" } & {
  name: string;
  minTime?: Date | string | null;
  maxTime?: Date | string | null;
  readOnly?: boolean;
};
export type ItemFilterRangeSlider = { type: "RangeSlider" } & {
  name: string;
  label?: string;
  margin?: string;
  min?: number;
  max?: number;
};
