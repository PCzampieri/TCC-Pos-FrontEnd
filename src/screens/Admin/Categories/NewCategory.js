import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import { Button } from 'semantic-ui-react'

import Header from '../../Admin/Header'
import { Form, Container, BaseButton } from './CategoriesStyles'

import api from '../../../services/api'

const NewCategory = props => {
  const [ name, setName ] = useState('')
  const [ errorValid, setErrorValid ] = useState([])
  const [ isErrorValid, setIsErrorValid ] = useState(false)
  const [ success, setSeccess ] = useState(false)

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      await api.post('/categories', { name })
      setIsErrorValid(false)
      setErrorValid('')
      setName('')
      setSeccess(true)

    } catch(err) {
      const msgErrorApi = err['response']['data']['error']
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
          <h1>Nova Categoria</h1>
          { isErrorValid && errorValid.map( (err, index) => <p key={index}>{err.msg}</p>)}
          { success && <Redirect to='/admin/categories' />}
          <input 
            type='text' 
            placeholder='Digite a Categoria' 
            value={name} 
            onChange={({ target }) => setName(target.value)}        
          />
          <BaseButton>
            <Button primary type='submit' onClick={handleSubmit}>Salvar Categoria</Button>&nbsp;&nbsp;
            <Button onClick={() => setSeccess(true)}>Cancelar</Button>
          </BaseButton>
        </Form>
      </Container>
    </div>
  )
}

export default NewCategory