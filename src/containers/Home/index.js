
import React, { useState, useRef  } from "react";
import { useNavigate } from 'react-router-dom';

import axios from "axios";

import People from "../../Assets/people.svg";
import Arrow from "../../Assets/Arrow.svg";

import H1 from "../../components/Title"
import ContainerItens  from "../../components/ContainerItens"
import Button from '../../components/Button'

import {
  Container,
  Image,
  InputLabel,
  Input,
} from "../Home/styles";

function Home() {
  const [user, setUsers] = useState([]);
  const navigate = useNavigate()

  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });
    
    setUsers([...user, newUser]);
    
    navigate('/usuarios') 

  }

  return (
    <Container>
      <Image alt="People-Logo" src={People} />
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button to="/usuarios" onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>

      </ContainerItens>
    </Container>
  );
}

export default Home;
