import { styled, Box, IconButton as MuiIconButton } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 2),
  height: 50,
}));

export const Content = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
}));

export const IconButtonChevron = styled(MuiIconButton)<{
  left?: number;
  right?: number;
}>(({ left, right }) => ({
  position: "absolute",
  top: 8,
  left,
  right,
}));

export const IconButton = styled(MuiIconButton)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[50]}`,
  borderRadius: theme.spacing(1),
}));
