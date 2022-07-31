import {
  Card,
  Container,
  HeaderContainer,
  HeaderPortfolio,
  MainPortfolio,
  PortfolioContainer,
  UserContainer,
} from "./styles";
import Button from "../../components/Button";
import ModalAdd from "../../components/ModalAdd";

import { FaPlus, FaTrashAlt } from "react-icons/fa";
import logo from "../../assets/logo.svg";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import ModalEdit from "../../components/ModalEdit";
import ModalDelete from "../../components/ModalDelete";

export default function Dashboard() {
  const history = useHistory();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@kenzieHub:user"))
  );
  const [techs, setTechs] = useState(user.techs);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  useEffect(() => {
    setTechs(user.techs);
  }, [user]);

  const handleClick = (path) => {
    history.push(path);
  };

  const token = localStorage.getItem("@kenzieHub:token");
  //const user = JSON.parse(localStorage.getItem("@kenzieHub:user"));

  !token && history.push("/");

  return (
    <>
      {modalAdd && <ModalAdd setUser={setUser} setModalAdd={setModalAdd} />}
      {modalEdit && (
        <ModalEdit
          setUser={setUser}
          setModalEdit={setModalEdit}
          setModalDelete={setModalDelete}
        />
      )}
      {modalDelete && (
        <ModalDelete setUser={setUser} setModalDelete={setModalDelete} />
      )}
      <Container>
        <HeaderContainer>
          <img src={logo} alt="" />
          <div>
            <Button
              onClick={() => {
                localStorage.clear();
                handleClick("/");
              }}
            >
              Sair
            </Button>
          </div>
        </HeaderContainer>

        <hr />

        <UserContainer>
          <h3>Olá, {user.name}!</h3>
          <small>{user.course_module}</small>
        </UserContainer>

        <hr />

        <PortfolioContainer>
          <HeaderPortfolio>
            <h3>Tecnologias</h3>
            <FaPlus
              onClick={() => {
                setModalAdd(true);
              }}
            />
          </HeaderPortfolio>

          <MainPortfolio>
            {techs?.map((lang) => {
              return (
                <Card
                  title={lang.title}
                  className="card"
                  id={lang.id}
                  key={lang.id}
                >
                  <h4
                    onClick={(e) => {
                      let langID = e.target.closest(".card").id;
                      let lang = techs.filter((tech) => tech.id === langID)[0];

                      localStorage.setItem(
                        "@kenzieHub:lang",
                        JSON.stringify(lang)
                      );
                      setModalEdit(true);
                    }}
                  >
                    {lang.title}
                  </h4>
                  <div>
                    <small>{lang.status}</small>
                    <FaTrashAlt
                      onClick={(e) => {
                        let langID = e.target.closest(".card").id;
                        let lang = techs.filter(
                          (tech) => tech.id === langID
                        )[0];

                        localStorage.setItem(
                          "@kenzieHub:lang",
                          JSON.stringify(lang)
                        );
                        setModalDelete(true);
                      }}
                    />
                  </div>
                </Card>
              );
            })}
          </MainPortfolio>
        </PortfolioContainer>
      </Container>
    </>
  );
}
