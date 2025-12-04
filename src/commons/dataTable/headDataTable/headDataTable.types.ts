export type Order = "asc" | "desc";

export type ColumnCell<T> = {
  id?: keyof T;
  displayed?: boolean;
  disablePadding?: boolean;
  align?: "left" | "center" | "right" | "justify" | "inherit";
  group?: string;
  groupLabel?: string;
  permissions?: Array<any> | any;
} & (ColumnCellLabelProps | ColumnCellReactNodeProps);

type ColumnCellLabelProps = { type: "label" } & {
  label?: string | null;
  tooltip?: string | null;
};
type ColumnCellReactNodeProps = { type: "reactNode" } & {
  node?: React.ReactNode;
};

export type HeadTableProps<T> = {
  order: Order;
  orderBy: any;
  t: Function;
  columns: Array<ColumnCell<T>>;
  defaultsColumns?: Array<ColumnCell<T>>;
  checkboxValues?: {
    checked: boolean;
    indeterminate: boolean;
  };
  alignHead?: "left" | "center" | "right" | "justify" | "inherit";
  hideCheckbox?: boolean;
  onChangeCheckBox?: (params: { value: boolean }) => void;
  onRequestSort: (event: React.MouseEvent<unknown>, property?: keyof T) => void;
};
