import { SelectChangeEvent } from "@mui/material";
export type AvatarPopoverProps = {
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
  onClickLogout?: () => void;
  onClickAccount?: () => void;
  onChangeLanguage?: (event: SelectChangeEvent<string>) => void;
};
