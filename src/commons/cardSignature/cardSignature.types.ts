import { SxProps, Theme } from "@mui/material";
import { FieldPath, FieldValues, RegisterOptions } from "react-hook-form";

export type CardSignatureProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  label?: string;
  textUpload: string;
  textSign: string;
  name: string;
  width: number;
  height: number;
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
  titleSign: string;
  textButtonReset: string;
  textButtonConfirm: string;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
};

export type UploadFileBas64 = { base64: string; name: string };
