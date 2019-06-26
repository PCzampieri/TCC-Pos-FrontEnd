import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Table, Icon, Button, Confirm } from 'semantic-ui-react'

import { TableBg } from './HomeAdminStyles'

import Header from '../Header'
import api from '../../../services/api'

const HomeAdmin = props => {
  const [ posts, setPosts ] = useState([])
  const [ open, setOpen ] = useState(false)
  const [ postId, setPostId ] = useState(0)

  useEffect(() => {
    async function fectData() {
      const postsApi = await api.get('/posts')
      setPosts(postsApi.data.data)      
    }
    
    fectData()
  }, [])

  const show = (id) => {
    setPostId(id)
    setOpen(true)
  }
  
  const handleCancel = () => {    
    setOpen(false)
  }

  const handleDelete = async() => {
    const id = postId
    await api.delete(`/posts/${id}`)
    setOpen(false)
    loadPosts()
  }

  const loadPosts = async() => {
    const posts = await api.get('/posts')
    setPosts(posts.data.data)
  }
  
  return (
    <div>
      <Header /> 
      <Container>
        <TableBg>
          <h1>Posts <Icon name='bookmark outline'/></h1>
          <Link to='/admin/newpost'><Button primary>Novo Post</Button></Link>
          <Table celled striped>
            <Table.Header>
              <Table.Row>                
                <Table.HeaderCell>Título</Table.HeaderCell>
                <Table.HeaderCell>Categoria</Table.HeaderCell>
                <Table.HeaderCell>Data</Table.HeaderCell>
                <Table.HeaderCell>Ações</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
            {
              posts.map(post => (
                <Table.Row key={post.id}>
                  <Table.Cell>{post.title}</Table.Cell>
                  <Table.Cell>{post.category}</Table.Cell>
                  <Table.Cell>{post.date}</Table.Cell>
                  <Table.Cell collapsing textAlign='right'>               
                    <Link to={{ pathname: `/admin/editpost/${post.id}`}}>
                      <Button basic color='blue' ><Icon name='edit outline'/>Editar </Button>&nbsp;
                    </Link>              
                    <Button basic color='red' onClick={() => show(post.id)}><Icon name='erase' />Remover</Button>
                    <Confirm 
                      header='Confirma a Remoção?' 
                      content='Isso irá apagar o Post selecionado.' 
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

export default HomeAdmin