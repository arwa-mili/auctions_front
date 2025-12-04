import { Stack, styled } from "@mui/material";

export const RootStyle = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(1.5),
  flexDirection: "column",
  gap: theme.spacing(0.5),
  width: 200,
}));

export const ButtonsContainer = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(0.5),
  paddingBlock: theme.spacing(0.5),
  button: {
    justifyContent: "start",
  },
}));

export const UserInfoContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  gap: theme.spacing(1),
  paddingBlock: theme.spacing(0.5),
  alignItems: "center",
}));
