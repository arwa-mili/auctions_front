import { styled, Dialog as MuiDialog } from "@mui/material";

export const Dialog = styled(MuiDialog)<{
  width?: string | number;
  size?: "small" | "medium" | "large";
}>(({ theme, size, width }) => {
  let style = { width: width || "35vw" };
  if (size === "small") {
    style = {
      width: "35vw",
      [theme.breakpoints.down("xl")]: {
        width: "35vw",
      },
      [theme.breakpoints.down("lg")]: {
        width: "40vw",
      },
      [theme.breakpoints.down("md")]: {
        width: "50vw",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100vw",
      },
    };
  } else if (size === "medium") {
    style = {
      width: "50vw",
      [theme.breakpoints.down("xl")]: {
        width: "50vw",
      },
      [theme.breakpoints.down("lg")]: {
        width: "80vw",
      },
      [theme.breakpoints.down("md")]: {
        width: "80vw",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100vw",
      },
    };
  } else if (size === "large") {
    style = {
      width: "80vw",
      [theme.breakpoints.down("xl")]: {
        width: "80vw",
      },
      [theme.breakpoints.down("lg")]: {
        width: "100vw",
      },
      [theme.breakpoints.down("md")]: {
        width: "100vw",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100vw",
      },
    };
  }
  return {
    ...style,
    right: 0,
    left: "auto",
    dispaly: "flex",
    flexDirection: "column",
    transition: "all 0.5s",
  };
});
