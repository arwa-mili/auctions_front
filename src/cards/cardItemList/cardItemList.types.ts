import { SxProps, Theme } from "@mui/material";
import { CardItemProps } from "./cardItem/cardItem.types";

export type CardItemListProps = {
  data: Array<CardItemProps>;
  title?: string;
  loading?: boolean;
  direction?: "row" | "column";
  sx?: SxProps<Theme>;
};

export type { CardItemProps };
