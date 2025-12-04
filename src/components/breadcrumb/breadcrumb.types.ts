import { BreadcrumbsProps as MuiBreadcrumbsProps } from "@mui/material";

export type BreadcrumbProps = MuiBreadcrumbsProps & {
  title?: string;
  data: Array<BreadcrumbItem>;
};

export type BreadcrumbItem = {
  label?: string;
  home?: boolean;
  link?: string;
  skipTranslation?: boolean;
  disabled?: boolean;
  position?: number;
};
