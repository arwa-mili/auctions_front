import { styled } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

export const MuiButton = styled(LoadingButton)<{ bgcolor?: string }>(
  ({ theme, bgcolor }) => ({
    borderRadius: theme.spacing(1),
    background: bgcolor,
    "&:hover": {
      background: bgcolor,
    },
  })
);
