import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(0, 16),
  justifyContent: "center",
  height: "100%",
  [theme.breakpoints.down(1344)]: {
    padding: theme.spacing(0, 1),
  },
}));
