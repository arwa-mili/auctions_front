import { LabelDisplayedRowsArgs, SxProps, Theme } from "@mui/material";

export type PaginationProps = {
  component?: any;
  language: string;
  page?: number;
  limit?: number;
  count?: number;
  labelRowsPerPage?: string | null;
  labelDisplayedRows?: ({ from, to, count }: LabelDisplayedRowsArgs) => string;
  sx?: SxProps<Theme>;
  onChangePage?: (params: { page: number; limit: number }) => void;
  onRowsPerPageChange?: (params: { limit: number; page: number }) => void;
};
