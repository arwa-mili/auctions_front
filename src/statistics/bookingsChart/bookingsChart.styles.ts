import { Paper as MuiPaper, styled } from "@mui/material";

export const Paper = styled(MuiPaper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: theme.spacing(1),
  height: "100%",
}));

export const Header = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  height: 50,
  padding: theme.spacing(0, 2),
  gap: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const Content = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2),
  gap: theme.spacing(2),
}));

export const Row = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(2),
}));

export const Point = styled("span")<{ background?: string }>(
  ({ background }) => ({
    width: 15,
    height: 15,
    borderRadius: "50%",
    background,
  })
);
