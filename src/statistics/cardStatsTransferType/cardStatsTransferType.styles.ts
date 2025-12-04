import { Paper as MuiPaper, styled } from "@mui/material";

export const Paper = styled(MuiPaper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: theme.spacing(1.5),
  height: "100%",
}));

export const Header = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: theme.spacing(0, 2),
  gap: theme.spacing(1),
  borderBottom: `1px solid ${theme.palette.divider}`,
  minHeight: 48,
}));

export const Content = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2),
  gap: theme.spacing(2),
}));
