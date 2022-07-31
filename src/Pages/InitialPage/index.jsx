import Button from "../../components/Button";
import { Container, ButtonBox } from "./styles";

import { useHistory } from "react-router-dom";

import logo from "../../assets/logo.svg";

export default function InitialPage() {
  const history = useHistory();

  const handleClick = (path) => {
    return history.push(path);
  };

  return (
    <Container>
      <div className="mainBox">
        <h2>Bem vindo(a) à:</h2>
        <img src={logo} alt="" />
        <ButtonBox>
          <Button pinkSchema onClick={() => handleClick("/login")}>
            Login
          </Button>
          <Button onClick={() => handleClick("/register")}>Cadastro</Button>
        </ButtonBox>
      </div>
    </Container>
  );
}
