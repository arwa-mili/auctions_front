import { Components } from "@mui/material";

export const getMuiFormLabelOverrides = (): Pick<
  Components,
  "MuiFormLabel"
> => {
  return {
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }: any) => ({
          color: theme.palette.grey[600],
          fontWeight: "500",
          "&.Mui-focused": {
            color: theme.palette.grey[600],
          },
        }),
      },
    },
  };
};
