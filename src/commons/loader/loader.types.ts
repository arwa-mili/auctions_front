type ColorProps =
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning"
  | "inherit"
  | "default";

export type LoaderProps = {
  size?: number;
  color?: ColorProps;
};
export type DotProps = {
  dotSize?: string;
  duration?: string;
  delay?: string;
  color?: ColorProps;
};
