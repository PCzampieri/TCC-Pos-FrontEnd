import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

import { Container, Form, ButtonSub } from './LoginStyles'

import { getJwt, login } from '../../../services/auth'
import api from '../../../services/api'

const Login = props => {
  const [ email, setEmail ] = useState('')
  const [ passwd, setPasswd ] = useState('')
  const [ error, setError ] = useState([])
  const [ errorValid, setErrorValid ] = useState(false)
  const [ isLogged, setIsLogged ] = useState(false)
  const [ isAuth, setIsAuth ] = useState(false)

  useEffect(() => {
    const logged = getJwt()
    if (logged) {
      setIsLogged(true)
    }
  }, [])

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const loginOk = await api.post('/users/login', { email, passwd })
      const { token } = loginOk.data
      login(token)      
      setIsAuth(true)
      setErrorValid(false)
      setError('')  


    } catch(err) {
      const msgErrorApi = err['response']['data']['error']
      setErrorValid(true)
      setIsAuth(false)
      //função que reduz array atraves da chave util
      const keys = ['msg']
      const filterObject = (obj, keys) => {
          return keys
                  .map(key => ({[key]: obj[key]}))
                  .reduce((anterior, atual) => {
                      return {
                          ...anterior,
                          ...atual
                      }
                  }, {})
      }
      const filterForMap = keys => obj => filterObject(obj, keys)
      const objError = msgErrorApi.map(filterForMap(keys))          
      setError(objError)      
    }
  }

  return (
    <Container>
      { isLogged && <Redirect to='/admin/homeadmin' /> }
      { isAuth && <Redirect to='/admin/homeadmin' /> }
      <Form method='POST'>
        <h1>Login</h1>
        { errorValid && error.map( (err, index) => <p key={index} >{err.msg}</p> )}
        <input 
          type='email' 
          placeholder= 'Digite o email'
          value={email} 
          onChange={({ target }) => setEmail(target.value)}
        />
        <input
          type='password'
          placeholder='Digite a senha'
          value={passwd} 
          onChange={({ target }) => setPasswd(target.value)}
        />
        <ButtonSub type='submit' onClick={handleSubmit}><Icon name='sign in'/>&nbsp;Fazer login</ButtonSub>
      </Form>      
    </Container>
  )
}

export default Login