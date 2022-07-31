import { Container, ModalBox, ModalHeader } from "./styles";
import { IoIosClose } from "react-icons/io";
import Button from "../Button";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export default function ModalDelete({ setModalDelete, setUser }) {
  const lang = JSON.parse(localStorage.getItem("@kenzieHub:lang"));

  const onSubmitDelete = () => {
    api
      .delete(`/users/techs/${lang.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@kenzieHub:token")}`,
        },
      })
      .then((_) => {
        toast.success(`Tecnologia ${lang.title}, excluída com sucesso!`);
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
    }, 1500);

    setModalDelete(false);
  };

  return (
    <Container>
      <ModalHeader>
        <h4>Excluir tecnologia</h4>
        <IoIosClose
          onClick={() => {
            setModalDelete(false);
          }}
        />
      </ModalHeader>

      <ModalBox
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitDelete();
        }}
      >
        <h4>Deseja excluir React JS?</h4>

        <div>
          <Button pinkSchema type="submit">
            Deletar Tecnologia
          </Button>

          <Button
            onClick={() => {
              setModalDelete(false);
            }}
          >
            Cancelar
          </Button>
        </div>
      </ModalBox>
    </Container>
  );
}
