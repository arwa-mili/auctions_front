import { ChipProps as MuiChipProps } from "@mui/material";

export type ChipProps = MuiChipProps & {
  bgColor?: string | "transparent";
  labelColor?: string;
  labelFontSize?: number;
};
