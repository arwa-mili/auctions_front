export type CalendarHeaderProps = {
  labelLeft?: string;
  month?: Date | null;
  fullScreen?: boolean;
  disabledLeft?: boolean;
  disabledRight?: boolean;
  onClickLeft?: () => void;
  onClickRight?: () => void;
  onChangeFullScreen?: () => void;
};
