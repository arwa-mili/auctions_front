import { styled, TableCell, TableCellProps } from "@mui/material";

export const CustomTableCell = styled(TableCell)<
  TableCellProps & { spacing?: string | number }
>(({ theme, spacing }) => ({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: 400,
  fontSize: 14,
  fontWeight: "400",
  color: theme.palette.grey[600],
  padding: spacing,
}));
