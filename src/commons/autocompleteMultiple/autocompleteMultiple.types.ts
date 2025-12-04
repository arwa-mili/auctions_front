import { FieldPath, FieldValues, RegisterOptions } from "react-hook-form";
import {
  AutocompleteOwnerState,
  AutocompleteRenderGetTagProps,
  AutocompleteRenderGroupParams,
  AutocompleteRenderOptionState,
  IconButtonProps,
  PaperProps,
  PopperProps,
  SxProps,
  Theme,
} from "@mui/material";

export type AutocompleteMultipleProps<
  T,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
  nameSearch?: TName;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  label?: string | null;
  placeholder?: string | null;
  fullWidth?: boolean;
  loading?: boolean;
  data: Array<T>;
  popupIcon?: React.ReactNode | null;
  disabled?: boolean;
  clearOnBlur?: boolean;
  disableClientFiltering?: boolean;
  variant?: "filled" | "outlined" | "standard";
  size?: "small" | "medium";
  color?: ColorInputProps;
  sx?: SxProps<Theme>;
  slotProps?: {
    clearIndicator?: Partial<IconButtonProps>;
    paper?: PaperProps;
    popper?: Partial<PopperProps>;
    popupIndicator?: Partial<IconButtonProps>;
  };
  blurOnSelect?: boolean | "touch" | "mouse";
  onFocus?: React.FocusEventHandler<HTMLDivElement>;
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
  groupBy?: (option: T) => string;
  getOptionLabel?: (option: T) => string;
  isOptionEqualToValue?: (option: T, value: T) => boolean;
  renderTags?: (
    value: T[],
    getTagProps: AutocompleteRenderGetTagProps,
    ownerState: AutocompleteOwnerState<T, true, false, false, "div">
  ) => React.ReactNode;
  renderGroup?: (params: AutocompleteRenderGroupParams) => React.ReactNode;
  renderOption?: (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: T,
    state: AutocompleteRenderOptionState
  ) => React.ReactNode;
  onChange?: (option: T[] | null) => void;
};

export type ColorInputProps =
  | "error"
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | undefined;
