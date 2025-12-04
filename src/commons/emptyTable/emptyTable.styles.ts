import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
  gap: theme.spacing(1),
}));
