import { FieldPath, FieldValues, RegisterOptions } from "react-hook-form";

export type CheckboxProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  size?: "small" | "medium";
  label?: React.ReactNode | string | null;
  labelFontWeight?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  checkedIcon?: React.ReactNode;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
};
