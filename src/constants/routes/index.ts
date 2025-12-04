export enum RoutesEnum {
  ROOT = "/",
  ANY = "*",
  //   auth
  FORGET_PASSWORD = "forget-password",
  RESET_PASSWORD = "reset-password",
  CREATE_PASSWORD = "confirm",
  ID = ":id",
  TOKEN = ":token",
  // main
  MAIN = "main",
  
}

export const RouteToI18nKey: Partial<Record<RoutesEnum, string>> = {

  [RoutesEnum.MAIN]: "routes:routes.dashboard",
  [RoutesEnum.FORGET_PASSWORD]: "routes:routes.forget_password",
  [RoutesEnum.RESET_PASSWORD]: "routes:routes.reset_password",
  [RoutesEnum.CREATE_PASSWORD]: "routes:routes.create_password",

};
