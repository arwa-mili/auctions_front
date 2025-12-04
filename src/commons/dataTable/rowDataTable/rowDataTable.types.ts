import { DataTableColumnProps } from "../dataTableColumn/dataTableColumn.types";

export type RowDataTableProps = {
  fields: Array<DataTableColumnProps>;
  hideCheckbox?: boolean;
  checked?: boolean;
  onChangeCheckBox?: (value: boolean) => void;
};
