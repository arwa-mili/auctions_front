import { styled, Dialog as MuiDialog } from "@mui/material";
import { PartialDialogProps } from "./modalFullScreen.types";

export const Dialog = styled(MuiDialog)<PartialDialogProps>(
  ({ theme, padding, radius, height, width }) => ({
    "& .MuiDialog-paper": {
      height,
      minWidth: width,
      transition: "all 0.3s",
      borderRadius: theme.spacing(radius || 0),
      padding: theme.spacing(padding || 0),
    },
  })
);
