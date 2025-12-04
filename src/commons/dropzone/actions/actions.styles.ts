import { alpha, styled } from "@mui/material/styles";

export const Container = styled("div")(({ theme }) => ({
  display: "none",
  flexDirection: "column",
  position: "absolute",
  alignItems: "end",
  justifyContent: "end",
  padding: theme.spacing(1),
  zIndex: 12,
  backgroundColor: alpha(theme.palette.common.black, 0.6),
  transition: theme.transitions.create("opacity", {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
}));

export const ContainerDelete = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  position: "absolute",
  top: theme.spacing(0.5),
  alignItems: "center",
}));
