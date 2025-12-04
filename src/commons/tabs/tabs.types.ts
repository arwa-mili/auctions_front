import { JSX } from "react";
import { Breakpoint, SxProps, Theme } from "@mui/material";

export type TabsProps = {
  data: Array<ItemTab>;
  value: string | number | null;
  orientation?: "vertical" | "horizontal";
  size?: "small" | "medium";
  sx?: SxProps<Theme>;
  centered?: boolean;
  sxTab?: SxProps<Theme>;
  sxTabList?: SxProps<Theme>;
  breakpointKey?: Breakpoint;
  renderHeader?: () => React.ReactNode;
  onChange?: (event: React.SyntheticEvent, newValue: any) => void;
};

export type ItemTab = {
  label: string;
  value: string | number | null;
  element: React.ReactNode;
  icon?: JSX.Element;
  iconPosition?: "top" | "bottom" | "end" | "start";
  p?: number;
  disabled?: boolean;
  count?: number;
  right?: React.ReactNode;
};
