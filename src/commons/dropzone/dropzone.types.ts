import { FieldPath, FieldValues, RegisterOptions } from "react-hook-form";
import { DropzoneOptions } from "react-dropzone";
import { SxProps, Theme } from "@mui/material";

export interface UploadFile extends File {
  path?: string;
  preview?: string;
  lastModifiedDate?: Date;
}

export type DropzoneProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = DropzoneOptions & {
  name: TName;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  label?: React.ReactNode;
  sx?: SxProps<Theme>;
  sxDropzone?: SxProps<Theme>;
  textUpload?: React.ReactNode;
  iconUpload?: React.ReactNode;
  sxEmpty?: SxProps<Theme>;
  children?: React.ReactNode;
  actions?: {
    isDeletable?: boolean;
    isDownloaded?: boolean;
    isEditable?: boolean;
    isViewed?: boolean;
  };
  sxActions?: SxProps<Theme>;
  sxActionDelete?: SxProps<Theme>;
};
