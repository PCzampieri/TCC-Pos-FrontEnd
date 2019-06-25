import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import { Button, Icon, Input } from 'semantic-ui-react'

import Header from '../../Admin/Header'
import { Form, Container, BaseButton } from './UsersStyles'

import api from '../../../services/api'

const NewUser = props => {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ passwd, setPasswd ] = useState('')
  const [ errorValid, setErrorValid ] = useState([])
  const [ isErrorValid, setIsErrorValid ] = useState(false)
  const [ success, setSeccess ] = useState(false)

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const role = 'admin'
      await api.post('/users', { name, email, passwd, role })
      setIsErrorValid(false)
      setErrorValid('')
      setName('')
      setSeccess(true)

    } catch(err) {
      const msgErrorApi = err['response']['data']['error']
      console.log(msgErrorApi)
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
      setErrorValid(objError)
      setIsErrorValid(true)
      setSeccess(false)
    }
  }

  return (
    <div>
      <Header />      
      <Container>
        <Form method='POST'>
          <h1>Novo Usuário</h1>
          { isErrorValid && errorValid.map( (err, index) => <p key={index}>{err.msg}</p>)}
          { success && <Redirect to='/admin/users' />}
          <input 
            type='text' 
            placeholder='Digite o nome' 
            value={name} 
            onChange={({ target }) => setName(target.value)}        
          />
          <input 
            type='email' 
            placeholder='Digite o e-mail' 
            value={email} 
            onChange={({ target }) => setEmail(target.value)}        
          />
          
          <input 
            type='password' 
            placeholder='Digite a senha' 
            value={passwd} 
            onChange={({ target }) => setPasswd(target.value)}            
          />
          <BaseButton>
            <Button primary type='submit' onClick={handleSubmit}>Salvar Usuário</Button>&nbsp;&nbsp;
            <Button onClick={() => setSeccess(true)}>Cancelar</Button>
          </BaseButton>
        </Form>
      </Container>
    </div>
  )
}

export default NewUser