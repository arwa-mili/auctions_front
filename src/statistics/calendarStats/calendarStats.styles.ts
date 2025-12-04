import { styled, Paper as MuiPaper } from "@mui/material";

export const Paper = styled(MuiPaper)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  borderRadius: theme.spacing(1),
  overflow: "hidden",
}));
