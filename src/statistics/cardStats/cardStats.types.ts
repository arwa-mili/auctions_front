import { SxProps, Theme } from "@mui/material";

export type CardStatsProps = {
  label?: React.ReactNode;
  subLabel?: React.ReactNode;
  message?: React.ReactNode;
  icon?: React.ReactNode;
  sx?: SxProps<Theme>;
  sxContent?: SxProps<Theme>;
  loading?: boolean;
};
