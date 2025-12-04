import { StepperProps as MuiStepperProps, SxProps, Theme } from "@mui/material";

export type StepperProps = MuiStepperProps & {
  directionLabel?: "row" | "column";
  data: Array<{ label: string; description?: string }>;
  sxConnector?: SxProps<Theme>;
};
