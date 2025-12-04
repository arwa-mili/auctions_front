import { FC } from "react";
import { useNavigate } from "react-router-dom";
// constants
import { RoutesEnum } from "@constants";
//contextAPI
import { useGlobalContext } from "@contextAPI";
//components
//api
//styles
import { Container } from "./header.styles";
//types
import { HeaderProps } from "./header.types";
import { Avatar, Select } from "index";


const Header: FC<HeaderProps> = (props) => {
  const global = useGlobalContext();
  const navigate = useNavigate();



  //functions
  const onClickHome = () => {
    navigate(RoutesEnum.ROOT);
  };

  //render
  return (
    <Container>
      <Avatar
        alt="logo"
        src="/logo-2.svg"
        variant="square"
        width={170}
        sx={{ cursor: "pointer" }}
        onClick={onClickHome}
      />
    </Container>
  );
};

export default Header;
