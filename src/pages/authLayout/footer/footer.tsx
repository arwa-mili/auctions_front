import { Link, Stack, Typography } from "@mui/material";
import { FC } from "react";
//components
//styles
import { Container } from "./footer.styles";
import { Svgs } from "index";

const Footer: FC = () => {
  //render
  return (
    <Container>
      <Typography fontSize={14} color="grey.600">
        © 2023 AUCTION
      </Typography>
      <Stack direction="row" gap={1}>
        <Svgs.IconMail01 fontSize="small" sx={{ color: "grey.600" }} />
        <Link href="mailto:mili.arwa.ma@gmail.com" fontSize={14} color="grey.600">
          mili.arwa.ma@gmail.com
        </Link>
      </Stack>
    </Container>
  );
};

export default Footer;
