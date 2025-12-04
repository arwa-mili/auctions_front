import { styled, Paper as MuiPaper, alpha } from "@mui/material";

export const Paper = styled(MuiPaper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: theme.spacing(1.5),
  padding: theme.spacing(2),
  gap: theme.spacing(1),
  cursor: "pointer",
  "&:hover": {
    background: alpha(theme.palette.primary.main, 0.01),
    borderColor: theme.palette.primary.main,
  },
}));
