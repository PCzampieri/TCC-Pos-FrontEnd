import React from 'react'
import { Link } from 'react-router-dom'

import { Image } from 'semantic-ui-react'

import { Nav, BarraMenu } from './NavBarMenuStyles'

import logonode from '../../assets/images/logoNode.png'
import logoreact from '../../assets/images/logoReact.png'

const NavBarMenu = () => {
  return (
    <div>
    <Link to='/'>
    <BarraMenu>        
      <Image.Group size='mini' style={{ marginRight: '30px'}}>                
        <Image src={logonode} style={{ marginBottom: 0}}  />
      </Image.Group>
      <h1>
        DevJS | BLOG         
      </h1>    
      <Image.Group size='mini' style={{ marginLeft: '30px'}}>
        <Image src={logoreact} style={{ marginBottom: 0}} />              
      </Image.Group>          
    </BarraMenu> 
  </Link>
      <Nav>
        <label htmlFor='toggle'>&#9776;</label>
        <input type='checkbox' id='toggle' />
        <div className='menu'>
          <Link to='/'>Home</Link>
          <Link to='/postscategory'>NodeJS</Link>
          <a href='#'>ReactJS</a>
          <a href='#'>React Native</a>        
        </div>      
      </Nav>
     
    </div>
  )  
}

export default NavBarMenu