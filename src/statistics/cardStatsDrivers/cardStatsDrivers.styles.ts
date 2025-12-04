import { Paper as MuiPaper, styled } from "@mui/material";

export const Paper = styled(MuiPaper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: theme.spacing(1.5),
  height: "100%",
}));

export const Header = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: theme.spacing(0, 2),
  gap: theme.spacing(1),
  borderBottom: `1px solid ${theme.palette.divider}`,
  minHeight: 48,
}));

export const Content = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2),
  gap: theme.spacing(2),
}));

export const BarStyle = styled("div")(
  ({ theme }) =>
    ({
      orientation,
      backgroundColor,
      percentage,
      total,
    }: {
      orientation: "vertical" | "horizontal";
      backgroundColor: string;
      percentage?: number | string;
      total: number;
    }) => ({
      height:
        orientation === "vertical"
          ? `${percentage || 100}%`
          : `calc(100% / ${total})`,
      minHeight: orientation === "vertical" ? 70 : undefined,
      minWidth: orientation === "vertical" ? undefined : 190,
      width:
        orientation === "horizontal"
          ? `${percentage || 100}%`
          : `calc(100% / ${total})`,
      padding: theme.spacing(1),
      gap: theme.spacing(0.5),
      borderRadius: theme.spacing(0.5),
      backgroundColor,
      color: theme.palette.getContrastText(backgroundColor),
      flexDirection: orientation === "vertical" ? "column" : "row",
      justifyContent: "space-between",
      alignItems: "center",
      flex: 1,
      overflow: "hidden",
      display: "flex",
    })
);
