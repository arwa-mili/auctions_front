import { ButtonBase, styled } from "@mui/material";

export const Container = styled(ButtonBase)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  width: "100%",
  margin: 0,
}));
