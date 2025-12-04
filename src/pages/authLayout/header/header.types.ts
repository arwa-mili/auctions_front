import { SelectChangeEvent } from "@mui/material";

export type HeaderProps = {
  onChangeLanguage: (event: SelectChangeEvent<string>) => void;
};
