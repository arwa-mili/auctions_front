import { ButtonBase, lighten, styled } from "@mui/material";

export const Container = styled("div")<{ bgColor?: string }>(
  ({ theme, bgColor }) => ({
    borderRadius: theme.spacing(1),
    // height: 43,
    display: "flex",
    border: `1px solid ${theme.palette.grey[300]}`,
    background: bgColor,
  })
);

export const ContainerIcon = styled(ButtonBase)<{ size?: "small" | "medium" }>(
  ({ theme, size }) => ({
    width: size === "small" ? 30 : 36,
    height: size === "small" ? 30 : 36,
    margin: size === "small" ? 2 : theme.spacing(0.5),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      background: lighten(theme.palette.primary.main, 0.8),
      borderRadius: theme.spacing(1),
    },
  })
);

export const Content = styled("div")<{ size?: "small" | "medium" }>(
  ({ theme, size }) => ({
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minWidth: size === "small" ? 30 : 46,
    padding: size === "small" ? theme.spacing(0, 1) : theme.spacing(0, 2),
  })
);
