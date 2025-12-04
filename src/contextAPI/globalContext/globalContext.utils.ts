import { createContext } from "react";
import { Locale } from "date-fns";
// import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { ar } from "date-fns/locale/ar";
import { cs } from "date-fns/locale/cs";
import { de } from "date-fns/locale/de";
import { enUS } from "date-fns/locale/en-US";
import { es } from "date-fns/locale/es";
import { fr } from "date-fns/locale/fr";
import { it } from "date-fns/locale/it";
import { ja } from "date-fns/locale/ja";
import { pl } from "date-fns/locale/pl";
import { pt } from "date-fns/locale/pt";
import { ru } from "date-fns/locale/ru";
import { tr } from "date-fns/locale/tr";
import { zhCN } from "date-fns/locale/zh-CN";
//types
import { GlobalContextProps } from "./globalContext.types";
import { PaletteOptions } from "@mui/material";

export const GlobalContext = createContext<GlobalContextProps>({
  isLoading: false,
  isLogged: false,
  language: "en",
  currency: "USD",
  locale: enUS,
  user: null,
  error: null,
  signIn: () => {},
  signOut: () => {},
  switchLanguage: () => {},
  switchCurrency: () => {},
});

export const getLocale = (language: string): Locale => {
  if (language === "ar") {
    return ar;
  } else if (language === "cs") {
    return cs;
  } else if (language === "de") {
    return de;
  } else if (language === "en") {
    return enUS;
  } else if (language === "es") {
    return es;
  } else if (language === "fr") {
    return fr;
  } else if (language === "it") {
    return it;
  } else if (language === "ja") {
    return ja;
  } else if (language === "pl") {
    return pl;
  } else if (language === "pt") {
    return pt;
  } else if (language === "ru") {
    return ru;
  } else if (language === "tr") {
    return tr;
  } else if (language === "zh") {
    return zhCN;
  }
  return enUS;
};

export const getAllLocales = () => {
  return {
    "en-US": enUS,
    ar: ar,
    cs: cs,
    de: de,
    es: es,
    fr: fr,
    it: it,
    ja: ja,
    pl: pl,
    pt: pt,
    ru: ru,
    tr: tr,
    "zh-CN": zhCN,
  };
};

// Create rtl cache
export const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
  //prefixer,
});

// Create ltr cache
export const cacheLtr = createCache({ key: "muiltr" });

export const palette: PaletteOptions = {
  mode: "light",
  common: {
    black: "#000",
    white: "#fff",
  },
  divider: "#E3E8EF",
  primary: {
  light: "#ac92e7",
  main: "#6d31b3",
  dark: "#4a1f7b",
  contrastText: "#fff",
  "900": "#3b0f66",
  "800": "#4a1f7b",
  "700": "#5a2f90",
  "600": "#6d31b3",
  "500": "#7f44c6",
  "400": "#9670d1",
  "300": "#ae9ce0",
  "200": "#c4c0eb",
  "100": "#ddd8f5",
  "50": "#f4f2fc",
},

  secondary: {
    light: "#98A2B3",
    main: "#344054",
    dark: "#101828",
    contrastText: "#fff",
    50: "#F9FAFB",
    100: "#F2F4F7",
    200: "#EAECF0",
    300: "#D0D5DD",
    400: "#98A2B3",
    500: "#667085", // base color
    600: "#475467",
    700: "#344054",
    800: "#1D2939",
    900: "#101828",
  },
  info: {
    light: "#84CAFF",
    main: "#1570EF",
    dark: "#194185",
    contrastText: "#fff",
    "50": "#EFF8FF",
    "100": "#D1E9FF",
    "200": "#B2DDFF",
    "300": "#84CAFF",
    "400": "#53B1FD",
    "500": "#2E90FA",
    "600": "#1570EF",
    "700": "#175CD3",
    "800": "#1849A9",
    "900": "#194185",
  },
  success: {
    main: "#039855",
    light: "#6CE9A6",
    dark: "#054F31",
    contrastText: "#fff",
    "50": "#ECFDF3",
    "100": "#D1FADF",
    "200": "#A6F4C5",
    "300": "#6CE9A6",
    "400": "#32D583",
    "500": "#12B76A",
    "600": "#039855",
    "700": "#027A48",
    "800": "#05603A",
    "900": "#054F31",
  },
  error: {
    main: "#D92D20",
    light: "#FDA29B",
    dark: "#7A271A",
    contrastText: "#fff",
    "50": "#FEF3F2",
    "100": "#FEE4E2",
    "200": "#FECDCA",
    "300": "#FDA29B",
    "400": "#F97066",
    "500": "#F04438",
    "600": "#D92D20",
    "700": "#B42318",
    "800": "#912018",
    "900": "#7A271A",
  },
  warning: {
    main: "#FFC107",
    light: "#FEC84B",
    dark: "#7A2E0E",
    contrastText: "#fff",
    "50": "#FFF8E1",
    "100": "#FFE57F",
    "200": "#FEDF89",
    "300": "#FEC84B",
    "400": "#FDB022",
    "500": "#FFC107",
    "600": "#DC6803",
    "700": "#B54708",
    "800": "#93370D",
    "900": "#7A2E0E",
  },

  grey: {
    50: "#F9FAFB",
    100: "#F2F4F7",
    200: "#EAECF0",
    300: "#D0D5DD",
    400: "#98A2B3",
    500: "#667085",
    600: "#475467",
    700: "#344054",
    800: "#1D2939",
    900: "#101828",
  },
  background: {
    paper: "#FFFFFF",
    default: "#F9FAFB",
  },
  text: {
    primary: "#101828",
    secondary: "#667085",
  },
};
