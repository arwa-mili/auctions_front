import { styled, OutlinedInput as MuiOutlinedInput } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  "& .show-more-anchor": {
    color: theme.palette.grey[400],
    cursor: "pointer",
  },
  "& .show-more": {
    fontSize: 14,
    fontWeight: 400,
    color: theme.palette.text.secondary,
  },
}));

export const OutlinedInput = styled(MuiOutlinedInput)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  height: 40,
  transition: "all 0.3s",
  minWidth: 260,
  "& .MuiOutlinedInput-input": {
    fontSize: 14,
  },
  backgroundColor: `${theme.palette.background.paper} !important`,
  "&:hover": {
    backgroundColor: `${theme.palette.background.paper} !important`,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.divider,
  },
}));

export const ContainerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "start",
  },
}));

export const Left = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flex: 1,
  gap: theme.spacing(2),
}));

export const Right = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(1),
}));

export const ContainerBottom = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2),
  gap: theme.spacing(1),
  background: theme.palette.grey[50],
  borderRadius: theme.spacing(1),
  border: `1px solid ${theme.palette.divider}`,
}));

export const Footer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "end",
  gap: theme.spacing(1),
  height: "100%",
  marginTop: "12px",
}));
