import { SxProps, Theme } from "@mui/material";

export type ModalConfirmationState = { open: boolean };

export type IconButtonTypeProps =
  | "info"
  | "success"
  | "warning"
  | "error"
  | "primary";

export type ModalConfirmationProps = {
  iconButtontype?: IconButtonTypeProps;
  icon?: React.ReactNode;
  message?: string | null;
  title: string;
  sx?: SxProps<Theme>;
  sxHeader?: SxProps<Theme>;
  textButtonLeft?: string | null;
  textButtonRight?: string | null;
  children?: React.ReactNode;
  isLoadingButtonRight?: boolean;
  isLoadingButtonLeft?: boolean;
  isDisabledButtonRight?: boolean;
  isDisabledButtonLeft?: boolean;
  colorButtonRight?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  colorButtonLeft?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  variantButtonRight?: "text" | "outlined" | "contained";
  variantButtonLeft?: "text" | "outlined" | "contained";
  sxButtonLeft?: SxProps<Theme>;
  sxButtonRight?: SxProps<Theme>;
  sxContent?: SxProps<Theme>;
  preventCloseButtonLeft?: boolean;
  preventCloseButtonRight?: boolean;
  onClickButtonLeft?: () => void;
  onClickButtonRight?: () => void;
  onClose?: () => void;
};
