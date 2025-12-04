import { styled, TableCell } from "@mui/material";

export const HeadTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: 12,
  fontWeight: "500",
  color: theme.palette?.grey[600],
  padding: "12px 22px !important",
}));

export const CustomTableCell = styled(TableCell)(({ theme }) => ({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: 400,
  fontSize: 14,
  fontWeight: "400",
  color: theme.palette.grey[600],
  padding: "0px 20px",
}));
