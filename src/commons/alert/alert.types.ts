import { SxProps, Theme } from "@mui/material";

export type AlertProps = {
  iconComponent: JSX.Element;
  title?: string | null;
  message?: React.ReactNode | string;
  subMessage?: React.ReactNode | string;
  type?: "info" | "primary" | "warning" | "error";
  isVisible?: boolean;
  sx?: SxProps<Theme>;
};
