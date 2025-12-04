import {
  Grid,
  FormControlLabel as MuiFormControlLabel,
  styled,
} from "@mui/material";

export const Container = styled(Grid)`
  margin: 0;
  width: 100%;
  overflow-y: auto;
`;
export const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  fontSize: 14,
  lineHeight: "20px",
  fontWeight: 500,
  color: theme.palette.grey[700],
  "& .Mui-disabled": {
    color: `${theme.palette.grey[700]} !important`,
  },
}));
