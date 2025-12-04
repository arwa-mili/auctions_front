import { SxProps, Theme } from "@mui/material";

export type TimelineProps = {
  sx?: SxProps<Theme>;
  data: Array<TimeLineItemProps>;
  loading?: boolean;
  renderEmpty?: () => React.ReactNode;
  renderLoader?: () => React.ReactNode;
};

export type TimeLineItemProps = {
  node: React.ReactNode;
  icon?: React.ReactNode;
};
