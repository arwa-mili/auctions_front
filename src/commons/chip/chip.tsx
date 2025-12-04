import { FC } from "react";
//styles
import { MuiChip } from "./chip.styles";
//Types
import { ChipProps } from "./chip.types";

const Chip: FC<ChipProps> = (props) => {
  const { bgColor, labelColor, labelFontSize, ...rest } = props;

  //render
  return (
    <MuiChip
      bgcolor={bgColor}
      labelfontsize={labelFontSize}
      labelcolor={labelColor}
      {...rest}
    />
  );
};

export { Chip };
