import { styled, Paper as MuiPaper } from "@mui/material";

export const Paper = styled(MuiPaper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  paddingBottom: theme.spacing(1),
  borderRadius: theme.spacing(1.5),
}));

export const Content = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(0, 2),
}));
