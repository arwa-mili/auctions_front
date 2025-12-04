import { SxProps } from "@mui/material";
import { ReactNode } from "react";

export type AccordionProps = {
  summary?: ReactNode;
  details?: ReactNode;
  endIcon?: ReactNode;
  sx?: SxProps;
  defaultExpanded?: boolean;
  expanded?: boolean;

  bgColorSelected?: string;
  contrastTextSelected?: string;
  onChange?: (
    event: React.SyntheticEvent<Element, Event>,
    expanded: boolean
  ) => void;
};
