import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'

import { MainHeader, HeaderContent } from './HeaderStyles'

import logo from '../../assets/images/logo.png'

const Header = () => {
  const [ activeItem, setActiveItem ] = useState('home')    

  return (   
    <MainHeader>      
      <HeaderContent>
        <img src={logo}  alt='logo' height='68'/>  
        <Menu secondary size='large' style={{margin:0}} >           
          <Menu.Item name='home' 
            active={activeItem === 'home' ? true : false} 
            onClick={() => setActiveItem('home')} 
          />
          <Menu.Item
            name='nodeJS'
            active={activeItem === 'node' ? true : false}
            onClick={() => setActiveItem('node')}
          />
          <Menu.Item
            name='ReactJS'
            active={activeItem === 'reactjs' ? true : false}
            onClick={() => setActiveItem('reactjs')}
          />
          <Menu.Item
            name='React Native'
            active={activeItem === 'reactnative' ? true : false}
            onClick={() => setActiveItem('reactnative')}
          />                 
        </Menu>
      </HeaderContent>   
    </MainHeader>
  )
}

export default Header