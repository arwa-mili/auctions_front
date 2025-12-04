import { LabelDisplayedRowsArgs, SxProps, Theme } from "@mui/material";
import { ModalRight } from "../../modals";
import {
  ColumnCell,
  HeadTableProps,
  Order,
} from "./headDataTable/headDataTable.types";

export type DataTableProps<T> = Omit<
  HeadTableProps<T>,
  "order" | "orderBy" | "onRequestSort"
> & {
  loading?: boolean;
  size?: "small" | "medium";
  data: Array<T>;
  page?: number;
  limit?: number;
  count?: number;
  hidePagination?: boolean;
  labelRowsPerPage?: string | null;
  labelColumnDialogDisplayMoreData?: string | null;
  labelColumnDialogReset?: string | null;
  labelColumnDialogSave?: string | null;
  language: string;
  groupedColumns?: boolean;
  stickyHeader?: boolean;
  sxTableContainer?: SxProps<Theme>;
  labelDisplayedRows?: ({ from, to, count }: LabelDisplayedRowsArgs) => string;
  renderListEmpty?: () => React.ReactNode;
  renderItem: (params: {
    item: T;
    index: number;
    hideCheckbox?: boolean;
    size?: "small" | "medium";
  }) => React.ReactNode;
  onClickItemRow?: (params: { item: T; index: number }) => void;
  onChangePage?: (params: { page: number; limit: number }) => void;
  onRowsPerPageChange?: (params: { limit: number; page: number }) => void;
  onRequestSort?: (params: {
    orderBy: "desc" | "asc";
    property?: keyof T;
  }) => void;
  onClickCloseSettingsColumns?: () => void;
  onClickSaveSettingsColumns?: (columns: Array<ColumnCell<T>>) => void;
} & { refSettingsColumns?: React.Ref<ModalRight> | null };

export type DataTableState<T> = {
  order: Order;
  orderBy?: keyof T;
  animatedRow: AnimatedRow<T> | null;
};

export type AnimatedRow<T> = { id: string; prop: keyof T };
