import { Components } from "@mui/material";

export const getMuiInputLabelOverrides = (): Pick<
  Components,
  "MuiInputLabel"
> => {
  return {
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }: any) => ({
          fontSize: 14,
          fontWeight: "500",
          color: theme.palette.grey[700],
        }),
      },
    },
  };
};
