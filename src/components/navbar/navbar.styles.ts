import { Stack, styled } from "@mui/material";

export const RootStyle = styled(Stack)<{ background?: string }>(
  ({ theme, background }) => ({
    backgroundColor: background || theme.palette.background.paper,
    position: "sticky",
    top: 0,
    zIndex: 8,
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
    padding: theme.spacing(2, 4),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      alignItems: "stretch",
      gap: theme.spacing(3),
    },
  })
);

export const IconsContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(1),
}));
