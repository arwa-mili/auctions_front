import { styled, Box, Menu as MuiMenu } from "@mui/material";

export const ContainerButton = styled(Box)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.grey[200]}`,
}));

export const Menu = styled(MuiMenu)<{ width?: string | number }>(
  ({ theme, width }) => ({
    "& .MuiPaper-root": {
      marginTop: theme.spacing(1),
      "& .MuiMenu-list": {
        maxHeight: 400,
        width,
      },
      "& .MuiMenuItem-root": {
        padding: theme.spacing(0.5),
      },
      "& .MuiListItemText-primary": {
        fontSize: 14,
      },
      "& .MuiListItemText-secondary": {
        fontSize: 12,
        display: "block",
        overflow: "hidden",
        textOverflow: "ellipsis",
        WebkitLineClamp: "1",
        WebkitBoxOrient: "vertical",
        width: 200,
      },
    },
  })
);

export const MenuList = styled("div")(({}) => ({
  overflow: "auto",
}));
