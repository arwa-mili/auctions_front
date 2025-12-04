import { Stack, styled } from "@mui/material";

export const Container = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(1),
  maxHeight: 300,
  overflow: "auto",
}));

export const Row = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  minHeight: 40,
  gap: theme.spacing(1),
  padding: theme.spacing(0.5, 2),
}));
