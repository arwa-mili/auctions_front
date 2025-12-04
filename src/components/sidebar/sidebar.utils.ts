import { SidebarRouteType } from "./sidebar.types";

export function getSelectedItem(path: string, items: Array<SidebarRouteType>) {
  const pathSegments = path.split("/").filter(Boolean);

  // last segment
  const lastSegment = pathSegments[pathSegments.length - 1];
  // second-to-last segment
  const penultimateSegment = pathSegments[pathSegments.length - 2];

  const routeMap = new Map<string, { parentId: number; id?: string }>();

  items.forEach((item) => {
    if (item.path) {
      routeMap.set(item.path.replace("/", ""), { parentId: item.id });
    }
    if (item.subRoutes) {
      item.subRoutes.forEach((subRoute) => {
        routeMap.set(subRoute.path.split("/").pop() ?? "", {
          parentId: item.id,
          id: subRoute.id,
        });
      });
    }
  });

  const selectedItem =
    routeMap.get(lastSegment) ?? routeMap.get(penultimateSegment);

  return {
    parentId: selectedItem?.parentId,
    id: selectedItem?.id,
  };
}

export function getSubRoutes(
  items: Array<SidebarRouteType>,
  parentId?: number
) {
  if (parentId) {
    const parent = items.find((item) => item.id === parentId);
    return parent?.subRoutes;
  }

  return undefined;
}
