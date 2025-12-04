import { BreadcrumbItem } from "components/breadcrumb/breadcrumb.types";
import { AvatarPopoverProps } from "./avatarPopover/avatarPopover.types";

export type NavbarProps = AvatarPopoverProps & {
  breadcrumbs: BreadcrumbItem[];
  background?: string;

  logo?: string;
  buttons?: {
    bgColor?: string;
    iconColor?: string;
  };
};
