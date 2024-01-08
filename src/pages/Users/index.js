import React, { useState, useEffect } from "react"; //useRef é outra opção do React Hook no lugar do evento onChange
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import Avatar from '../../assets/avatar.svg'

import Trash from '../../assets/trash.svg'

import { Container, H1, Image, ContainerItens, Button, User, } from './styles'

//JSX
function Users() {

  const [users, setUsers] = useState([]);

  const history = useHistory()
  


  useEffect(() => {
    async function sexyUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users")
      setUsers(newUsers)
    }

    sexyUsers()
  }, [])




  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)

  }

  function goBackPage(){
    history.push('/')
  }

  return (
    <Container>
      <Image src={Avatar} alt="logo-people" />
      <ContainerItens>

        <H1>Usuários</H1>


        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> - <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="lata-de-lixo" /></button>
            </User>
          ))}
        </ul>

        <Button onClick={goBackPage} >Voltar</Button>

      </ContainerItens>

    </Container>
  );
}

export default Users
