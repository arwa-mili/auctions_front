import { Table as MuiTable, TableCell as MuiTableCell, TableHead as MuiTableHead, styled } from "@mui/material";

export const Table = styled(MuiTable)(({}) => ({
  border: "none",
  position: "relative",
}));

export const TableHead = styled(MuiTableHead)(({ theme }) => ({
  background: theme.palette.grey[700],
  position: "sticky",
  top: 0,
  left: 0,
  zIndex: 999,
  "th:first-of-type": {
    borderTopLeftRadius: theme.spacing(1),
  },
  "th:last-child": {
    borderTopRightRadius: theme.spacing(1),
  },
}));

export const TableCell = styled(MuiTableCell)<{ width?: number }>(({ theme, width }) => ({
  borderBottom: `1px solid ${theme.palette.grey[600]}`,
  minWidth: width || 89,
  maxWidth: width || 90,
  color: theme.palette.common.white,
  fontSize: 12,
  fontWeight: "500",
}));
