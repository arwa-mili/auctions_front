import { styled } from "@mui/material";

export const Container = styled("div")<{ bordered?: boolean }>(({ theme, bordered }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  borderLeft: bordered ? `1px solid ${theme.palette.divider}` : "none",
}));

export const Header = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: 50,
  padding: theme.spacing(0, 2),
  borderBottom: `1px solid ${theme.palette.divider}`,
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

export const Point = styled("span")<{ background?: string }>(({ theme, background }) => ({
  width: 4,
  height: 4,
  borderRadius: 2,
  background,
}));
