import { styled, Box, IconButton as MuiIconButton } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  height: 50,
  padding: theme.spacing(0, 2),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const IconButton = styled(MuiIconButton)<{
  left?: number;
  right?: number;
}>(({ left, right }) => ({
  position: "absolute",
  top: 8,
  left,
  right,
}));
