import { Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

export const Container = styled("div")(({ theme }) => ({
  borderRadius: theme.spacing(1),
  position: "relative",
  overflow: "hidden",
  "&:hover": {
    "& .mask": {
      display: "flex",
    },
  },
  width: "fit-content",
}));

export const Mask = styled("div")(({ theme }) => ({
  display: "none",
  flexDirection: "column",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
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

export const Name = styled(Typography)(({ theme }) => ({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 1,
  overflow: "hidden",
  color: theme.palette.grey[700],
  fontSize: 14,
  fontWeight: 500,
}));
