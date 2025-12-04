import { alpha, styled } from "@mui/material";
import { PickersDay } from "@mui/x-date-pickers";

export const MuiPickersDay = styled(PickersDay)<any>(({ theme }) => ({
  fontSize: 14,
  fontWeight: 400,
  color: theme.palette.grey[700],
  borderRadius: "4px !important",
  "&.Mui-selected": {
    background: "transparent !important",
    color: theme.palette.grey[700],
    "&:hover": {
      background: "transparent !important",
      color: theme.palette.grey[700],
    },
  },
}));

export const Mask = styled("span")<{ selected?: boolean; today?: boolean }>(
  ({ theme, today }) => ({
    width: 30,
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    background: today ? alpha(theme.palette.primary.main, 0.1) : undefined,
    "&:hover": {
      background: theme.palette.primary[100],
    },
    // background: selected ? theme.palette.primary[100] : "transparent",
    position: "relative",
  })
);

export const Badge = styled("span")(({ theme }) => ({
  position: "absolute",
  top: -5,
  right: -7,
  minWidth: 18,
  height: 18,
  borderRadius: 8,
  background: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 10,
  fontWeight: "500",
  color: theme.palette.primary.contrastText,
  zIndex: 999,
}));
