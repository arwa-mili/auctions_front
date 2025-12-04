import { Components } from "@mui/material";

export const getMuiInputBaseOverrides = (): Pick<
  Components,
  "MuiInputBase"
> => {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }: any) => ({}),
        input: ({ theme }: any) => ({
          color: theme.palette.text.primary,
          fontWeight: "400",
          fontSize: 16,
          "&::placeholder": {
            color: theme.palette.text.secondary,
            fontSize: 16,
          },
        }),
        inputSizeSmall: ({ theme }: any) => ({}),
      },
    },
  };
};
