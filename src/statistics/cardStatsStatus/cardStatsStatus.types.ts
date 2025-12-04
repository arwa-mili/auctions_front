export type CardStatsStatusProps = {
  label: string;
  icon?: React.ReactNode;
  statusList: Array<StatusItem>;
  loading?: boolean;
};

export type StatusItem = {
  label: string;
  count: number;
  color?: string;
};
