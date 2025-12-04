import { SxProps, Theme } from "@mui/material";
import { DataTableColumnProps } from "../../commons";
import { BaseItem } from "../sortableList/sortableList.types";

export type ColumnCellSortableTable = {
  align?: "left" | "center" | "right" | "justify" | "inherit";
  label?: string;
};

export type SortableTableProps<T extends BaseItem> = {
  columns: Array<ColumnCellSortableTable>;
  data: Array<T>;
  loading?: boolean;
  size?: "medium" | "small";
  sx?: SxProps<Theme>;
  t: Function;
  onChange: (items: T[]) => void;
  onClickItemRow?: (parmas: { item: T; index: number }) => void;
  getFields: (item: T, index: number) => Array<DataTableColumnProps>;
  renderListEmpty?: () => React.ReactNode;
};
