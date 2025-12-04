import { CircularProgressProps, LinearProgressProps } from "@mui/material";

export type ProgressBarProps = {
  value: number;
  textColor?: string;
  minWidth?: number;
} & (LinearProps | CircularProps);

export type LinearProps = { type?: "linear" } & LinearProgressProps;

export type CircularProps = { type?: "circular" } & CircularProgressProps;
