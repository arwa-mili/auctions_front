import { styled, Chip, PaletteColor } from "@mui/material";

export const MuiChip = styled(Chip)<{
  bgcolor?: string | "transparent";
  labelcolor?: string;
  labelfontsize?: number;
}>(({ theme, labelfontsize, labelcolor, bgcolor }) => {
  let palette: PaletteColor | null = null;
  if (bgcolor === "transparent") {
    palette = {
      dark: "transparent",
      main: "transparent",
      light: "transparent",
      contrastText: "inherit",
    };
  } else if (bgcolor) {
    palette = theme.palette.augmentColor({ color: { main: bgcolor } });
  }
  return {
    background: bgcolor,
    color: labelcolor || palette?.contrastText,
    fontSize: labelfontsize,
    fontWeight: 500,
    "&:hover": {
      background: palette?.dark,
    },
    pointerEvents: "none",
  };
});
