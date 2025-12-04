import { FC, useContext } from "react";
import { LinearProgress } from "@mui/material";
//utils
import { FormBlockerContext } from "./formBlockerContext.utils";
//Types
import {
  FormBlockerContextProps,
  FormBlockerProviderProps,
} from "./formBlockerContext.types";

const FormBlockerProvider: FC<FormBlockerProviderProps> = (props) => {
  const { isLoading, children } = props;

  const value: FormBlockerContextProps = {
    isLoading: isLoading,
  };

  return (
    <FormBlockerContext.Provider value={value}>
      {isLoading && <LinearProgress />}
      {children}
    </FormBlockerContext.Provider>
  );
};

const useFormBlockerContext = () => {
  return useContext(FormBlockerContext);
};

export { FormBlockerProvider, useFormBlockerContext };
