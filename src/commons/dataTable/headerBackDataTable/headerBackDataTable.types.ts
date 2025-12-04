export type HeaderBackDataTableProps = {
  height?: string | number;
  message?: string | null;
  actions?: Array<{
    icon: JSX.Element;
    tooltip?: string;
    onClick?: () => void;
  }>;
};
