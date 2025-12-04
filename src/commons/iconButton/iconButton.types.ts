import { IconButtonProps as MuiIconButtonProps } from "@mui/material";

export type IconButtonProps = Omit<MuiIconButtonProps, "size" | "color"> & {
  rounded?: boolean;
  width?: string | number;
  height?: string | number;
  minWidth?: string | number;
  minHeight?: string | number;
  bgColor?: string;
  border?: string;
  radius?: number | string;
  borderColor?: string;
  size?: "extra-small" | "small" | "medium" | "large";
  color?:
    | "inherit"
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "standard";
};
