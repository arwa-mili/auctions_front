import { FieldPath, FieldValues, RegisterOptions } from "react-hook-form";
import { DropzoneOptions } from "react-dropzone";
import { SxProps, Theme } from "@mui/material";

export interface UploadFile extends File {
  path?: string;
  preview?: string;
  lastModifiedDate?: Date;
}

export type DropzoneMultipleProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = DropzoneOptions & {
  name: TName;
  label?: React.ReactNode;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  sx?: SxProps<Theme>;
  textUpload?: React.ReactNode;
};
