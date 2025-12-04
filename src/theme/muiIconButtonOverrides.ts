import { Components, alpha } from "@mui/material";

export const getMuiIconButtonOverrides = (): Pick<
  Components,
  "MuiIconButton"
> => {
  return {
    MuiIconButton: {
      variants: [
        {
          props: { size: "extra-small" },
          style: {
            minWidth: 36,
            minHeight: 36,
            height: 36,
            width: 36,
            padding: 0,
          },
        },
        {
          props: { color: "standard" },
          style: ({ theme }: any) => ({
            background: theme.palette?.background?.paper,
            border: `1px solid ${theme.palette?.divider}`,
            color: theme.palette?.text?.primary,
            padding: 0,
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
      styleOverrides: {
        sizeSmall: {
          minWidth: 40,
          minHeight: 40,
        },
        sizeMedium: {
          minWidth: 44,
          minHeight: 44,
        },
        sizeLarge: {
          minWidth: 48,
          minHeight: 48,
        },
        colorPrimary: ({ theme }: any) => ({
          background: theme.palette?.primary?.[700],
          border: `1px solid ${theme.palette?.primary?.[700]}`,
          color: theme.palette?.primary?.contrastText,
          "&:hover": {
            background: `${theme.palette?.primary?.dark}`,
            border: `1px solid ${theme.palette?.primary?.dark}`,
            color: theme.palette?.primary?.contrastText,
          },
          "&:disabled": {
            background: theme.palette?.primary?.[100],
            border: `1px solid ${theme.palette?.primary?.[100]}`,
            color: theme.palette?.primary?.[50],
          },
        }),
        colorSecondary: ({ theme }: any) => ({
          background: theme.palette?.secondary?.[600],
          border: `1px solid ${theme.palette?.secondary?.[600]}`,
          color: theme.palette?.secondary?.contrastText,
          "&:hover": {
            background: `${theme.palette?.secondary?.dark}`,
            border: `1px solid ${theme.palette?.secondary?.dark}`,
            color: theme.palette?.secondary?.contrastText,
          },
          "&:disabled": {
            background: theme.palette?.secondary?.[100],
            border: `1px solid ${theme.palette?.secondary?.[100]}`,
            color: theme.palette?.secondary?.[50],
          },
        }),
        colorInfo: ({ theme }: any) => ({
          background: theme.palette?.info?.[600],
          border: `1px solid ${theme.palette?.info?.[600]}`,
          color: theme.palette?.info?.contrastText,
          "&:hover": {
            background: `${theme.palette?.info?.dark}`,
            border: `1px solid ${theme.palette?.info?.dark}`,
            color: theme.palette?.info?.contrastText,
          },
          "&:disabled": {
            background: theme.palette?.info?.[100],
            border: `1px solid ${theme.palette?.info?.[100]}`,
            color: theme.palette?.info?.[50],
          },
        }),
        colorSuccess: ({ theme }: any) => ({
          background: theme.palette?.success?.[600],
          border: `1px solid ${theme.palette?.success?.[600]}`,
          color: theme.palette?.success?.contrastText,
          "&:hover": {
            background: `${theme.palette?.success?.dark}`,
            border: `1px solid ${theme.palette?.success?.dark}`,
            color: theme.palette?.success?.contrastText,
          },
          "&:disabled": {
            background: theme.palette?.success?.[100],
            border: `1px solid ${theme.palette?.success?.[100]}`,
            color: theme.palette?.success?.[50],
          },
        }),
        colorWarning: ({ theme }: any) => ({
          background: theme.palette?.warning?.[600],
          border: `1px solid ${theme.palette?.warning?.[600]}`,
          color: theme.palette?.warning?.contrastText,
          "&:hover": {
            background: `${theme.palette?.warning?.dark}`,
            border: `1px solid ${theme.palette?.warning?.dark}`,
            color: theme.palette?.warning?.contrastText,
          },
          "&:disabled": {
            background: theme.palette?.warning?.[100],
            border: `1px solid ${theme.palette?.warning?.[100]}`,
            color: theme.palette?.warning?.[50],
          },
        }),
        colorError: ({ theme }: any) => ({
          background: theme.palette?.error?.[600],
          border: `1px solid ${theme.palette?.error?.[600]}`,
          color: theme.palette?.error?.contrastText,
          "&:hover": {
            background: `${theme.palette?.error?.dark}`,
            border: `1px solid ${theme.palette?.error?.dark}`,
            color: theme.palette?.error?.contrastText,
          },
          "&:disabled": {
            background: theme.palette?.error?.[100],
            border: `1px solid ${theme.palette?.error?.[100]}`,
            color: theme.palette?.error?.[50],
          },
        }),
      },
    },
  };
};
