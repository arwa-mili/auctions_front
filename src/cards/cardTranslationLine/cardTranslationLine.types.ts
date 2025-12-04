import { SxProps, Theme } from "@mui/material";

type DefaultSystemLanguagesType = {
  code: string;
  name?: {
    default?: string;
    translations?: Record<string, any>;
  };
  native?: string;
  flag?: string;
};
export type CardTranslationLineProps = {
  language: DefaultSystemLanguagesType;
  children: React.ReactNode[];
  sx?: SxProps<Theme>;
};
