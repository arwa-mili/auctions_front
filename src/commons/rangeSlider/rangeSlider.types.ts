import { FieldPath, FieldValues, RegisterOptions } from "react-hook-form";

export type RangeSliderProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  size?: "small" | "medium";
  min?: number;
  max?: number;
  label?: string;
};
