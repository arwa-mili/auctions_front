import { FC } from "react";
import ShowMoreText from "react-show-more-text";
//types
import { ShowMoreProps } from "./showMore.types";

const ShowMore: FC<ShowMoreProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <ShowMoreText
      lines={2}
      more="Show more"
      less="Show less"
      expanded={false}
      truncatedEndingComponent="... "
      {...rest}
    >
      {children}
    </ShowMoreText>
  );
};

export { ShowMore };
