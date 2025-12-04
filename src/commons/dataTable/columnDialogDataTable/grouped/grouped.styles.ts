import {
  Box,
  FormControlLabel as MuiFormControlLabel,
  styled,
} from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
}));

export const Column = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
}));

export const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  fontSize: 14,
  lineHeight: "20px",
  fontWeight: 500,
  color: theme.palette.grey[700],
  "& .Mui-disabled": {
    color: `${theme.palette.grey[700]} !important`,
  },
}));
