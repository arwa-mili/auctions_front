export type CardStatsDriversProps = {
  label: string;
  icon?: React.ReactNode;
  currency?: string;
  colors: Array<string>;
  data: Array<{
    label: string;
    value: number;
    contrastText?: string;
    color?: string;
  }>;
};
