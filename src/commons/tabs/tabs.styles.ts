import { Box, Tab as MuiTab, styled } from "@mui/material";

export const ContainerHorizontal = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  background: theme.palette.background.paper,
}));

export const ContainerVertical = styled(Box)(({ theme }) => ({
  display: "flex",
  background: theme.palette.background.paper,
  height: "100%",
}));

export const Tab = styled(MuiTab)<{
  size?: "small" | "medium";
  orientation: "vertical" | "horizontal";
}>(({ theme, size, orientation }) => {
  if (orientation === "vertical") {
    return {
      minHeight: size === "small" ? 48 : 62,
      justifyContent: "start",
      margin: theme.spacing(0.5),
      gap: theme.spacing(1),
      borderRadius: theme.spacing(1),
      "&.Mui-selected": {
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
    };
  }
  return {
    minHeight: size === "small" ? 48 : 62,
  };
});
