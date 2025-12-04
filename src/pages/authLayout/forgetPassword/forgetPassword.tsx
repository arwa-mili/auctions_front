import { Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { FC } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
//constants
import { RoutesEnum } from "@constants";
//helpers
import { isEmailAddress } from "@helpers";
// core
// styles
import { Container } from "./forgetPassword.styles";
//api
import { UserAuthenticationService } from "@api";
// types
import { ForgetPasswordState } from "./forgetPassword.types";

const { resendPasswordRecoveryToken } = UserAuthenticationService;

const ForgetPassword: FC = () => {
  const { t } = useTranslation(["common", "forgotPassword"]);
  const navigate = useNavigate();

  const methods = useForm<ForgetPasswordState>({
    mode: "onChange",
    reValidateMode: "onChange",
    values: {
      email: "",
    },
  });

  //queries & mutations
  const resendPasswordRecoveryTokenMutation = useMutation({
    mutationFn: resendPasswordRecoveryToken,
  });

  //functions
  const onClickReset: SubmitHandler<ForgetPasswordState> = async (data) => {
    try {
      await resendPasswordRecoveryTokenMutation.mutateAsync({
        requestBody: { email: data.email },
      });
      toast(t("forgotPassword:messages.send_password_success"), {
        type: "success",
        position: "bottom-left",
      });
      navigate(RoutesEnum.ROOT);
    } catch (error: any) {
      toast(error.body?.errors?.[0]?.message, {
        type: "error",
        position: "bottom-left",
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <Form
        style={{ height: "100%" }}
        onSubmit={methods.handleSubmit(onClickReset)}
      >
        <Container>
          <Typography height={74} fontSize={30} fontWeight="600">
            {t("forgotPassword:forgot_password.forgot_password")}
          </Typography>

          <Input
            autoFocus
            name="email"
            label={t("common:labels.email") + "*"}
            placeholder={t("common:placeholders.email")}
            rules={isEmailAddress({ t, required: true })}
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            size="large"
            onClick={methods.handleSubmit(onClickReset)}
          >
            {t("forgotPassword:buttons.reset")}
          </Button>
        </Container>
      </Form>
    </FormProvider>
  );
};

export default ForgetPassword;
