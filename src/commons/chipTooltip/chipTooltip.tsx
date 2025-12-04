import { FC } from "react";
import { Stack, Tooltip, Typography } from "@mui/material";
//types
import { ChipTooltipProps } from "./chipTooltip.types";

const ChipTooltip: FC<ChipTooltipProps> = (props) => {
  const {
    icon,
    label,
    hideTooltip,
    tooltip,
    sxTooltip,
    sxLabel,
    sxChip,
    slotTooltipProps,
  } = props;

  const component = (
    <Stack direction="row" alignItems="center" gap={1} sx={sxChip}>
      {icon}
      {label && (
        <Typography variant="body1" sx={sxLabel}>
          {label}
        </Typography>
      )}
    </Stack>
  );

  if (hideTooltip) return component;

  return (
    <Tooltip arrow title={tooltip} sx={sxTooltip} slotProps={slotTooltipProps}>
      {component}
    </Tooltip>
  );
};

export { ChipTooltip };
