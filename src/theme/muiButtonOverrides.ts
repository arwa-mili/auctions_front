import { alpha, Components } from "@mui/material";

export const getMuiButtonOverrides = (): Pick<Components, "MuiButton"> => {
  return {
    MuiButton: {
      styleOverrides: {
        root: () => ({
          boxShadow: "none",
          ":hover": {
            boxShadow: "none",
          },
        }),
      },
      variants: [
        {
          props: { size: "extra-small" },
          style: () => ({}),
        },
        {
          props: { color: "standard" },
          style: ({ theme }: any) => ({
            background: theme.palette?.background?.paper,
            border: `1px solid ${theme.palette?.divider}`,
            color: theme.palette?.text?.primary,
            "&:hover": {
              background: `${theme.palette?.background?.paper}`,
              border: `1px solid ${theme.palette?.divider}`,
              color: theme.palette?.text?.primary,
            },
            "&:disabled": {
              background: alpha(theme.palette?.background?.paper, 0.2),
              border: `1px solid ${theme.palette?.divider}`,
              color: theme.palette?.text?.secondary,
            },
          }),
        },
      ],
    },
  };
};
