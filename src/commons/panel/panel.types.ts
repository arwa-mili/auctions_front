import { SxProps, Theme } from "@mui/material";

export type PanelProps = {
  title?: React.ReactNode;
  children?: React.ReactNode;
  sxContent?: SxProps<Theme>;
  right?: React.ReactNode;
  headerWithBorder?: boolean;
  sxTitle?: SxProps<Theme>;
  sx?: SxProps<Theme>;
  sxHeader?: SxProps<Theme>;
  variant?: "outlined" | "elevation";
};
