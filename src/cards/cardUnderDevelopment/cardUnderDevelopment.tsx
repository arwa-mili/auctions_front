import { FC } from "react";
import { Stack, Typography } from "@mui/material";
//components
import { Button } from "../../commons";
//styles
import { Paper } from "./cardUnderDevelopment.styles";

const CardUnderDevelopment: FC = () => {
  return (
    <Paper variant="outlined">
      <Typography variant="h1">Under development</Typography>
      <Stack>
        <Typography variant="subtitle1" textAlign="center">
          The page you are looking for doesn't exist.
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign="center">
          Here are some helpful links
        </Typography>
      </Stack>
      <Button variant="contained">Take me home</Button>
    </Paper>
  );
};

export { CardUnderDevelopment };
