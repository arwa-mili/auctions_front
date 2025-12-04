import { Components } from "@mui/material";
import { Svgs } from "../svgs";

export const getMuiAutocompleteOverrides = (): Pick<
  Components,
  "MuiAutocomplete"
> => {
  return {
    MuiAutocomplete: {
      defaultProps: {
        popupIcon: <Svgs.IconChevronDown fontSize="medium" />,
      },
      styleOverrides: {
        popupIndicator: ({ ownerState }) => ({
          minWidth: ownerState.size === "small" ? 30 : undefined,
          minHeight: ownerState.size === "small" ? 30 : undefined,
        }),
        clearIndicator: ({ ownerState }) => ({
          minWidth: ownerState.size === "small" ? 30 : undefined,
          minHeight: ownerState.size === "small" ? 30 : undefined,
        }),
        inputRoot: ({ theme }: any) => ({
          "&.MuiInputBase-sizeSmall": {
            paddingTop: "8px",
            paddingBottom: "8px",
          },
        }),
      },
    },
  };
};
