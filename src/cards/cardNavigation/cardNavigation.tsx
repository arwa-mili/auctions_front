import { FC } from "react";
import { Typography } from "@mui/material";
//styles
import { Paper } from "./cardNavigation.styles";
//types
import { CardNavigationProps } from "./cardNavigation.types";

const CardNavigation: FC<CardNavigationProps> = (props) => {
  const { icon, title, description, onClick } = props;
  return (
    <Paper variant="outlined" onClick={onClick}>
      {icon}
      <Typography fontSize={16} color="text.primary">
        {title}
      </Typography>
      <Typography fontSize={14} color="text.secondary">
        {description}
      </Typography>
    </Paper>
  );
};

export { CardNavigation };
