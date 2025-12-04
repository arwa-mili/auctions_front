import { styled, Box } from "@mui/material";

export const MainContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  height: "100vh",
  position: "relative",
  overflow: "hidden",
}));

export const Content = styled("div")(
  ({ theme }) =>
    ({ sidebarOpen }: { sidebarOpen: boolean }) => ({
      display: "flex",
      position: "relative",
      flexDirection: "column",
      maxWidth: `calc(100vw - ${sidebarOpen ? 260 : 75}px)`,
      height: "100%",
      background: theme.palette.grey[50],
      flex: 1,
      transition: "all 0.4s",
      padding: theme.spacing(0),
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(0, 0, 0, 9.5),
        maxWidth: "100vw",
      },
    })
);
export const OutletContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  flex: 1,
  overflow: "auto",
}));
