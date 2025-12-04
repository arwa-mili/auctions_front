import { styled } from "@mui/material";

export const Container = styled("div")<{
  bordered?: boolean;
  bgColor?: string;
}>(({ theme, bordered, bgColor }) => ({
  display: "flex",
  flexDirection: "row",
  flex: 1,
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  borderBottom: bordered ? `1px solid ${theme.palette.divider}` : undefined,
  background: bgColor,
}));
