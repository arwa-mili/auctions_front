import { Stack, styled } from "@mui/material";

export const Container = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  position: "sticky",
  bottom: 0,
  borderTop: `1px solid ${theme.palette.grey[200]}`,
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: theme.spacing(1, 2),
  height: 38,
}));

export const IconsContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  gap: theme.spacing(0.25),
  button: {
    width: 20,
    height: 20,
    minWidth: 20,
    minHeight: 20,
    padding: 0,
  },
}));
