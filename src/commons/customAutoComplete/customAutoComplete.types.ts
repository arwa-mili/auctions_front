import { FieldPath, FieldValues, RegisterOptions } from "react-hook-form";
import { AutocompleteRenderOptionState, SxProps, Theme } from "@mui/material";

export type CustomAutoCompleteProps<
  T,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
  nameSearch: TName;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  label?: React.ReactNode | null;
  placeholder?: string | null;
  margin?: number | string;
  fullWidth?: boolean;
  loading?: boolean;
  data: Array<T>;
  variant?: "filled" | "outlined" | "standard";
  size?: "small" | "medium";
  popupIcon?: React.ReactNode | null;
  disabled?: boolean;
  labelButton?: string | null;
  startIconButton?: React.ReactNode | null;
  loadingLabel?: string;
  noResultLabel?: string;
  sxContainer?: SxProps<Theme>;
  blurOnSelect?: boolean;
  getOptionLabel?: (option: T | string) => string;
  isOptionEqualToValue?: (option: T, value: T) => boolean;
  startAdornment?: (value: T) => React.ReactNode;
  renderOption?: (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: T,
    state: AutocompleteRenderOptionState
  ) => React.ReactNode;
  onChange?: (
    event: React.SyntheticEvent<Element, Event>,
    value: T | string | null
  ) => void;
  onChangeText?: (event: any) => void;
  onClickButton?: () => void;
};

export type ColorInputProps =
  | "error"
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | undefined;
