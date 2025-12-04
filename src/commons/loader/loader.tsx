import { FC, useMemo } from "react";
//styles
import { Container, Dot } from "./loader.styles";
//types
import { LoaderProps } from "./loader.types";

const Loader: FC<LoaderProps> = props => {
  const { size = 40, color = "primary" } = props;
  //useMemo
  const dotSize = useMemo(() => `${Math.floor(size / 3)}px`, [size]);
  //render
  return (
    <Container>
      <Dot color={color} dotSize={dotSize} delay="-0.32s" />
      <Dot color={color} dotSize={dotSize} delay="-0.16s" />
      <Dot color={color} dotSize={dotSize} delay="-0.0s" />
    </Container>
  );
};
export { Loader };
