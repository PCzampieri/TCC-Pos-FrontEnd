import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Table, Icon, Button, Confirm } from 'semantic-ui-react'

import { TableBg } from './UsersStyles'

import Header from '../Header'
import api from '../../../services/api'

const UsersIndex = pros => {
  const [ users, setUsers ] = useState([])
  const [ open, setOpen ] = useState(false)
  const [ userId, setUserId ] = useState(0)

  useEffect(() => {
    async function fectData() {
      const usersApi = await api.get('/users')      
      setUsers(usersApi.data)
    }
    
    fectData()
  }, [])

  const show = (id) => {
    setUserId(id)
    setOpen(true)
  }
  
  const handleCancel = () => {    
    setOpen(false)
  }

  const handleDelete = async() => {
    const id = userId    
    await api.delete(`/users/${id}`)
    setOpen(false)
    loadUsers()
  }

  const loadUsers = async() => {
    const users = await api.get('/users')
    setUsers(users.data.data)
  }
  
  return (
    <div>
    <Header /> 
    <Container>
      <TableBg>
      <h1>Usuários</h1>
      <Link to='/admin/newUser'><Button primary>Novo Usuário</Button></Link>
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Usuário</Table.HeaderCell>
            <Table.HeaderCell>E-mail</Table.HeaderCell>            
            <Table.HeaderCell>Ações</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
        {
          users.map(user => (
            <Table.Row key={user.id}>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell collapsing textAlign='right'>               
                <Link to={{ pathname: `/admin/editUser/${user.id}`}}>
                  <Button basic color='blue' ><Icon name='edit outline'/>Editar </Button>&nbsp;
                </Link>              
                <Button basic color='red' onClick={() => show(user.id)}><Icon name='erase' />Remover</Button>
                <Confirm 
                  header='Confirma a Remoção?' 
                  content='Isso irá apagar o Usuário selecionado.' 
                  open={open} onCancel={handleCancel} onConfirm={handleDelete} 
                />
              </Table.Cell>
            </Table.Row>
          ))
        }
        </Table.Body>
      </Table>
      </TableBg>
    </Container>
    </div>
  )
}

export default UsersIndex