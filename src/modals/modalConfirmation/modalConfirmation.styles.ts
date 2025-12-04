import { Box, Dialog as MuiDialog, Stack, styled } from "@mui/material";

export const ContainerIcon = styled(Box)`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  position: relative;
  & > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Dialog = styled(MuiDialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2),
    minWidth: 400,
    maxWidth: 500,
    [theme.breakpoints.down("sm")]: {
      minWidth: 300,
      maxWidth: "auto",
    },
  },
}));

export const Row = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flex: 1,
  gap: theme.spacing(2),
}));
