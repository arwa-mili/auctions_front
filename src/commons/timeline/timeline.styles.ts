import { styled } from "@mui/material";

const SIZE = 16;

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  position: "relative",
}));

export const Divider = styled("span")(({ theme }) => ({
  width: 1,
  position: "absolute",
  left: SIZE,
  background: theme.palette.divider,
  top: SIZE * 2,
  bottom: SIZE * 2,
}));

export const Mask = styled("span")(({ theme }) => ({
  height: "100%",
  width: 2,
  position: "absolute",
  left: SIZE - 1,
  background: theme.palette.background.paper,
  top: 0,
  bottom: 0,
  zIndex: 2,
}));

export const Step = styled("span")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: SIZE * 2,
  height: SIZE * 2,
  minWidth: SIZE * 2,
  borderRadius: "50%",
  zIndex: 99,
  background: theme.palette.background.paper,
}));

export const Row = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(2),
  position: "relative",
}));

export const Circle = styled("span")(({ theme }) => ({
  width: 6,
  height: 6,
  background: theme.palette.grey[400],
  transform: "rotate(45deg)",
}));
