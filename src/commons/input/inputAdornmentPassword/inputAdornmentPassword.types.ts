import { FieldPath, FieldValues } from "react-hook-form";

export type InputAdornmentPasswordProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};
