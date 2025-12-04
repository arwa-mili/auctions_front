import { styled, Paper as MuiPaper } from "@mui/material";

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

export const Item = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export const Point = styled("span")<{ background?: string }>(
  ({ theme, background }) => ({
    width: 4,
    height: 4,
    borderRadius: "50%",
    background,
  })
);
