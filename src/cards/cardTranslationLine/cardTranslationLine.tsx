import { FC } from "react";
import { Stack, Tooltip } from "@mui/material";
//components
import { Avatar } from "../../commons";
//styles
import { Container, Content } from "./cardTranslationLine.styles";
//types
import { CardTranslationLineProps } from "./cardTranslationLine.types";

const CardTranslationLine: FC<CardTranslationLineProps> = (props) => {
  const { children, language, sx } = props;

  return (
    <Container sx={sx}>
      <Tooltip arrow title={language.native}>
        <Stack height="fit-content">
          <Avatar
            alt={language.native || "language-flag"}
            src={language.flag}
            width={25}
            height={25}
          />
        </Stack>
      </Tooltip>
      <Content>{children}</Content>
    </Container>
  );
};

export { CardTranslationLine };
