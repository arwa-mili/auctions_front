import { SxProps, Theme } from "@mui/material";

export type ActionsProps = {
  field: any;
  actions?: {
    isDeletable?: boolean;
    isDownloaded?: boolean;
    isEditable?: boolean;
    isViewed?: boolean;
  };
  sxActions?: SxProps<Theme>;
  sxActionDelete?: SxProps<Theme>;
  onClickClear?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};
