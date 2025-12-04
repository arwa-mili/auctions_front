import { forwardRef } from "react";
//styles
import { MuiIconButton } from "./iconButton.styles";
//Types
import { IconButtonProps } from "./iconButton.types";

const IconButton = forwardRef(
  (
    props: IconButtonProps,
    ref?:
      | ((instance: HTMLButtonElement | null) => void)
      | React.RefObject<HTMLButtonElement>
      | null
  ) => {
    const {
      rounded,
      width,
      height,
      minWidth,
      minHeight,
      bgColor,
      border,
      radius,
      borderColor,
      ...rest
    } = props;
    return (
      <MuiIconButton
        ref={ref}
        width={width}
        height={height}
        minwidth={minWidth}
        minheight={minHeight}
        bgcolor={bgColor}
        rounded={`${rounded}`}
        border={border}
        bordercolor={borderColor}
        radius={radius}
        {...rest}
      />
    );
  }
);

export { IconButton };
