import { styled, Paper as MuiPaper } from "@mui/material";

export const Paper = styled(MuiPaper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: theme.spacing(1.5),
  padding: theme.spacing(4),
  gap: theme.spacing(2),
}));
