import { FC } from "react";
//styles
import { Container } from "./formContainer.styles";
//types
import { FormContainerProps } from "./formContainer.types";

const FormContainer: FC<FormContainerProps> = (props) => {
  //props
  const { children, p = 2, ...rest } = props;
  //render
  return (
    <Container p={p} {...rest}>
      {children}
    </Container>
  );
};

export { FormContainer };
