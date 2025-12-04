import { SxProps, Theme } from "@mui/material";

export type ModalState = { open: boolean };

export type ModalProps = {
  visible?: boolean;
  fullScreen?: boolean;
  fullWidth?: boolean;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  textButtonLeft?: string | null;
  textButtonRight?: string | null;
  sx?: SxProps<Theme>;
  onClickButtonLeft?: () => void;
  onClickButtonRight?: () => void;
  onClose?: () => void;
};
