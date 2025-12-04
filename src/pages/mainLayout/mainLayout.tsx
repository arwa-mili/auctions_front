import { SelectChangeEvent, useMediaQuery, useTheme } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FC, useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
// constants
import { RoutesEnum } from "@constants";
//contextAPI
import { RequireAuth, useGlobalContext } from "@contextAPI";
// components
import { Footer, Navbar, Sidebar } from "@components";
// utils
import { getBreadCrumbsData, SIDEBAR_ROUTES } from "./mainLayout.utils";
//styles
import { Content, MainContainer, OutletContainer } from "./mainLayout.styles";
//api
import { toast } from "react-toastify";



const MainLayout: FC = () => {
  const theme = useTheme();
  const { t } = useTranslation(["common"]);
  const navigate = useNavigate();
  const location = useLocation();
  const global = useGlobalContext();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  //state
  const [sidebarOpen, setSidebarOpen] = useState(!isSmallScreen);
  const methods = useForm({ defaultValues: { language: global.language } });

  //queries & mutations
  
  

  const breadcrumbsData = useMemo(
    () => getBreadCrumbsData(location.pathname),
    [location.pathname]
  );
  //useEffect
  useEffect(() => {
    setSidebarOpen(!isSmallScreen);
  }, [isSmallScreen]);

  //functions
  const onChangeLanguage = (event: SelectChangeEvent<string>) => {
    const code = event.target.value;
    global.switchLanguage({
      language: code,
      dir: code === "ar" ? "rtl" : "ltr",
    });
  };


  //render
  return (
    <FormProvider {...methods}>
      <RequireAuth>
        <MainContainer>
          <Sidebar
            open={sidebarOpen}
            onOpen={setSidebarOpen}
            routes={SIDEBAR_ROUTES}
          />
          <Content sidebarOpen={sidebarOpen}>
            <FormProvider {...methods}>
              <Navbar
                breadcrumbs={breadcrumbsData}
                onChangeLanguage={onChangeLanguage}
                user={{
                  name: `${global.user?.name || ""} ${global.user?.lastName || ""}`,
                  email: global.user?.email || t("common.labels.not_available"),
                  avatar: global.user?.avatarUrl,
                }}
              />
            </FormProvider>
            <OutletContainer>
              <Outlet />
            </OutletContainer>
            <Footer labelTermsOfUse={t("common:labels.terms_of_use")} />
          </Content>
        </MainContainer>
      </RequireAuth>
    </FormProvider>
  );
};

export default MainLayout;
