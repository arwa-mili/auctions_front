import { Components } from "@mui/material";

export const getMuiFilledInputOverrides = (): Pick<
  Components,
  "MuiFilledInput"
> => {
  return {
    MuiFilledInput: {
      styleOverrides: {},
    },
  };
};
