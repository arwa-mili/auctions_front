import { FC } from "react";

const Form: FC<
  React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >
> = (props) => {
  const { children, ...rest } = props;
  return <form {...rest}>{children}</form>;
};

export { Form };
