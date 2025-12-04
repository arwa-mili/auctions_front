import { IconButton, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const RootStyle = styled("div")(
  ({ theme }) =>
    ({ isOpen }: { isOpen?: boolean }) => ({
      zIndex: 10,
      position: "relative",
      height: "100%",
      overflow: "visible",
      width: isOpen ? 260 : 60,
      backgroundColor: theme.palette.secondary[800],
      transition: "width 0.4s",
      [theme.breakpoints.down(890)]: {
        position: "absolute",
      },
    })
);

export const Content = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  height: "100%",
  overflow: "hidden",
}));

export const LeftContent = styled("div")(
  ({ theme }) =>
    ({ isChildrenOpen }: { isChildrenOpen?: boolean }) => ({
      display: "flex",
      flexDirection: "column",
      width: isChildrenOpen ? 60 : "100%",
      minWidth: isChildrenOpen ? "unset" : "100%",
      justifyContent: "space-between",
      gap: theme.spacing(1.5),
      transition: "all 0.4s",
    })
);

export const RightContent = styled("div")(
  ({ theme }) =>
    ({ isOpen }: { isOpen?: boolean }) => ({
      width: isOpen ? 200 : 0,
      transition: "all 0.4s",
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.palette.secondary[700],
      padding: theme.spacing(4, 2),
      gap: theme.spacing(0.5),
    })
);

export const ItemsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: theme.spacing(0.5),
  padding: theme.spacing(2, 1.25),
}));

export const LogoContainer = styled("div")(
  ({ theme }) =>
    ({ isOpen }: { isOpen?: boolean }) => ({
      display: "flex",
      alignItem: "center",
      padding: theme.spacing(2),
      height: 70,
      justifyContent: isOpen ? "flex-start" : "center",
    })
);

export const Item = styled(Link)(
  ({ theme }) =>
    ({ isopen, isselected }: { isopen?: string; isselected?: string }) => ({
      display: "flex",
      position: "relative",
      flexDirection: "row",
      transition: "width 0.2s",
      gap: theme.spacing(1.5),
      padding: theme.spacing(1),
      overflow: "hidden",
      height: 40,
      maxHeight: 40,
      width: isopen === "true" ? "100%" : 40,
      alignItems: "flex-start",
      justifyContent: "flex-start",
      borderRadius: theme.spacing(0.75),
      textDecoration: "none",
      backgroundColor:
        isselected === "true" ? theme.palette.secondary[700] : "transparent",
      ".item-label": {
        display: isopen === "true" ? "block" : "none",
        fontSize: 16,
        textTransform: "capitalize",
        fontWeight: 600,
        color: theme.palette.grey[100],
      },
      ":hover": {
        backgroundColor: theme.palette.secondary[700],
      },
    })
);

export const SubItem = styled(Link)(
  ({ theme }) =>
    ({ isselected }: { isselected?: string }) => ({
      padding: theme.spacing(1, 1.5),
      height: 36,
      maxHeight: 36,
      textDecoration: "none",
      width: "100%",
      borderRadius: theme.spacing(0.75),
      overflow: "hidden",
      justifyContent: "flex-start",
      backgroundColor:
        isselected === "true" ? theme.palette.secondary[600] : "transparent",
      p: {
        fontSize: 14,
        fontWeight: 600,
        color: theme.palette.grey[50],
      },
      ":hover": {
        backgroundColor: theme.palette.secondary[600],
      },
    })
);

export const ExpandButton = styled(IconButton)(
  ({ theme }) =>
    ({
      isopen,
      ischildrenopen,
    }: {
      isopen?: string;
      ischildrenopen?: string;
    }) => ({
      border: `1.2px solid ${theme.palette.grey[50]}`,
      position: "absolute",
      backgroundColor:
        ischildrenopen === "true"
          ? theme.palette.secondary[700]
          : theme.palette.secondary[800],
      right: -14,
      top: 60,
      width: 28,
      height: 28,
      minWidth: 28,
      minHeight: 28,
      borderRadius: "50%",
      padding: 0,
      svg: {
        width: 20,
        height: 20,
        transition: "transform 0.4s ease",
        transform: isopen === "true" ? "rotate(0deg)" : "rotate(180deg)",
      },
      ":hover": {
        backgroundColor:
          ischildrenopen === "true"
            ? theme.palette.secondary[700]
            : theme.palette.secondary[800],
      },
    })
);

export const BottomContent = styled("div")(({ theme }) => ({
  width: "100%",
  gap: theme.spacing(1.5),
  padding: theme.spacing(2, 1.25),
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  height: 64,
  borderTop: `1px solid ${theme.palette.grey[600]}`,
  p: {
    color: theme.palette.grey[50],
  },
  overflow: "hidden",
}));

export const IconContainer = styled("div")(({ theme }) => ({
  width: 40,
  minWidth: 40,
  height: 40,
  minHeight: 40,
  backgroundColor: theme.palette.grey[100],
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
