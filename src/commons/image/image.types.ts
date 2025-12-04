import { AvatarProps } from "@mui/material";

type ColorProps = "primary" | "secondary" | "error" | "info" | "success" | "warning" | "inherit" | "default";

export type ImagesProps = AvatarProps & {
  borderRadius?: number | string;
  size?: number;
  color?: ColorProps;
  width?: string | number;
  height?: string | number;
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
  backgroundColor?: string;
  border?: string | number;
};
