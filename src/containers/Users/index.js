import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Avatar from "../../Assets/avatar.svg";
import Arrow from "../../Assets/Arrow.svg";
import Trash from "../../Assets/trash.svg";

import H1 from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

import { Container, Image, User  } from "./styles";

function Users() {
  const [Users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUser } = await axios.get("http://localhost:3001/users");
      setUsers(newUser);
    }

    fetchUsers();
  }, []);

  async function excluirUsuario(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);

    const newUser = user.filter((user) => user.id !== userId);

    setUsers(newUser);
  }

  function goBackPage() {
    navigate("/");
  }

  return (
    <Container>
      <Image alt="People-Logo" src={Avatar} />
      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {Users.map(user => (
            <user key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => excluirUsuario(user.id)}>
                <img src={Trash} alt="lixeira" />
              </button>
            </user>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>
          <img alt="seta" src={Arrow} /> Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Users;
