import { SxProps } from "@mui/material";

type LinkProps = { type: "link" } & {
  link: string | number;
  fontSize?: number;
  fontWeight?: string | number;
  color?: string;
  underline?: "hover" | "always" | "none";
  maxWidth?: string | number;
  onClick?: () => void;
};
type TextProps = { type: "text" } & {
  label: string | number;
  fontSize?: number;
  fontWeight?: string | number;
  color?: string;
  maxWidth?: string | number;
};
type ChipProps = { type: "chip" } & {
  label: string | number;
  bgColor?: string;
  icon?: JSX.Element;
  labelColor?: string;
  labelFontSize?: number;
};

type ChipTooltipProps = { type: "chip-tooltip" } & {
  label: string | number;
  icon?: JSX.Element;
  tooltip: React.ReactNode;
  sxLabel?: SxProps;
  sxChip?: SxProps;
};

type ItemProps = { type: "item" } & {
  title?: string | number | React.ReactNode;
  subtitle?: string | number;
  avatar?: string;
  icon?: React.ReactNode;
  avatarSx?: SxProps;
  showAvatar?: boolean;
  onClick?: () => void;
};

type ActionsProps = { type: "actions" } & {
  isVisible?: boolean;
  loading?: boolean;
  options: Array<OptionProps>;
};

type ReactNodeProps = { type: "reactNode" } & { node: React.ReactNode };

export type OptionProps = {
  label: string;
  value: string;
  icon?: JSX.Element;
  textColor?: string;
  isVisible?: boolean;
  disabled?: boolean;
  onClickOption?: (option: Omit<OptionProps, "onClickOption">) => void;
};

type EllipsisTableProps = { type: "ellipsisTable" } & {
  data: Array<any>;
  columns: Array<any>;
  minWidthTable?: number | string;
  renderItem: (params: { item: any; index: number }) => React.ReactNode;
};

type IconProps = { type: "icon" } & {
  count: number;
  disabled?: boolean;
  icon?: React.ReactNode;
  badgeContent?: React.ReactNode;
  hideBadge?: boolean;
  onClickIcon?: () => void;
};
type SwitchProps = { type: "switch" } & {
  name: string;
  disabled?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
};

type IconButtonActionsProps = { type: "icon-button-actions" } & {
  isVisible?: boolean;
  options: Array<IconButtonOptionProps>;
};
export type IconButtonOptionProps = {
  icon?: JSX.Element;
  title?: string;
  size?: "small" | "extra-small" | "medium" | "large";
  color?:
    | "inherit"
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "standard";
  isVisible?: boolean;
  disabled?: boolean;
  noIconButton?: boolean;
  onClickOption?: (
    option: Omit<IconButtonOptionProps, "onClickOption">
  ) => void;
};
export type DataTableColumnProps = {
  displayed?: boolean;
  disablePadding?: boolean;
  align?: "left" | "center" | "right" | "justify" | "inherit";
  minWidth?: number;
  maxWidth?: string | number;
  isNew?: boolean;
  style?: React.CSSProperties;
} & (
  | LinkProps
  | TextProps
  | ChipProps
  | ChipTooltipProps
  | ActionsProps
  | ReactNodeProps
  | ItemProps
  | EllipsisTableProps
  | IconProps
  | SwitchProps
  | IconButtonActionsProps
);
