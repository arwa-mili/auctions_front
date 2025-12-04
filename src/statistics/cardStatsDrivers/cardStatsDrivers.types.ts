export type CardStatsDriversProps = {
  label: string;
  icon?: React.ReactNode;
  currency?: string;
  data: Array<{
    label: string;
    value: number;
    contrastText?: string;
    color?: string;
  }>;
  orientation?: "vertical" | "horizontal";
  height?: number | string;
};
