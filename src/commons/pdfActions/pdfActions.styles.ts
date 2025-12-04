import { Stack, styled } from "@mui/material";

export const CardFooter = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderTop: `1px solid ${theme.palette.divider}`,
  button: {
    width: "50%",
    borderRadius: 0,
    minHeight: 46,
    height: 46,
    color: theme.palette.text.secondary,
  },
}));

export const Iframe = styled("iframe")(() => ({
  border: `none`,
  overflow: "hidden",
  margin: 0,
}));

export const Container = styled(Stack)(({ theme }) => ({
  width: 340,
  height: 360,
  borderRadius: theme.spacing(1),
  border: `1px solid ${theme.palette.divider}`,
  justifyContent: "space-between",
  overflow: "hidden",
}));
