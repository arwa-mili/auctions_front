import { PaletteOptions } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

export const getTypographyOverrides = (
  palette?: PaletteOptions
): TypographyOptions => {
  return {
    fontFamily: `Inter Tight, Roboto, sans-serif`,

    button: {
      textTransform: "none",
    },
  };
};
