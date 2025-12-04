import {
  Stack,
  styled,
  IconButton as MuiIconButton,
  alpha,
} from "@mui/material";

export const CardFooter = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderTop: `1px solid ${theme.palette.divider}`,
}));

export const Container = styled(Stack)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  border: `1px solid ${theme.palette.divider}`,
  justifyContent: "space-between",
  overflow: "hidden",
}));

export const Content = styled(Stack)(({ theme }) => ({
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  "&:hover": {
    ".mask": {
      display: "flex",
    },
  },
}));

export const Button = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  minHeight: 46,
  height: 46,
  cursor: "pointer",
  color: theme.palette.text.secondary,
  fontSize: 14,
  fontWeight: "500",
  flex: 1,
}));

export const Mask = styled("div")(({ theme }) => ({
  display: "none",
  justifyContent: "end",
  padding: theme.spacing(0.5),
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 99,
  backgroundColor: alpha(theme.palette.common.black, 0.6),
  transition: theme.transitions.create("opacity", {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
}));

export const IconButton = styled(MuiIconButton)(({ theme }) => ({
  background: "#00000050",
  borderRadius: "50%",
}));
