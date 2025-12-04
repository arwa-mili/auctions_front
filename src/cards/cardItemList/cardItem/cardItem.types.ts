import { SxProps, Theme } from "@mui/material";

export type CardItemProps = {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  left?: string | React.ReactNode;
  right?: React.ReactNode;
  loading?: boolean;
  bordered?: boolean;
  bgColor?: string;
  sx?: SxProps<Theme>;
  sxLeft?: SxProps<Theme>;
  sxRight?: SxProps<Theme>;
} & (ItemString | ItemLink);

type ItemString = { type?: "string" } & {};
type ItemLink = { type?: "link" } & {
  url?: string;
};
