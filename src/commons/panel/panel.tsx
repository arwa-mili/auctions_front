import { FC } from "react";
import { Typography } from "@mui/material";
//styles
import { Content, Header, Paper } from "./panel.styles";
//Types
import { PanelProps } from "./panel.types";

const Panel: FC<PanelProps> = (props) => {
  const {
    title,
    variant = "outlined",
    children,
    sxContent,
    right,
    headerWithBorder,
    sxTitle,
    sx,
    sxHeader,
  } = props;
  //render
  const renderTitle = () => {
    if (!title) return;
    if (typeof title === "object") {
      return (
        <Header sx={sxHeader} headerWithBorder={headerWithBorder}>
          {title}
          {right}
        </Header>
      );
    }
    return (
      <Header sx={sxHeader} headerWithBorder={headerWithBorder}>
        <Typography
          fontSize={18}
          fontWeight="600"
          color="grey.800"
          flex={1}
          sx={sxTitle}
        >
          {title}
        </Typography>
        {right}
      </Header>
    );
  };
  return (
    <Paper variant={variant} sx={sx}>
      {renderTitle()}
      <Content sx={sxContent}>{children}</Content>
    </Paper>
  );
};

export { Panel };
