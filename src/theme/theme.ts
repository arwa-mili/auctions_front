import { PaletteMode } from "@mui/material";
import { createTheme, PaletteOptions } from "@mui/material/styles";
import { getMuiAutocompleteOverrides } from "./muiAutocompleteOverrides";
import { getMuiButtonOverrides } from "./muiButtonOverrides";
import { getMuiCheckboxOverrides } from "./muiCheckboxOverrides";
import { getMuiFilledInputOverrides } from "./muiFilledInputOverrides";
import { getMuiFormLabelOverrides } from "./muiFormLabelOverrides";
import { getMuiIconButtonOverrides } from "./muiIconButtonOverrides";
import { getMuiInputBaseOverrides } from "./muiInputBaseOverrides";
import { getMuiInputLabelOverrides } from "./muiInputLabelOverrides";
import { getMuiOutlinedInputOverrides } from "./muiOutlinedInputOverrides";
import { getMuiSelectOverrides } from "./muiSelectOverrides";
import {
  getMuiTableBodyOverrides,
  getMuiTableCellOverrides,
  getMuiTableContainerOverrides,
  getMuiTableHeadOverrides,
  getMuiTableOverrides,
  getMuiTablePaginationOverrides,
  getMuiTableRowOverrides,
  getMuiTableSortLabelOverrides,
} from "./muiTableOverrides";
import { getMuiTabOverrides, getMuiTabsOverrides } from "./muiTabOverrides";
import { getMuiTooltipOverrides } from "./muiTooltipOverrides";
import { getPalettesOverrides } from "./palettesOverrides";
import { getTypographyOverrides } from "./typographyOverrides";

type GetThemeParams = {
  direction: "ltr" | "rtl";
  mode?: PaletteMode;
  palette?: PaletteOptions;
};
export const getTheme = ({ direction, mode, palette }: GetThemeParams) => {
  const paletteConfig = palette || getPalettesOverrides(mode);

  return createTheme({
    direction: direction,
    palette: paletteConfig,
    typography: getTypographyOverrides(palette),

    components: {
      ...getMuiInputLabelOverrides(),
      ...getMuiSelectOverrides(),
      ...getMuiFormLabelOverrides(),
      ...getMuiInputBaseOverrides(),
      ...getMuiFilledInputOverrides(),
      ...getMuiOutlinedInputOverrides(),
      ...getMuiAutocompleteOverrides(),
      ...getMuiCheckboxOverrides(),
      ...getMuiIconButtonOverrides(),
      ...getMuiButtonOverrides(),
      ...getMuiTooltipOverrides(),
      ...getMuiTabsOverrides(),
      ...getMuiTabOverrides(),
      ...getMuiTableContainerOverrides(),
      ...getMuiTableOverrides(),
      ...getMuiTableBodyOverrides(),
      ...getMuiTableHeadOverrides(),
      ...getMuiTableSortLabelOverrides(),
      ...getMuiTableRowOverrides(),
      ...getMuiTableCellOverrides(),
      ...getMuiTablePaginationOverrides(),
    },
  });
};

declare module "@mui/material/styles" {
  interface PaletteColor {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsSizeOverrides {
    "extra-small": true;
  }
  interface IconButtonPropsColorOverrides {
    standard: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    "extra-small": true;
  }
  interface ButtonPropsColorOverrides {
    standard: true;
  }
}
