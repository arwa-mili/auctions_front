import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  position: "absolute",
  left: theme.spacing(1),
  bottom: theme.spacing(1),
  width: 320,
  zIndex: 2,
  height: 480,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(1),
  background: theme.palette.background.paper,
  display: "flex",
  flexDirection: "column",
}));

export const Header = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(1, 1, 1, 2),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const Content = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  padding: theme.spacing(2),
  gap: theme.spacing(2),
  overflow: "auto",
}));

export const Footer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  padding: theme.spacing(1),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

export const Panel = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  padding: theme.spacing(1),
  gap: theme.spacing(1),
  background: theme.palette.grey[50],
  borderRadius: theme.spacing(1),
  fontSize: 14,
}));
