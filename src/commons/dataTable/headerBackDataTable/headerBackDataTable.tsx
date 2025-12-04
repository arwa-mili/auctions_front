import {
  Stack,
  Typography,
  Tooltip,
  IconButton,
  Divider,
  useTheme,
} from "@mui/material";
//types
import { HeaderBackDataTableProps } from "./headerBackDataTable.types";

const HeaderBackDataTable: React.FC<HeaderBackDataTableProps> = (props) => {
  const { message, height = 70, actions } = props;
  const theme = useTheme();
  //render
  const renderListActions = () => {
    return actions?.map((item, index) => {
      return (
        <Tooltip key={index} title={item.tooltip}>
          <IconButton onClick={item.onClick}>{item.icon}</IconButton>
        </Tooltip>
      );
    });
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      height={height}
      borderBottom={`1px solid ${theme.palette.divider}`}
    >
      <Typography flex={1} color="inherit" variant="subtitle1" component="div">
        {message}
      </Typography>
      <Stack direction="row" gap={1}>
        {renderListActions()}
      </Stack>
    </Stack>
  );
};

export { HeaderBackDataTable };
