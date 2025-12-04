import { FC } from "react";
import { Stack, Typography } from "@mui/material";
//styles
import { Paper } from "./cardNotFound.styles";

const CardNotFound: FC = () => {
  return (
    <Paper variant="outlined">
      <Typography variant="caption">404 error</Typography>
      <Typography variant="h1">Page not found</Typography>
      <Stack>
        <Typography variant="subtitle1" textAlign="center">
          Sorry, the page you are looking for doesn't exist.
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign="center">
          Here are some helpful links:
        </Typography>
      </Stack>
    </Paper>
  );
};

export { CardNotFound };
