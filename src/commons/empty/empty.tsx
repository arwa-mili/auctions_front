import { FC } from "react";
import { Stack, Typography } from "@mui/material";
//components
import { Avatar } from "../avatar/avatar";
import { Button } from "../button/button";
//styles
import { Container } from "./empty.styles";
//types
import { EmptyProps } from "./empty.types";

const Empty: FC<EmptyProps> = (props) => {
  const {
    image,
    imageWidth,
    imageHeight,
    title,
    message,
    hidePrimaryButton,
    hideSecondaryButton,
    textPrimaryButton,
    textSecondaryButton,
    textPrimaryVariant = "contained",
    textSecondaryVariant = "outlined",
    loadingButtonPrimary,
    loadingButtonSecondary,
    startIconPrimary,
    startIconSecondary,
    sxButtonPrimary,
    sxButtonSecondary,
    onClickPrimaryButton,
    onClickSecondaryButton,
    sx,
    sxTitle,
    sxMessage,
  } = props;

  //render
  return (
    <Container sx={sx}>
      {image && (
        <Avatar
          variant="square"
          alt="empty-image"
          src={image}
          width={imageWidth}
          height={imageHeight}
        />
      )}
      <Typography
        fontSize={24}
        fontWeight="600"
        color="grey.700"
        textAlign="center"
        sx={sxTitle}
      >
        {title}
      </Typography>
      <Typography
        component="div"
        fontSize={14}
        fontWeight="400"
        textAlign="center"
        sx={sxMessage}
      >
        {message}
      </Typography>
      {(textPrimaryButton || textSecondaryButton) && (
        <Stack direction="row" mt={2} gap={1}>
          {textPrimaryButton && !hidePrimaryButton && (
            <Button
              size="large"
              sx={sxButtonPrimary}
              variant={textPrimaryVariant}
              loading={loadingButtonPrimary}
              startIcon={startIconPrimary}
              onClick={onClickPrimaryButton}
            >
              {textPrimaryButton}
            </Button>
          )}
          {textSecondaryButton && !hideSecondaryButton && (
            <Button
              size="large"
              sx={sxButtonSecondary}
              variant={textSecondaryVariant}
              loading={loadingButtonSecondary}
              startIcon={startIconSecondary}
              onClick={onClickSecondaryButton}
            >
              {textSecondaryButton}
            </Button>
          )}
        </Stack>
      )}
    </Container>
  );
};
export { Empty };
