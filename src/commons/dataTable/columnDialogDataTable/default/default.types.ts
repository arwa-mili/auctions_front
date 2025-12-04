import { ColumnCell } from "@commons";

export type DefaultProps<T> = {
  columns: Array<ColumnCell<T>>;
  t: Function;
  onChangeColumns: (columns: Array<ColumnCell<T>>) => void;
};
