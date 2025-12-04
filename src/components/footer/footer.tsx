import { createRef, FC } from "react";
import {
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// core

// styles
import { Container, IconsContainer } from "./footer.styles";
//types
import { FooterProps } from "./footer.types";
import { Svgs } from "svgs";
import { Avatar, IconButton, Modal } from "index";

const Footer: FC<FooterProps> = (props) => {
  const {
    sx,
    logo,
    labelLeft = "© 2023 Your Company. All rights reserved.",
    labelTermsOfUse = "Term of use",
  } = props;
  const refTermsOfuse = createRef<Modal>();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const onClickShowTermsOfuse = () => {
    refTermsOfuse.current?.show();
  };

  return (
    <>
      <Container sx={sx}>
        <Typography fontSize={12} color="grey.400">
          {labelLeft}
        </Typography>
        {logo && <Avatar variant="square" width={100} alt="logo" src={logo} />}
        <Stack direction="row" gap={2} alignItems="center">
          <Link
            component="button"
            underline="hover"
            color="grey.400"
            fontSize={12}
            onClick={onClickShowTermsOfuse}
          >
            {labelTermsOfUse}
          </Link>
          <IconsContainer>
            <IconButton radius="50%">
              <Svgs.IconGooglePlay />
            </IconButton>
            <IconButton radius="50%">
              <Svgs.IconAppleStore />
            </IconButton>
          </IconsContainer>
        </Stack>
      </Container>
      <Modal
        ref={refTermsOfuse}
        maxWidth="sm"
        title={labelTermsOfUse}
        fullScreen={matches}
      >
      </Modal>
    </>
  );
};

export { Footer };
