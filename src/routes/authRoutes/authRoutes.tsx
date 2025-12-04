import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
//components
// constants
import { RoutesEnum } from "@constants";

// pages
import AuthLayout from "@pages/authLayout/authLayout";
import { CardNotFound, Fallback } from "index";
const SignIn = lazy(() => import("@pages/authLayout/signIn/signIn"));
const ForgetPassword = lazy(
  () => import("@pages/authLayout/forgetPassword/forgetPassword")
);
const ResetPassword = lazy(
  () => import("@pages/authLayout/resetPassword/resetPassword")
);

const CreatePassword = lazy(
  () => import("@pages/authLayout/createPassword/createPassword")
);
const AuthRoutes = () => {
  return (
    <Routes>
      <Route path={RoutesEnum.ROOT} element={<AuthLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<Fallback />}>
              <SignIn />
            </Suspense>
          }
        />
        <Route
          path={RoutesEnum.FORGET_PASSWORD}
          element={
            <Suspense fallback={<Fallback />}>
              <ForgetPassword />
            </Suspense>
          }
        />

        <Route
          path={RoutesEnum.CREATE_PASSWORD}
          element={
            <Suspense fallback={<Fallback />}>
              <CreatePassword />
            </Suspense>
          }
        />

        <Route
          path={RoutesEnum.RESET_PASSWORD}
          element={
            <Suspense fallback={<Fallback />}>
              <ResetPassword />
            </Suspense>
          }
        />

        <Route path={RoutesEnum.ANY} element={<CardNotFound />} />
      </Route>
    </Routes>
  );
};

export { AuthRoutes };
