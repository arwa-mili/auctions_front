import { FC } from "react";
//material
import { IconButton, Tooltip, useTheme } from "@mui/material";
//constants
import { Svgs } from "../../../svgs";
//styles
import {
  Container,
  LeftContainer,
  RightContainer,
  Title,
} from "./formHeader.styles";
//types
import { FormHeaderProps } from "./formHeader.types";

const FormHeader: FC<FormHeaderProps> = (props) => {
  const theme = useTheme();
  //props
  const {
    headerTitle,
    actions,
    closePosition = "left",
    onClickCloseButton,
    renderRight,
  } = props;

  const onClose = () => {
    onClickCloseButton?.();
  };
  //render
  const renderListActions = () => {
    if (renderRight) {
      return renderRight();
    }
    return actions?.map((item, index) => {
      return (
        <Tooltip key={index} title={item.tooltip}>
          <IconButton onClick={item.onClick}>{item.icon}</IconButton>
        </Tooltip>
      );
    });
  };
  const renderTitle = () => {
    if (typeof headerTitle === "string") {
      return <Title>{headerTitle}</Title>;
    }
    return headerTitle;
  };
  const renderButtonClose = () => {
    return (
      <IconButton onClick={onClose}>
        <Svgs.IconXClose stroke={theme.palette.grey[800]} />
      </IconButton>
    );
  };
  return (
    <Container>
      <LeftContainer>
        {closePosition === "left" && renderButtonClose()}
        {renderTitle()}
      </LeftContainer>
      <RightContainer>
        {renderListActions()}
        {closePosition === "right" && renderButtonClose()}
      </RightContainer>
    </Container>
  );
};

export { FormHeader };
