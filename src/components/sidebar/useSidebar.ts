import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
// utils
import { getSelectedItem, getSubRoutes } from "./sidebar.utils";
// types
import { SidebarProps, SidebarSubRouteType } from "./sidebar.types";

const useSidebar = (props: SidebarProps) => {
  const { routes, open, onOpen } = props;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const { pathname } = location;

  const selectedItem = useMemo(
    () => getSelectedItem(pathname, routes),
    [pathname]
  );

  const [subRoutes, setSubRoutes] = useState<
    Array<SidebarSubRouteType> | undefined
  >(getSubRoutes(routes, selectedItem.parentId));

  const logo = open && !subRoutes ? "/logo-light-2.svg" : "/logo-small-2.svg";
  const leftOpen = open && !subRoutes;

  useEffect(() => {
    setSubRoutes(getSubRoutes(routes, selectedItem.parentId));
  }, [selectedItem.parentId]);

  const onClickItem = () => {
    onOpen(true);
  };

  return {
    isSmallScreen,
    open,
    leftOpen,
    subRoutes,
    logo,
    selectedItem,
    onOpen,
    onClickItem,
  };
};

export default useSidebar;
