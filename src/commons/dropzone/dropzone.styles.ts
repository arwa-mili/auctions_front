import { alpha, styled } from "@mui/material/styles";

export const DropzoneWrapper = styled("div")<{
  isDragActive?: boolean;
  isError?: boolean;
}>(({ theme, isDragActive, isError }) => ({
  width: 124,
  height: 124,
  borderRadius: "50%",
  border: isError
    ? `1px solid ${theme.palette.error.main}`
    : `1px dashed ${theme.palette.divider}`,
  opacity: isDragActive ? 0.6 : 1,
  zIndex: 0,
  display: "flex",
  overflow: "hidden",
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  "& > *": { width: "100%", height: "100%" },
  "&:hover": {
    cursor: "pointer",
    "& .mask": {
      display: "flex",
    },
  },
}));

export const PlaceholderWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.main,
  zIndex: 9,
  backgroundColor: theme.palette.background.paper,
  transition: theme.transitions.create("opacity", {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.2),
    color: theme.palette.background.paper,
  },
}));

export const Mask = styled("div")(({ theme }) => ({
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
