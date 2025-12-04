import { SxProps, Theme } from "@mui/material";

export type ModalRightProps = {
  isVisible?: boolean;
  children?: React.ReactNode;
  width?: string | number;
  size?: "small" | "medium" | "large";
  sx?: SxProps<Theme>;
  onClickClose?: (event: React.KeyboardEvent | React.MouseEvent) => void;
};

export type ModalRightState = {
  open: boolean;
};
