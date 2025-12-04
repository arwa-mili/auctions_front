import { SxProps, Theme } from "@mui/material";

export type EmptyProps = {
  image?: string;
  imageWidth?: string | number;
  imageHeight?: string | number;
  title?: string | number | null;
  message?: React.ReactNode | null;
  sx?: SxProps<Theme>;
  sxTitle?: SxProps<Theme>;
  sxMessage?: SxProps<Theme>;
  hidePrimaryButton?: boolean;
  hideSecondaryButton?: boolean;
  textPrimaryButton?: string;
  textSecondaryButton?: string;
  loadingButtonPrimary?: boolean;
  loadingButtonSecondary?: boolean;
  textPrimaryVariant?: "text" | "outlined" | "contained";
  textSecondaryVariant?: "text" | "outlined" | "contained";
  startIconPrimary?: JSX.Element;
  startIconSecondary?: JSX.Element;
  sxButtonPrimary?: SxProps<Theme>;
  sxButtonSecondary?: SxProps<Theme>;
  onClickPrimaryButton?: () => void;
  onClickSecondaryButton?: () => void;
};
