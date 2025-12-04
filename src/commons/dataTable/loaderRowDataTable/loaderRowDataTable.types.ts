import { ColumnCell } from "../headDataTable/headDataTable.types";

export type LoaderRowDataTableProps = {
  limit?: number;
  hideCheckbox?: boolean;
  columns: Array<ColumnCell<any>>;
};
