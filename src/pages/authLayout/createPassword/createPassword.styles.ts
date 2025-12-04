import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(8),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4),
  },
}));
