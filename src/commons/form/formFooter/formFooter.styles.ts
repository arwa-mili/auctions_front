import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 64,
  gap: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderTop: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(2),
  },
}));
