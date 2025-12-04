import { Breakpoint, SxProps, Theme } from "@mui/material";

export type ModalFullScreenProps = PartialDialogProps & {
  visible?: boolean;
  children?: React.ReactNode;
  fullScreen?: boolean;
  fullWidth?: boolean;
  maxWidth?: false | Breakpoint;
  sx?: SxProps<Theme>;
  onClose?: (event: React.KeyboardEvent | React.MouseEvent) => void;
};

export type ModalFullScreenState = {
  open: boolean;
};

export type PartialDialogProps = {
  radius?: number;
  padding?: number;
  height?: number | string;
  width?: number | string;
};
