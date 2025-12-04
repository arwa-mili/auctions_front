import { FC, useState } from "react";
import { ImagesProps } from "./image.types";
import { Avatar } from "./image.styles";

const Image: FC<ImagesProps> = props => {
  const {
    width = 26,
    size,
    height = 26,
    alt,
    borderRadius,
    objectFit = "contain",
    color,
    src,
    backgroundColor,
    border,
    variant = "square",
    ...rest
  } = props;
  const [loading, setLoading] = useState(true);
  const onLoadStart = () => {
    setLoading(true);
  };
  const onLoad = () => {
    setLoading(false);
  };

  //render
  return (
    <Avatar
      width={width}
      height={height}
      variant={variant}
      size={size}
      alt={alt}
      src={src}
      color={color}
      component={Avatar}
      border={border}
      borderradius={borderRadius}
      objectfit={objectFit}
      backgroundcolor={backgroundColor}
      onLoadStart={onLoadStart}
      onLoad={onLoad}
      {...rest}
    />
  );
};
export { Image };
