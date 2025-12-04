import { styled, Paper as MuiPaper } from "@mui/material";

export const Paper = styled(MuiPaper)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  borderRadius: theme.spacing(1.5),
  padding: theme.spacing(2),
  gap: theme.spacing(2),
  minWidth: 160,
  flex: 1,
}));
