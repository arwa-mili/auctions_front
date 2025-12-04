import { FieldPath, FieldValues, RegisterOptions } from "react-hook-form";
import { Sources } from "quill";
import ReactQuill from "react-quill";

export type InputEditorProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
  rules?: Omit<RegisterOptions<TFieldValues, TName>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  label?: string | null;
  margin?: string | number;
  minHeight?: string | number;
  placeholder?: string;
  maxCharacters?: number;
  color?: ColorInputProps;
  disabled?: boolean;
  onFocus?: (selection: ReactQuill.Range, source: Sources, editor: ReactQuill.UnprivilegedEditor) => void;
  onBlur?: (previousSelection: ReactQuill.Range, source: Sources, editor: ReactQuill.UnprivilegedEditor) => void;
  onChange?: (value: any, delta: any, sources: any, editor: any) => void;
};

export type ColorInputProps = "error" | "primary" | "secondary" | "info" | "success" | "warning" | undefined;
