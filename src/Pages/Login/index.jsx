import { Container, HeaderContainer, LoginBox } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schema/schema";
import { api } from "../../services/api";

import { FiMail, FiLock } from "react-icons/fi";
import logo from "../../assets/logo.svg";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  localStorage.clear();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onSubmit",
    resolver: yupResolver(loginSchema),
  });

  const handleClick = (path) => {
    history.push(path);
  };

  const onSubmitLogin = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        toast.success(`Bem vindo(a), ${res.data.user.name}!`);
        localStorage.setItem("@kenzieHub:user", JSON.stringify(res.data.user));
        localStorage.setItem("@kenzieHub:userID", res.data.user.id);
        localStorage.setItem("@kenzieHub:token", res.data.token);
        handleClick(`/dashboard/${res.data.user.name}}`);
      })
      .catch();
  };

  return (
    <Container>
      <HeaderContainer>
        <img src={logo} alt="" />
      </HeaderContainer>
      <LoginBox onSubmit={handleSubmit(onSubmitLogin)}>
        <h3>Login</h3>
        <Input
          error={errors.email?.message}
          register={register}
          name="email"
          label="E-mail"
          icon={FiMail}
          placeholder="Digite aqui o seu e-mail"
        />

        <Input
          error={errors.password?.message}
          type="password"
          register={register}
          name="password"
          label="Senha"
          icon={FiLock}
          placeholder="Crie sua senha"
        />

        <Button pinkSchema type="submit">
          Entrar
        </Button>

        <small>Ainda não possui uma conta?</small>

        <Button
          className="registerButtonLog"
          onClick={() => {
            handleClick("/register");
          }}
        >
          Cadastre-se!
        </Button>
      </LoginBox>
    </Container>
  );
}
