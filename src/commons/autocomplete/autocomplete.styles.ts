import { styled, IconButton as MuiIconButton } from "@mui/material";

export const IconButton = styled(MuiIconButton)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  marginRight: theme.spacing(1),
}));
