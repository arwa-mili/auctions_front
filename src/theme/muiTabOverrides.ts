import { Components } from "@mui/material";

export const getMuiTabOverrides = (): Pick<Components, "MuiTab"> => {
  return {
    MuiTab: {
      styleOverrides: {
        root: ({ theme }: any) => ({
          fontWeight: "600",
          // color: theme.palette.text.primary,
          // borderRadius: theme.spacing(1),
          // "&.Mui-selected": {
          //   background: theme.palette.primary.main,
          //   color: theme.palette.primary.contrastText,
          // },
        }),
      },
    },
  };
};

export const getMuiTabsOverrides = (): Pick<Components, "MuiTabs"> => {
  return {
    MuiTabs: {
      styleOverrides: {
        root: ({ theme }: any) => ({
          // padding: theme.spacing(1),
          // background: theme.palette.grey[50],
        }),
      },
    },
  };
};
