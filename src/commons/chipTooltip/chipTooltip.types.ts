import {
  PopperProps,
  SxProps,
  Theme,
  TooltipComponentsPropsOverrides,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { MUIStyledCommonProps } from "@mui/system";

export type ChipTooltipProps = {
  tooltip: React.ReactNode;
  label?: string | number;
  icon?: React.ReactNode;
  sxTooltip?: SxProps<Theme>;
  sxLabel?: SxProps<Theme>;
  sxChip?: SxProps<Theme>;
  hideTooltip?: boolean;
  slotTooltipProps?: {
    popper?: Partial<PopperProps> & TooltipComponentsPropsOverrides;
    transition?: TransitionProps & TooltipComponentsPropsOverrides;
    tooltip?: React.HTMLProps<HTMLDivElement> &
      MUIStyledCommonProps<Theme> &
      TooltipComponentsPropsOverrides;
    arrow?: React.HTMLProps<HTMLSpanElement> &
      MUIStyledCommonProps<Theme> &
      TooltipComponentsPropsOverrides;
  };
};
