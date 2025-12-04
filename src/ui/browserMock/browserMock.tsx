import { FC, useMemo } from "react";
import { Typography } from "@mui/material";
import { Svgs } from "../../svgs";
import { Avatar } from "../../commons";
import Logo from "./logo";
//styles
import {
  Circle,
  Container,
  SubHeader,
  Header,
  HeaderLeft,
  HeaderRight,
  Mask,
  SearchBar,
  Content,
} from "./browserMock.styles";
//types
import { BrowserMockProps } from "./browserMock.types";

const BrowserMock: FC<BrowserMockProps> = (props) => {
  const { favicon, title, url, children, mode = "LIGHT" } = props;
  const icon = useMemo(
    () => (typeof favicon === "string" ? favicon : favicon?.preview),
    [favicon]
  );
  const { colorText, colorIcon } = useMemo(
    () => ({
      colorText: mode === "DARK" ? "white" : "black",
      colorIcon: mode === "DARK" ? "white" : "action",
    }),
    [mode]
  );
  return (
    <Container mode={mode}>
      <Header mode={mode}>
        <HeaderLeft mode={mode}>
          <Mask mode={mode}>
            {["#FF5F57", "#FFBD2E", "#28C840"].map((color, idx) => (
              <Circle key={idx} background={color} />
            ))}
          </Mask>
        </HeaderLeft>
        <HeaderRight mode={mode}>
          {icon ? (
            <Avatar
              variant="square"
              alt="Favicon"
              src={icon || " "}
              width={24}
              height={24}
              sx={{ fontSize: 12 }}
            />
          ) : (
            <Logo sx={{ width: 24, height: 24 }} />
          )}
          <Typography fontSize={14} noWrap flex={1} color={colorText}>
            {title}
          </Typography>
          <Svgs.IconXClose sx={{ fontSize: 14, color: colorIcon }} />
        </HeaderRight>
      </Header>
      <SubHeader mode={mode}>
        <Svgs.IconArrowLeft fontSize="small" sx={{ color: colorIcon }} />
        <Svgs.IconArrowRigth fontSize="small" sx={{ color: colorIcon }} />
        <Svgs.IconHome01 fontSize="small" sx={{ color: colorIcon }} />
        <SearchBar mode={mode}>
          <Svgs.IconInfoCircle fontSize="small" sx={{ color: colorIcon }} />
          <Typography color={colorText}>{url}</Typography>
        </SearchBar>
      </SubHeader>
      <Content mode={mode}>{children}</Content>
    </Container>
  );
};

export { BrowserMock };
