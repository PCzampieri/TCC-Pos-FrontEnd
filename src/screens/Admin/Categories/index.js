import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Table, Icon, Button, Confirm } from 'semantic-ui-react'

import { TableBg } from './CategoriesStyles'

import Header from '../Header'
import api from '../../../services/api'

const Categories = pros => {
  const [ categories, setCategories ] = useState([])
  const [ open, setOpen ] = useState(false)
  const [ catId, setCatId ] = useState(0)

  useEffect(() => {
    async function fectData() {
      const cats = await api.get('/categories')
      setCategories(cats.data.data)
    }
    
    fectData()
  }, [])

  const show = (id) => {
    setCatId(id)
    setOpen(true)
  }
  
  const handleCancel = () => {    
    setOpen(false)
  }

  const handleDelete = async() => {
    const id = catId    
    await api.delete(`/categories/${id}`)
    setOpen(false)
    loadCategories()
  }

  const loadCategories = async() => {
    const cats = await api.get('/categories')
    setCategories(cats.data.data)
  }
  
  return (
    <div>
    <Header /> 
    <Container>
      <TableBg>
      <h1>Categorias</h1>
      <Link to='/admin/newcategory'><Button primary>Nova Categoria</Button></Link>
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Categorias</Table.HeaderCell>
            <Table.HeaderCell>Ações</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
        {
          categories.map(cat => (
            <Table.Row key={cat.id}>
              <Table.Cell>{cat.name}</Table.Cell>
              <Table.Cell collapsing textAlign='right'>               
                <Link to={{ pathname: `/admin/editcategory/${cat.id}`}}>
                  <Button basic color='blue' ><Icon name='edit outline'/>Editar </Button>&nbsp;
                </Link>              
                <Button basic color='red' onClick={() => show(cat.id)}><Icon name='erase' />Remover</Button>
                <Confirm 
                  header='Confirma a Remoção?' 
                  content='Isso irá apagar a categoria selecionada.' 
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

export default Categories