import React, { useState } from "react"; //useRef é outra opção do React Hook no lugar do evento onChange

import People from './assets/people.svg'

import Trash from './assets/trash.svg'

import { Container, H1, Image, ContainerItens, InputLabel, Input, Button, User, } from './styles'

//JSX
function App() {

  const [users, setUsers] = useState([]);
  const [name, setName] = useState();
  const [age, setAge] = useState();

  function addNewUser() {
    //Spread operator ...
    setUsers([ ...users,{id: Math.random(), name, age}])
  }

  function changeInputName(event) {
    setName(event.target.value)
  }

  function changeInputAge(event) {
    setAge(event.target.value)
  }

  function deleteUser(userId) {
    const newUsers = users.filter( user => user.id !== userId)
    setUsers(newUsers)

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

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> - <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="lata-de-lixo" /></button>
            </User>
          ))}
        </ul>

      </ContainerItens>

    </Container>
  );
}

export default App
