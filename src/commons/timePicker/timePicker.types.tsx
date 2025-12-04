import { FieldPath, FieldValues, RegisterOptions } from "react-hook-form";

export type TimePickerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
  className?: string;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  label?: string | null;
  variant?: "filled" | "outlined";
  size?: "small" | "medium" | undefined;
  minTime?: Date | string | null;
  maxTime?: Date | string | null;
  readOnly?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  placeholder?: string | null;
};
