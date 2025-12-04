import { CacheProvider } from "@emotion/react";
import { Container, ThemeProvider } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FC, useContext, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
//constants
import { StorageKeys } from "@constants";
//theme
// Components
import { Splash } from "@components";
//utils
import {
  cacheLtr,
  cacheRtl,
  getLocale,
  GlobalContext,
  palette,
} from "./globalContext.utils";
//Api
//Types
import {
  GlobalContextProps,
  GlobalProviderProps,
  RequireAuthProps,
  SignInProps,
  SwitchCurrencyParams,
  SwitchLanguageParams,
} from "./globalContext.types";
import { getTheme } from "@theme";
import { Empty } from "commons";
import { Svgs } from "index";


//config          
const GlobalProvider: FC<GlobalProviderProps> = (props) => {
  const { children } = props;
  const { i18n } = useTranslation();
  //state
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>(
    localStorage.getItem(StorageKeys.LANGUAGE) || "en"
  );
  const [currency, setCurrency] = useState<string>("USD");

  //queries & mutations
  const queryClient = useQueryClient();
  
  const user ={
    id: 1,
    name: "Arwa",
    displayName: "Arwa"
    
  };
  // USE EFFECT
  useEffect(() => {
    const language = localStorage.getItem(StorageKeys.LANGUAGE);
    const accessTokenLocal = localStorage.getItem(StorageKeys.ACCESS_TOKEN);
    const refreshTokenLocal = localStorage.getItem(StorageKeys.REFRESH_TOKEN);
    const accessTokenSession = sessionStorage.getItem(StorageKeys.ACCESS_TOKEN);
    const refreshTokenSession = sessionStorage.getItem(
      StorageKeys.REFRESH_TOKEN
    );

    if (language) {
      i18n.changeLanguage(language);
      document.body.dir = language === "ar" ? "rtl" : "ltr";
      setLanguage(language);
    }
    if (accessTokenLocal && refreshTokenLocal) {
     
      setIsLogged(true);
    } else if (accessTokenSession && refreshTokenSession) {
      
      setIsLogged(true);
    } else {
      setIsLogged(false);
      setIsLoading(false);
    }
  }, []);

  //functions
  const signIn = (params: SignInProps) => {
    const { accessToken, refreshToken, rememberMe } = params;
    if (rememberMe) {
      localStorage.setItem(StorageKeys.ACCESS_TOKEN, accessToken);
      localStorage.setItem(StorageKeys.REFRESH_TOKEN, refreshToken);
    } else {
      sessionStorage.setItem(StorageKeys.ACCESS_TOKEN, accessToken);
      sessionStorage.setItem(StorageKeys.REFRESH_TOKEN, refreshToken);
    }
    setIsLogged(true);
    setIsLoading(true);
  };

  const signOut = () => {
    sessionStorage.clear();
    localStorage.clear();
    queryClient.clear();
    setIsLogged(false);
    setIsLoading(false);
  };

  const switchLanguage = (params: SwitchLanguageParams) => {
    if (!params.language || params.language === language) return;

    localStorage.setItem(StorageKeys.LANGUAGE, params.language);
    i18n.changeLanguage(params.language);
    document.body.dir = params.dir;
    setLanguage(params.language);
  };

  const switchCurrency = (params: SwitchCurrencyParams) => {
    if (!params.currency || params.currency === currency) return;

    localStorage.setItem(StorageKeys.CURRENCY, params.currency);
    setCurrency(params.currency);
  };

  const locale = useMemo(() => getLocale(language), [language]);
  const cache = useMemo(
    () => (language === "ar" ? cacheRtl : cacheLtr),
    [language]
  );
  const theme = useMemo(() => {
    const direction = language === "ar" ? "rtl" : "ltr";
    return getTheme({ direction, palette: palette });
  }, [language]);

  const value: GlobalContextProps = {
    error: {
      name: "ERROR",
      message: "RRR",
      stack: "",
    },
    user: user,
    isLoading,
    isLogged,
    language,
    locale,
    currency,
    signIn,
    signOut,
    switchLanguage,
    switchCurrency,
  };

  return (
    <CacheProvider value={cache}>
      <GlobalContext.Provider value={value}>
        <ThemeProvider theme={theme}>
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            adapterLocale={locale}
          >
            {children}
          </LocalizationProvider>
        </ThemeProvider>
      </GlobalContext.Provider>
    </CacheProvider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

const RequireAuth: FC<RequireAuthProps> = (props) => {
  const { children } = props;
  const { t } = useTranslation(["common"]);
  const auth = useGlobalContext();
  const location = useLocation();
  const navigate = useNavigate();
  //useEffect
  useEffect(() => {
    const state = location.state || {};

    if (!auth.isLoading && auth.isLogged) {
      navigate(location.pathname, {
        replace: true,
        state: {
          ...state,
          breadcrumb: state?.breadcrumb || [],
          from: location,
        },
      });
    } else if (!auth.isLoading && !auth.isLogged) {
      navigate("/", {
        replace: true,
        state: {
          ...state,
          breadcrumb: state?.breadcrumb || [],
          from: location,
        },
      });
    }
  }, [auth.isLoading, auth.isLogged]);

  if (auth.error) {
    return (
      <Container maxWidth="xl" sx={{ height: "100vh" }}>
        <Empty
          sx={{ height: "100%" }}
          image="/technical-error.svg"
          imageWidth={300}
          imageHeight={300}
          title={t("common:messages.technical_error.title")}
          message={t("common:messages.technical_error.message")}
          textPrimaryButton={t("common:buttons.refresh")}
          sxButtonPrimary={{ minWidth: 120 }}
          onClickPrimaryButton={() => globalThis.location.reload()}
          startIconPrimary={<Svgs.IconRefreshCw05 fontSize="medium" />}
        />
      </Container>
    );
  }
  if (auth.isLoading) {
    return <Splash />;
  }

  return children;
};

export { GlobalProvider, RequireAuth, useGlobalContext };
