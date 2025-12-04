import { Components } from "@mui/material";
import { Svgs } from "../svgs";

export const getMuiSelectOverrides = (): Pick<Components, "MuiSelect"> => {
  return {
    MuiSelect: {
      styleOverrides: {
        root: ({ theme }: any) => ({
          borderRadius: theme.spacing(1),
          background: theme.palette.background.paper,
        }),
        select: ({ theme, ownerState }: any) => ({
          color: theme.palette.text.primary,
          fontWeight: "400",
          fontSize: 16,
          "&::placeholder": {
            color: theme.palette.text.secondary,
            fontSize: 16,
          },
        }),
      },
      defaultProps: {
        IconComponent: (params) => <Svgs.IconChevronDown {...params} />,
      },
    },
  };
};
