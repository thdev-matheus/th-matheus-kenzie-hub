import { Container, HeaderContainer, RegisterBox } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schema/schema";
import { api } from "../../services/api";

import { FiUser, FiMail, FiLock, FiPhone } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { MdViewModule } from "react-icons/md";
import logo from "../../assets/logo.svg";

export default function Register() {
  localStorage.clear();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onSubmit",
    resolver: yupResolver(registerSchema),
  });

  const handleClick = (path) => {
    history.push(path);
  };

  const onSubmitRegister = (newUser) => {
    delete newUser.confirmPassword;
    api
      .post("/users", newUser)
      .then((_) => {
        toast.success("Usuário cadastrado com sucesso!");
        setTimeout(() => {
          toast.success("Faça Login para continuar.");
          handleClick("/login");
        }, 1500);
      })
      .catch((err) => {
        switch (err.response.data.message) {
          case "Email already exists":
            return toast.error(
              "Este e-mail já consta em nosso banco de dados!"
            );

          default:
            return toast.error(
              "Algo deu errado! Por favor tente novamente mais tarde!"
            );
        }
      });
  };

  return (
    <Container>
      <HeaderContainer>
        <img src={logo} alt="" />
        <div>
          <Button
            onClick={() => {
              handleClick("/");
            }}
          >
            Inicio
          </Button>
        </div>
      </HeaderContainer>
      <RegisterBox onSubmit={handleSubmit(onSubmitRegister)}>
        <h3>Crie sua conta</h3>
        <small>Rápido e grátis, vamos nessa</small>
        <Input
          error={errors.name?.message}
          register={register}
          name="name"
          label="Nome"
          icon={FiUser}
          placeholder="Digite aqui o seu nome"
        />

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

        <Input
          error={errors.confirmPassword?.message}
          type="password"
          register={register}
          name="confirmPassword"
          label="Confirmar Senha"
          icon={FiLock}
          placeholder="Confirme sua senha"
        />

        <Input
          error={errors.bio?.message}
          register={register}
          name="bio"
          label="Bio"
          icon={FaQuoteRight}
          placeholder="Digite aqui o seu e-mail"
        />

        <Input
          error={errors.contact?.message}
          register={register}
          name="contact"
          label="Contato"
          icon={FiPhone}
          placeholder="Número para contato"
        />

        <Select
          error={errors.course_module?.message}
          register={register}
          name="course_module"
          label="Módulo"
          icon={MdViewModule}
          optionValueDefault="Primeiro módulo (Introdução ao Frontend)"
          optionDefault="Primeiro módulo"
        >
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo
          </option>
        </Select>

        <Button pinkSchema type="submit">
          Cadastrar
        </Button>

        <small>Já é cadastrado?</small>

        <Button
          className="loginButtonReg"
          onClick={() => {
            handleClick("/login");
          }}
        >
          Faça login!
        </Button>
      </RegisterBox>
    </Container>
  );
}
