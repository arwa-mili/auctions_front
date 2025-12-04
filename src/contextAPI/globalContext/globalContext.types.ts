import { Locale } from "date-fns";

export type GlobalContextProps = {
  isLoading: boolean;
  isLogged: boolean;
  language: string;
  currency: string;
  locale?: Locale;
  error: Error | null;
  signIn: (params: SignInProps) => void;
  signOut: () => void;
  switchLanguage: (params: SwitchLanguageParams) => void;
  switchCurrency: (params: SwitchCurrencyParams) => void;
};

export type GlobalProviderProps = {
  children: React.ReactNode;
};

export type SignInProps = {
  accessToken: string;
  refreshToken: string;
  rememberMe: boolean;
};

export type SwitchLanguageParams = {
  language?: string;
  dir: "rtl" | "ltr";
};

export type SwitchCurrencyParams = {
  currency: string;
};

export type RequireAuthProps = {
  children: JSX.Element;
};
