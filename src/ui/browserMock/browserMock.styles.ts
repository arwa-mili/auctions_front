import { styled } from "@mui/material";

export const Container = styled("div")<{ mode?: "LIGHT" | "DARK" }>(
  ({ theme, mode }) => ({
    display: "flex",
    flexDirection: "column",
    border: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 0, 0, 0),
    borderRadius: theme.spacing(2),
    overflow: "hidden",
    background: mode === "DARK" ? "#1f2020" : theme.palette.common.white,
  })
);

export const Header = styled("div")<{ mode?: "LIGHT" | "DARK" }>(
  ({ theme, mode }) => ({
    display: "flex",
    flexDirection: "row",
    background: mode === "DARK" ? "#1f2020" : theme.palette.common.white,
  })
);

export const HeaderLeft = styled("div")<{ mode?: "LIGHT" | "DARK" }>(
  ({ theme, mode }) => ({
    position: "relative",
    minWidth: 100,
    background: mode === "DARK" ? "#3c3c3c" : theme.palette.background.default,
  })
);

export const Mask = styled("span")<{ mode?: "LIGHT" | "DARK" }>(
  ({ theme, mode }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(1),
    padding: theme.spacing(1, 2),
    position: "absolute",
    zIndex: 2,
    right: 0,
    bottom: 0,
    left: 0,
    top: 0,
    background: mode === "DARK" ? "#1f2020" : theme.palette.common.white,
    borderRadius: theme.spacing(0, 0, 2, 0),
  })
);

export const HeaderRight = styled("div")<{ mode?: "LIGHT" | "DARK" }>(
  ({ theme, mode }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: theme.spacing(2, 2, 0, 0),
    background: mode === "DARK" ? "#3c3c3c" : theme.palette.background.default,
    padding: theme.spacing(1, 2),
    gap: theme.spacing(1),
    minWidth: 240,
    maxWidth: 280,
  })
);

export const SubHeader = styled("div")<{ mode?: "LIGHT" | "DARK" }>(
  ({ theme, mode }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    background: mode === "DARK" ? "#3c3c3c" : theme.palette.background.default,
    gap: theme.spacing(1),
    padding: theme.spacing(1, 2, 1, 1),
  })
);

export const SearchBar = styled("div")<{ mode?: "LIGHT" | "DARK" }>(
  ({ theme, mode }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    background: mode === "DARK" ? "#1f2020" : theme.palette.common.white,
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1.5, 2),
    gap: theme.spacing(1),
  })
);

export const Circle = styled("span")<{ background?: string }>(
  ({ background }) => ({
    width: 16,
    height: 16,
    borderRadius: "50%",
    background,
  })
);

export const Content = styled("div")<{ mode?: "LIGHT" | "DARK" }>(
  ({ theme, mode }) => ({
    display: "flex",
    flexDirection: "column",
    flex: 1,
    background: mode === "DARK" ? "#1f2020" : theme.palette.common.white,
    gap: theme.spacing(1),
  })
);
