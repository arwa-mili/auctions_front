import { Link, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link as LinkRouter, useNavigate } from "react-router-dom";
//contextAPI
import { useGlobalContext } from "@contextAPI";
// constants
import { RoutesEnum } from "@constants";
//components

//api
//styles
import { Container } from "./signIn.styles";
//types
import { isEmailAddress, isRequired } from "@helpers";
import { SignInState } from "./signIn.types";
import { Button, Checkbox, Form, Input, InputAdornmentPassword, toast } from "index";


const SignIn: FC = () => {
  const global = useGlobalContext();

  const navigate = useNavigate();
  const { t } = useTranslation(["common", "signIn"]);
  const methods = useForm<SignInState>({
    values: {
      email: "",
      password: "",
      rememberMe: false,
      showPassword: false,
    },
  });
  const showPassword = methods.watch("showPassword");

  //queries & mutations
  //functions
  const onClickSignIn: SubmitHandler<SignInState> = async (data) => {
    try {
    

      global.signIn({
        accessToken: "fcfcfc" as string,
        refreshToken: "frfrfr" as string,
        rememberMe: data.rememberMe,
      });
      navigate(RoutesEnum.MAIN);
      localStorage.setItem("rememberMe", JSON.stringify(data.rememberMe));
    } catch (error: any) {
      toast(error.body?.errors?.[0]?.message, {
        type: "error",
        position: "bottom-left",
      });
    }
  };

  //render
  return (
    <FormProvider {...methods}>
      <Form
        style={{ height: "100%" }}
        onSubmit={methods.handleSubmit(onClickSignIn)}
      >
        <Container>
          <Typography fontSize={{ xs: 20, sm: 24, md: 30 }} fontWeight="600">
            {t("signIn:labels.title")}
          </Typography>

          <Input
            autoFocus
            name="email"
            label={t("common:labels.email")}
            placeholder={t("common:placeholders.email")}
            rules={isEmailAddress({ t })}
          />
          <Input
            name="password"
            label={t("common:labels.password")}
            placeholder={t("common:placeholders.password")}
            type={showPassword ? "text" : "password"}
            endAdornment={<InputAdornmentPassword name="showPassword" />}
            rules={isRequired({ t })}
          />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Checkbox
              name="rememberMe"
              label={t("signIn:labels.remember_me")}
              labelFontWeight="500"
            />
            <Link
              underline="hover"
              color="primary.main"
              fontWeight="500"
              component={LinkRouter}
              to={RoutesEnum.FORGET_PASSWORD}
            >
              {t("signIn:links.forgot_password")}
            </Link>
          </Stack>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            size="large"
            loading={false}
          >
            {t("signIn:buttons.sign_in")}
          </Button>
        </Container>
      </Form>
    </FormProvider>
  );
};

export default SignIn;
