import React from 'react'
import { Link} from 'react-router-dom'

import { Menu, Container, Image } from 'semantic-ui-react'

import logoBlog from '../../../assets/images/logoBlog.png'

const Header = props => {
  return (
    <div> 
      <Container>     
        <Menu>  
          <Menu.Item style={{padding: '0'}}>
            <Image src={logoBlog} alt='logo' size='small' />
          </Menu.Item> 
          <Menu.Item as={Link} to='/admin/homeadmin'>Home</Menu.Item> 
          <Menu.Item as={Link} to='/admin/users'>Usuários</Menu.Item> 
          <Menu.Item as={Link} to='/admin/categories'>Categorias</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>User</Menu.Item>
            <Menu.Item>Sair</Menu.Item>
          </Menu.Menu> 
        </Menu> 
      </Container>
    </div>
  )
}

export default Header