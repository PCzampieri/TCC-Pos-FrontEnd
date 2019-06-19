import React from 'react'
import { Link } from 'react-router-dom'

import './NavBarMenu.css'

const NavBarMenu = () => {
  return (
    <div className='nav'>      
      <label htmlFor='toggle'>&#9776;</label>
      <input type='checkbox' id='toggle' />
      <div className='menu'>
        <Link to='/'>Home</Link>
        <a href='#'>NodeJS</a>
        <a href='#'>ReactJS</a>
        <a href='#'>React Native</a>        
      </div>
    </div>
  )
}

export default NavBarMenu