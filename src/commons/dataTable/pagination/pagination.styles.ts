import { Box, styled, Pagination } from "@mui/material";

export const PaginationActions = styled(Box)<{ language: string }>`
  display: flex;
  gap: 8px;
  svg {
    transform: ${({ language }) =>
      language === "ar" ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;

export const MuiPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    width: 40,
    height: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderColor: theme.palette?.grey[300],
    borderRadius: theme.spacing(1),
    fontSize: 14,
    fontWeight: "600",
    color: theme.palette.grey[600],
  },
}));
