import { createContext } from "react";
import { FormBlockerContextProps } from "./formBlockerContext.types";

export const FormBlockerContext = createContext<FormBlockerContextProps>({
  isLoading: false,
});
