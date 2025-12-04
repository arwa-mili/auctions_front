import { ModalRight } from "../../../modals";
import { ColumnCell } from "../headDataTable/headDataTable.types";

export type ColumnDialogDataTableProps<T> = {
  columns: Array<ColumnCell<T>>;
  defaultsColumns?: Array<ColumnCell<T>>;
  t: Function;
  labelColumnDialogDisplayMoreData?: string | null;
  labelColumnDialogReset?: string | null;
  labelColumnDialogSave?: string | null;
  groupedColumns?: boolean;
  onClickCloseDialog?: () => void;
  onClickSave?: (columns: Array<ColumnCell<T>>) => void;
} & { mRef?: React.Ref<ModalRight> | null };
