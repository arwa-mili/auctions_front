export type DialogFullScreenProps = {
  children: React.ReactElement;
  fullScreen?: boolean;
  title?: string;
  p?: number;
  onClose?: () => void;
};
