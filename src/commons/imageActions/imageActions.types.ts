import { SxProps, Theme } from "@mui/material";

export type ActionsProps = {
  url?: string;
  emptyImage?: string;
  objectFit?: "contain" | "fill" | "cover" | "none" | "scale-down";
  alt?: string;
  width?: number | string;
  height?: number | string;
  label?: string;
  actions?: {
    isDownloaded?: boolean;
    isViewed?: boolean;
  };
  sxActions?: SxProps<Theme>;
  sxContainer?: SxProps<Theme>;
  sx?: SxProps<Theme>;
};
