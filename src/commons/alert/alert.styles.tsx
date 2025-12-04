import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  gap: theme.spacing(1),
}));
