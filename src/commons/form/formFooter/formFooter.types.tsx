import { SxProps, Theme } from "@mui/material";

export type FormFooterProps = {
  minWidth?: number | string;
  textButtonLeft?: string | null;
  textButtonRight?: string | null;
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
  startIconButtonLeft?: React.ReactNode;
  startIconButtonRight?: React.ReactNode;
  hide?: boolean;
  sx?: SxProps<Theme>;
  sxButtonLeft?: SxProps<Theme>;
  sxButtonRight?: SxProps<Theme>;
  onClickButtonLeft?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClickButtonRight?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
