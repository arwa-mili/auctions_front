import { styled, IconButton, alpha } from "@mui/material";

export const MuiIconButton = styled(IconButton)<{
  rounded?: string;
  width?: string | number;
  height?: string | number;
  minwidth?: string | number;
  minheight?: string | number;
  bgcolor?: string;
  bordercolor?: string;
  border?: string;
  radius?: number | string;
}>(({
  theme,
  rounded,
  width,
  height,
  minwidth,
  minheight,
  bgcolor,
  border,
  radius,
  bordercolor,
}) => {
  const paletteBorderColor = bordercolor
    ? theme.palette.augmentColor({
        color: { main: bordercolor },
      })
    : undefined;
  return {
    borderRadius: radius || (rounded === "true" ? "50%" : theme.spacing(1)),
    border,
    borderColor: paletteBorderColor?.main
      ? alpha(paletteBorderColor?.main, 0.5)
      : undefined,
    width,
    height,
    minWidth: minwidth,
    minHeight: minheight,
    background: bgcolor,
    "&:hover": {
      background: bgcolor,
      borderColor: paletteBorderColor?.dark,
    },
    transition: "all 0.3s",
    color: bordercolor,
    "& .MuiTouchRipple-root .MuiTouchRipple-child": {
      borderRadius: radius || (rounded === "true" ? "50%" : theme.spacing(1)),
    },
  };
});
