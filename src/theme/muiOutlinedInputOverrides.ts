import { Components } from "@mui/material";

export const getMuiOutlinedInputOverrides = (): Pick<
  Components,
  "MuiOutlinedInput"
> => {
  return {
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }: any) => ({
          borderRadius: theme.spacing(1),
          background: theme.palette.background.paper,
        }),
        input: ({ theme, ownerState }: any) => ({
          color: theme.palette.text.primary,
          fontWeight: "400",
          fontSize: 16,
          "&::placeholder": {
            color: theme.palette.text.secondary,
            fontSize: 16,
          },
          padding: ownerState.size === "small" ? "10.5px 14px" : "16.5px 14px",
        }),
        inputMultiline: ({ theme, ownerState }: any) => ({ padding: "0px" }),
      },
    },
  };
};
