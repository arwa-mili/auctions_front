import { Box, Button as MuiButton, styled } from "@mui/material";

export const Container = styled(Box)<{
  bordercolor?: string;
  count?: number;
  size?: "small" | "medium" | "large";
}>(({ theme, bordercolor, count, size }) => {
  const template = new Array(count).fill("1fr").join(" ");
  let padding = theme.spacing(0.5);
  if (size === "small") {
    padding = theme.spacing("3px", 0.5);
  } else if (size === "large") {
    padding = theme.spacing(0.5);
  }
  return {
    position: "relative",
    display: "grid",
    gridTemplateColumns: template,
    border: `1px solid ${bordercolor || "rgba(0, 0, 0, 0.23)"}`,
    padding,
    borderRadius: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      alignSelf: "initial",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr 1fr",
    },
  };
});

export const Button = styled(MuiButton)<{
  selected?: boolean;
  color?: "primary" | "secondary";
  textcolor?: string;
  minwidth?: string | number;
}>(({
  theme,
  size,
  selected,
  color = "primary",
  textcolor,
  children,
  minwidth,
}) => {
  let minHeight = 42;
  if (size === "small") {
    minHeight = 36;
  } else if (size === "large") {
    minHeight = 48;
  }
  let styleStartIcon = {};
  if (!children) {
    styleStartIcon = {
      "& .MuiButton-startIcon": {
        margin: 0,
      },
    };
  }
  return {
    color: selected
      ? theme.palette[color].contrastText
      : textcolor || theme.palette.grey[600],
    fontWeight: "600",
    borderRadius: theme.spacing(0.5),
    zIndex: 2,
    textTransform: "none",
    minHeight,
    minWidth: minwidth || minHeight,
    whiteSpace: "nowrap",
    fontSize: 14,
    ...styleStartIcon,
  };
});

export const Selector = styled("div")<{
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}>(({ theme, color = "primary", size }) => {
  let height = 42;
  if (size === "small") {
    height = 36;
  } else if (size === "large") {
    height = 48;
  }
  return {
    position: "absolute",
    top: 0,
    left: 0,
    height: height,
    width: "100%",
    borderRadius: theme.spacing(0.5),
    transition: "all ease-in .2s",
    zIndex: 1,
    background: theme.palette[color].main,
  };
});
