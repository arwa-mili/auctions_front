import { FC } from "react";
import { SelectChangeEvent, Typography, Box } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";

//constants
import { RoutesEnum } from "@constants";

//contextAPI
import { useGlobalContext } from "@contextAPI";

//components
import { Splash } from "@components";
import Header from "./header/header";
import Footer from "./footer/footer";

//styles
import {
  Container,
  ContentWrapper,
  BackgroundGraphics,
} from "./authLayout.styles";

const AuthLayout: FC = () => {
  const { t } = useTranslation(["auth"]);
  const global = useGlobalContext();
  const methods = useForm({
    defaultValues: { language: global.language },
  });

  //functions
  const onChangeLanguage = (event: SelectChangeEvent) => {
    const code = event.target.value;
    global.switchLanguage({
      language: code,
      dir: code === "ar" ? "rtl" : "ltr",
    });
  };

  //render
  if (global.isLoading) {
    return <Splash />;
  }

  if (global.isLogged) {
    return <Navigate to={RoutesEnum.DASHBOARD} />;
  }

  return (
    <Container>
      <BackgroundGraphics />
      
      <ContentWrapper>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <FormProvider {...methods}>
            <Outlet />
          </FormProvider>
        </Box>

        <Footer />
      </ContentWrapper>
    </Container>
  );
};

export default AuthLayout;