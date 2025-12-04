import { IconButton, Stack } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

export const RootWrapper = styled("div")<{ isError?: boolean }>(
  ({ theme, isError }) => ({
    width: "100%",
    minHeight: 82,
    borderRadius: 12,
    backgroundColor: theme.palette.background.paper,
    border: isError
      ? `1px solid ${theme.palette.error.main}`
      : `1px dashed ${theme.palette.divider}`,
  })
);

export const DropzoneWrapper = styled("div")<{
  isDragActive?: boolean;
}>(({ isDragActive }) => ({
  opacity: isDragActive ? 0.6 : 1,
  zIndex: 0,
  padding: 16,
  width: "100%",
  minHeight: 82,
  height: "100%",
  outline: "none",
  display: "flex",
  gap: 16,
  flexDirection: "column",
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  "& > *": { width: "100%", height: "100%" },
  "&:hover": {
    cursor: "pointer",
    "& .placeholder": {
      zIndex: 9,
    },
  },
}));

export const FileContainer = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: 90,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.background.paper,
}));

export const Placeholder = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  gap: theme.spacing(1.5),
}));

export const RemoveIcon = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  borderRadius: "50%",
  padding: theme.spacing(0.5),
  top: 4,
  right: 4,
  zIndex: 9,
  width: 25,
  height: 25,
  minWidth: 25,
  minHeight: 25,
  backgroundColor: alpha(theme.palette.error[400] ?? "", 0.2),
  svg: {
    color: theme.palette.error.main,
  },
}));
