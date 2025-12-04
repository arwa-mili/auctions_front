import { Components } from "@mui/material";

export const getMuiCheckboxOverrides = (): Pick<Components, "MuiCheckbox"> => {
  return {
    MuiCheckbox: {
      styleOverrides: {
        root: () => ({}),
      },
    },
  };
};
