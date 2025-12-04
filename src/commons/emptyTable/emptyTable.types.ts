import { SxProps, Theme } from "@mui/material";

export type EmptyTableProps = {
  isAppliedFilter?: boolean;
  isAppliedSearch?: boolean;
  imageWidth?: string | number;
  imageHeight?: string | number;
  imageEmptyFilter?: string;
  titleEmptyFilter?: string | number | null;
  messageEmptyFilter?: string | number | null;
  imageEmptySearch?: string;
  titleEmptySearch?: string | number | null;
  messageEmptySearch?: string | number | null;
  sx?: SxProps<Theme>;
};
