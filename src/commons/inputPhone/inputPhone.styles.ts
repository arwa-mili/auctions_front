import { Box, styled } from "@mui/material";

export const Mask = styled(Box)(() => ({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: 0,
  height: 44,
  width: 44,
  borderRadius: "0 8px 8px 0",
  right: 0,
  zIndex: 99,
}));
