import { styled, ListItemText, Stack, IconButton } from "@mui/material";

export const ListItemTextActions = styled(ListItemText)<{ color?: string }>(
  ({ theme, color }) => ({
    "& .MuiListItemText-primary": {
      fontWeight: 500,
      fontSize: 14,
      color: color || theme.palette.grey[700],
    },
  })
);

export const Row = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(1.5),
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));

export const IconButtonBadge = styled(IconButton)<{ isexist?: string }>(
  ({ theme, isexist }) => ({
    borderRadius: theme.spacing(1),
    background:
      isexist === "true" ? theme.palette.primary.main : theme.palette.grey[50],
    border:
      isexist === "true"
        ? `1px solid ${theme.palette.primary.main}`
        : `1px solid ${theme.palette.divider}`,
    "& path": {
      stroke:
        isexist === "true"
          ? theme.palette.primary.contrastText
          : theme.palette.grey[300],
    },
    "&:hover": {
      background: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`,
      "& path": {
        stroke: theme.palette.common.white,
      },
    },
  })
);
