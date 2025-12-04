import {
  alpha,
  IconButton as MuiIconButton,
  styled,
  Typography,
} from "@mui/material";

export const Placeholder = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.text.secondary, 0.4),
  fontWeight: 400,
  fontSize: 16,
}));

export const IconButton = styled(MuiIconButton)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  marginRight: theme.spacing(1),
}));
