import { Components } from "@mui/material";

export const getMuiTooltipOverrides = (): Pick<Components, "MuiTooltip"> => {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: ({ theme }: any) => ({
          backgroundColor: theme.palette.grey[900],
        }),
        arrow: ({ theme }: any) => ({
          "::before": {
            backgroundColor: theme.palette.grey[900],
          },
        }),
      },
    },
  };
};
