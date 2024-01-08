import React, { useState } from "react"; //useRef é outra opção do React Hook no lugar do evento onChange
import { useHistory } from "react-router-dom";
import axios from 'axios'

import People from '../../assets/people.svg'



import { Container, H1, Image, ContainerItens, InputLabel, Input, Button } from './styles'

//JSX
function App() {

  const [users, setUsers] = useState([]);
  const [name, setName] = useState();
  const [age, setAge] = useState();

  const history = useHistory()

  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", { name, age })
    setUsers([...users, newUser]);

    history.push('/usuarios')


  }


 





  function changeInputName(event) {
    setName(event.target.value)
  }

  function changeInputAge(event) {
    setAge(event.target.value)
  }

 

  return (
    <Container>
      <Image src={People} alt="logo-people" />
      <ContainerItens>

        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input onChange={changeInputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input onChange={changeInputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>Cadastrar</Button>

       


      </ContainerItens>

    </Container>
  );
}

export default App
