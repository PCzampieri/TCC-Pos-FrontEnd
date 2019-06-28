import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'

import { Menu, Container, Image } from 'semantic-ui-react'

import logoBlog from '../../../assets/images/logoBlog.png'
import api from '../../../services/api'
import { removeJwt } from '../../../services/auth'

const Header = props => {
  const [ user, setUser ] = useState('')
  const [ logout, setLogout ] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const userApi = await api.get('/users/me')
      setUser(userApi.data.name)
    }
    fetchData()
    return () => {}

  }, [])

  const handlelogout = () => {
    removeJwt()
    setLogout(true)    
  }

  return (
    <div>
      { logout && <Redirect to='/' /> } 
      <Container>     
        <Menu>  
          <Menu.Item style={{padding: '0'}}>
            <Link to='/'><Image src={logoBlog} alt='logo' size='small' /></Link>
          </Menu.Item> 
          <Menu.Item as={Link} to='/admin/homeadmin'>Home</Menu.Item> 
          <Menu.Item as={Link} to='/admin/users'>Usuários</Menu.Item> 
          <Menu.Item as={Link} to='/admin/categories'>Categorias</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item><b>{user}</b></Menu.Item>
            <Menu.Item onClick={handlelogout}>Sair</Menu.Item>
          </Menu.Menu> 
        </Menu> 
      </Container>
    </div>
  )
}

export default Header