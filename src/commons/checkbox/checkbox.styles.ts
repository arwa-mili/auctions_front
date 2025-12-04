import { styled, FormControlLabel as MuiFormControlLabel } from "@mui/material";

export const FormControlLabel = styled(MuiFormControlLabel)<{
  fontWeight?: string;
}>(({ fontWeight }) => ({
  "& .MuiFormControlLabel-label": {
    fontWeight: fontWeight,
    fontSize: 14,
  },
}));
