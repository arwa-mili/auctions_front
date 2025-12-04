import { styled, Paper as MuiPaper } from "@mui/material";

export const Paper = styled(MuiPaper)(({ theme }) => ({
  borderRadius: theme.spacing(1.5),
  overflow: "unset",
}));

export const Header = styled("div")<{ headerWithBorder?: boolean }>(
  ({ theme, headerWithBorder }) => ({
    padding: theme.spacing(2),
    justifyContent: "space-between",
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    borderBottom: headerWithBorder
      ? `1px solid ${theme.palette.divider}`
      : undefined,
  })
);

export const Content = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(0, 2, 2, 2),
}));
