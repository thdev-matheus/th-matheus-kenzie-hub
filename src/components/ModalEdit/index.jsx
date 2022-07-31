import { Container, ModalBox, ModalHeader } from "./styles";
import { IoIosClose } from "react-icons/io";
import { RiCodeView } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import Select from "../Select";
import Input from "../Input";
import Button from "../Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { modalEditSchema } from "../../schema/schema";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export default function ModalEdit({ setModalEdit, setModalDelete, setUser }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onSubmit",
    resolver: yupResolver(modalEditSchema),
  });

  const lang = JSON.parse(localStorage.getItem("@kenzieHub:lang"));

  const onSubmitEdit = ({ status }) => {
    api
      .put(
        `/users/techs/${lang.id}`,
        { status: status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@kenzieHub:token")}`,
          },
        }
      )
      .then((_) => {
        toast.success(`Tecnologia ${lang.title})} alterado com sucesso!`);
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

    setModalEdit(false);
  };

  return (
    <Container>
      <ModalHeader>
        <h4>Tecnologia detalhes</h4>
        <IoIosClose
          onClick={() => {
            setModalEdit(false);
          }}
        />
      </ModalHeader>

      <ModalBox onSubmit={handleSubmit(onSubmitEdit)}>
        <Input
          error={errors.name?.message}
          register={register}
          name="name"
          label="Nome da tecnologia"
          disabled
          icon={RiCodeView}
          placeholder={lang.title}
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

        <div className="buttonContainer">
          <Button pinkSchema type="submit">
            Salvar alterações
          </Button>

          <Button
            onClick={() => {
              setModalDelete(true);
              setModalEdit(false);
            }}
          >
            Excluir
          </Button>
        </div>
      </ModalBox>
    </Container>
  );
}
