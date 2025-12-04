import { Typography } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FC, useMemo } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";
//constants
import { RoutesEnum } from "@constants";
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
import { Container } from "./resetPassword.styles";
//api
import { UserAuthenticationService } from "@api";
//types
import { ResetPasswordState } from "./resetPassword.types";

const { checkToken, createNewPassword } = UserAuthenticationService;

const ResetPassword: FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");

  const { t } = useTranslation(["common", "forgotPassword"]);

  const methods = useForm<ResetPasswordState>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      password: "",
      confirmPassword: "",
      showPassword: false,
      showConfirmPassword: false,
    },
  });
  const dataWatch = methods.watch();

  //queries & mutations
  const resetPasswordMutation = useMutation({ mutationFn: createNewPassword });
  const checkPasswordResetTokenMutation = useQuery({
    queryKey: ["checkPasswordResetToken", token],
    queryFn: () =>
      checkToken({
        requestBody: { passwordRecoveryToken: token?.replace(/ /g, "+") || "" },
      }),
    enabled: !!token,
  });

  const error = useMemo(
    () => ({
      //@ts-ignore
      code: checkPasswordResetTokenMutation.error?.body?.errors?.[0]?.code,
      message:
        //@ts-ignore
        checkPasswordResetTokenMutation.error?.body?.errors?.[0]?.message,
    }),
    [checkPasswordResetTokenMutation.error]
  );

  //functions
  const onClickSetPassword: SubmitHandler<ResetPasswordState> = async (
    data
  ) => {
    if (!token) return;
    try {
      await resetPasswordMutation.mutateAsync({
        requestBody: {
          password: data.password,
          passwordRecoveryToken: token?.replace(/ /g, "+"),
        },
      });
      navigate(RoutesEnum.ROOT);
    } catch (error: any) {
      toast(error.body?.errors?.[0]?.message, {
        type: "error",
        position: "bottom-left",
      });
    }
  };

  //render

  const renderContent = () => {
    if (checkPasswordResetTokenMutation.isPending) {
      return <Fallback />;
    }
    if (error.message) {
      return <Empty title={error.code} message={error.message} />;
    }

    return (
      <>
        <Typography fontSize={32} fontWeight="700" color="grey.900">
          {t("forgotPassword:reset_password.reset_password")}
        </Typography>

        <Input
          name="password"
          label={t("common:labels.new_password") + "*"}
          placeholder={t("common:placeholders.new_password")}
          type={dataWatch.showPassword ? "text" : "password"}
          endAdornment={<InputAdornmentPassword name="showPassword" />}
          rules={{
            ...isRequired({ t }),
            validate: (value) =>
              isPassword(value) || t("common:validations.incorrect_password"),
          }}
        />
        <Input
          name="confirmPassword"
          label={t("common:labels.confirm_password") + "*"}
          placeholder={t("common:placeholders.confirm_password")}
          type={dataWatch.showConfirmPassword ? "text" : "password"}
          endAdornment={<InputAdornmentPassword name="showConfirmPassword" />}
          rules={{
            ...isRequired({ t }),
            validate: (value) =>
              dataWatch.password === value ||
              t("common:validations.passwords_not_match"),
          }}
        />
        <Button
          variant="contained"
          type="submit"
          fullWidth
          size="large"
          loading={resetPasswordMutation.isPending}
        >
          {t("common:buttons.confirm")}
        </Button>
      </>
    );
  };
  return (
    <FormProvider {...methods}>
      <Form
        style={{ height: "100%" }}
        onSubmit={methods.handleSubmit(onClickSetPassword)}
      >
        <Container>{renderContent()}</Container>
      </Form>
    </FormProvider>
  );
};

export default ResetPassword;
