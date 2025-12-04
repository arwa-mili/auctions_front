import { Typography } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FC, useMemo } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";
//constants
import { RoutesEnum } from "@constants";
//contextAPI
import { useGlobalContext } from "@contextAPI";
//helpers
import { isPassword, isRequired } from "@helpers";
//components
import {
  Button,
  Empty,
  Fallback,
  Form,
  Input,
  InputAdornmentPassword,
  toast,
} from "@drivini/ui";
//styles
import { Container } from "./createPassword.styles";
//api
import { UserAuthenticationService } from "@api";
//types
import { CreatePasswordState } from "./createPassword.types";

const { createNewPassword, verifyCarrierAccount } = UserAuthenticationService;

const CreatePassword: FC = () => {
  const global = useGlobalContext();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const { t } = useTranslation(["common", "createPassword"]);
  const methods = useForm<CreatePasswordState>({
    mode: "onChange",
    reValidateMode: "onChange",
    values: {
      password: "",
      confirmPassword: "",
      showPassword: false,
      showConfirmPassword: false,
    },
  });
  const showPassword = methods.watch("showPassword");
  const showConfirmPassword = methods.watch("showConfirmPassword");
  const dataWatch = methods.watch();

  //queries & mutations
  const setPasswordMutation = useMutation({ mutationFn: createNewPassword });
  const verifyUserAccountMutation = useQuery({
    queryKey: ["verifyUserAccount", token],
    queryFn: () =>
      verifyCarrierAccount({
        requestBody: { verificationCode: token?.replace(/ /g, "+") || "" },
      }),
    enabled: !!token,
  });

  const error = useMemo(
    () => ({
      //@ts-ignore
      code: verifyUserAccountMutation.error?.body?.errors?.[0]?.code,
      //@ts-ignore
      message: verifyUserAccountMutation.error?.body?.errors?.[0]?.message,
    }),
    [verifyUserAccountMutation.error]
  );

  //functions
  const onClickSetPassword: SubmitHandler<CreatePasswordState> = async (
    data
  ) => {
    if (!verifyUserAccountMutation.data?.data?.passwordRecoveryToken) return;

    try {
      const res = await setPasswordMutation.mutateAsync({
        requestBody: {
          password: data.password,
          passwordRecoveryToken:
            verifyUserAccountMutation.data?.data?.passwordRecoveryToken,
        },
      });
      if (res.data?.accessToken && res.data?.refreshToken) {
        global.signIn({
          accessToken: res.data?.accessToken,
          refreshToken: res.data?.refreshToken,
          rememberMe: true,
        });
        navigate(`/${RoutesEnum.MAIN}`);
      }
    } catch (error: any) {
      toast(error.body?.errors?.[0]?.message, {
        type: "error",
        position: "bottom-left",
      });
    }
  };

  //render

  const renderContent = () => {
    if (verifyUserAccountMutation.isPending) {
      return <Fallback />;
    }
    if (error.message) {
      return <Empty title={error.code} message={error.message} />;
    }

    return (
      <>
        <Typography fontSize={32} fontWeight="700" color="grey.900">
          {t("createPassword:labels.title")}
        </Typography>

        <Input
          name="password"
          label={t("createPassword:labels.new_password") + "*"}
          placeholder={t("createPassword:placeholders.new_password")}
          type={showPassword ? "text" : "password"}
          endAdornment={<InputAdornmentPassword name="showPassword" />}
          rules={{
            ...isRequired({ t }),
            validate: (value) => {
              if (isPassword(value)) return true;
              return t("common:validations.incorrect_password");
            },
          }}
        />
        <Input
          name="confirmPassword"
          label={t("createPassword:labels.confirm_password") + "*"}
          placeholder={t("createPassword:placeholders.confirm_password")}
          type={showConfirmPassword ? "text" : "password"}
          endAdornment={<InputAdornmentPassword name="showConfirmPassword" />}
          rules={{
            ...isRequired({ t }),
            validate: (value) => {
              if (dataWatch.password !== value)
                return t("common:validations.passwords_not_match");
              return true;
            },
          }}
        />
        <Button
          variant="contained"
          type="submit"
          fullWidth
          size="large"
          loading={setPasswordMutation.isPending}
          onClick={methods.handleSubmit(onClickSetPassword)}
        >
          {t("createPassword:buttons.confirm")}
        </Button>
      </>
    );
  };
  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onClickSetPassword)}>
        <Container>{renderContent()}</Container>
      </Form>
    </FormProvider>
  );
};

export default CreatePassword;
