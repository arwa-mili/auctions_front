import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const Content = styled("div")<{ gap: number }>(({ theme, gap }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(gap),
}));
