import { Container, ModalBox, ModalHeader } from "./styles";
import { IoIosClose } from "react-icons/io";
import { RiCodeView } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import Select from "../Select";
import Input from "../Input";
import Button from "../Button";
import { toast } from "react-toastify";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { modalAddSchema } from "../../schema/schema";
import { api } from "../../services/api";

export default function ModalAdd({ setUser, setModalAdd }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onSubmit",
    resolver: yupResolver(modalAddSchema),
  });

  const onSubmitAdd = (data) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@kenzieHub:token")}`,
        },
      })
      .then((res) => {
        toast.success("Tecnologia adicionada com sucesso!");
      })
      .catch((_) => {
        toast.error("Algo deu errado. Tente novamente mais tarde.");
      });

    setTimeout(() => {
      api
        .get(`/users/${localStorage.getItem("@kenzieHub:userID")}`)
        .then((res) => {
          localStorage.setItem("@kenzieHub:user", JSON.stringify(res.data));
          setUser(JSON.parse(localStorage.getItem("@kenzieHub:user")));
        });
    }, 1000);

    setModalAdd(false);
  };

  return (
    <Container>
      <ModalHeader>
        <h4>Cadastrar tecnologia</h4>
        <IoIosClose
          onClick={() => {
            setModalAdd(false);
          }}
        />
      </ModalHeader>

      <ModalBox onSubmit={handleSubmit(onSubmitAdd)}>
        <Input
          error={errors.title?.message}
          register={register}
          name="title"
          label="Nome"
          icon={RiCodeView}
          placeholder="Nome da tecnologia"
        />

        <Select
          error={errors.status?.message}
          register={register}
          name="status"
          label="Selecionar status"
          icon={ImStatsDots}
          optionValueDefault="Iniciante"
          optionDefault="Iniciante"
        >
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </Select>

        <Button pinkSchema type="submit">
          Cadastrar Tecnologia
        </Button>
      </ModalBox>
    </Container>
  );
}
