export type SidebarSubRouteType = {
  label: string;
  path: string;
  id: string;
  link?: string;
};

export type SidebarRouteType = {
  id: number;
  label: string;
  path: string;
  link?: string;
  icon: React.ReactNode;
  isVisible?: boolean;
  subRoutes?: Array<SidebarSubRouteType>;
};

export type SidebarProps = {
  routes: Array<SidebarRouteType>;
  open: boolean;
  onOpen: (state: boolean) => void;
};
