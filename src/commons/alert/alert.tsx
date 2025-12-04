import { FC, forwardRef, useMemo } from "react";
//material
import { Stack, Typography, useTheme } from "@mui/material";
//styles
import { Container } from "./alert.styles";
//Types
import { AlertProps } from "./alert.types";

const Alert = forwardRef((props: AlertProps, ref) => {
  const theme = useTheme();
  const {
    isVisible = true,
    type,
    iconComponent,
    title,
    message,
    subMessage,
    sx,
  } = props;

  const { background, borderColor, textColor } = useMemo(() => {
    if (type === "warning") {
      return {
        background: theme.palette.warning[50],
        borderColor: theme.palette.warning.main,
        textColor: theme.palette.warning.dark,
      };
    } else if (type === "error") {
      return {
        background: theme.palette.error[50],
        borderColor: theme.palette.error.main,
        textColor: theme.palette.error.dark,
      };
    } else if (type === "info") {
      return {
        background: theme.palette.info[50],
        borderColor: theme.palette.info.main,
        textColor: theme.palette.info.dark,
      };
    }
    return {
      background: theme.palette.primary[50],
      borderColor: theme.palette.primary.main,
      textColor: theme.palette.primary.dark,
    };
  }, [type]);

  if (!isVisible) return null;
  //render
  return (
    <Container ref={ref} bgcolor={background} borderColor={borderColor} sx={sx}>
      <Stack>{iconComponent}</Stack>
      <Stack justifyContent="center" gap={1}>
        {title && (
          <Typography fontSize={14} fontWeight={600} color={textColor}>
            {title}
          </Typography>
        )}
        {message && (
          <Typography component="div" fontSize={14} color={textColor}>
            {message}
          </Typography>
        )}
        {subMessage && (
          <Typography component="span" fontSize={14} color={textColor}>
            {subMessage}
          </Typography>
        )}
      </Stack>
    </Container>
  );
});

export { Alert };
