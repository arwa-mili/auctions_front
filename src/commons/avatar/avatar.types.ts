import { AvatarProps as MuiAvatarProps } from "@mui/material";

export type AvatarProps = MuiAvatarProps & {
  alt: string;
  width?: number | string;
  height?: number | string;
  radius?: number | string;
  border?: string;
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
};
