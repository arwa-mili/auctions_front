export type FormHeaderProps = {
  headerTitle: string | React.ReactNode;
  actions?: Array<{
    icon?: JSX.Element | null;
    tooltip?: string;
    onClick?: () => void;
  }>;
  renderRight?: () => React.ReactNode;
  closePosition?: "left" | "right";
  onClickCloseButton?: () => void;
};
