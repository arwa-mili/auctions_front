import { BreadcrumbItem, SidebarRouteType } from "@components";
import { RoutesEnum, RouteToI18nKey } from "@constants";
import i18n from "i18n";
import { Svgs } from "svgs";

export const SIDEBAR_ROUTES: Array<SidebarRouteType> = [
  {
    id: 1,
    label: i18n.t("routes:routes.dashboard"),
    path: `/${RoutesEnum.MAIN}`,
    link: RoutesEnum.MAIN,
    icon: <Svgs.IconDashboard />,
  }
];

export function getBreadCrumbsData(path: string): BreadcrumbItem[] {
  const pathSegments = path.split("/").filter(Boolean);

  const routeLookup = new Map<string, { label: string; path?: string }>();

  SIDEBAR_ROUTES.forEach((item) => {
    routeLookup.set(item.link || "", { label: item.label, path: item.path });
    if (item.subRoutes) {
      item.subRoutes.forEach((subRoute) => {
        routeLookup.set(subRoute.link || "", {
          label: subRoute.label,
          path: subRoute.path,
        });
      });
    }
  });

  return pathSegments.map((segment) => {
    const isHome = segment === "main";
    const routeData = routeLookup.get(segment);
    return {
      label:
        routeData?.label ??
        i18n.t(RouteToI18nKey[segment as RoutesEnum] || segment),
      link: routeData?.path,
      home: isHome,
    };
  });
}
