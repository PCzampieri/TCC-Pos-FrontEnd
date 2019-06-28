import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"

import { Button } from 'semantic-ui-react'

import Header from '../../Admin/Header'
import { Form, Container, BaseButton, PostBg } from './HomeAdminStyles'

import api from '../../../services/api'

const EditPost = props => {
  const [ title, setTitle ] = useState('')
  const [ post, setPost ] = useState('')  
  const [ image_url, setImage_url ] = useState(null)
 
  const [ categoryId, setCategoryId ] = useState(null)
  const [ category, setCategory ] = useState([])
  const [ user_id, setUser_Id] = useState(null)

  const [ catNull, setCatNull ] = useState(false)
  const [ imageNull, setImageNull ] = useState(false)
  const [ errorValid, setErrorValid ] = useState([])
  const [ isErrorValid, setIsErrorValid ] = useState(false)
  const [ success, setSeccess ] = useState(false)

  useEffect(() => {
    async function fecthData() {
      const categorias = await api.get('/categories')
      setCategory(categorias.data.data)
    }
    fecthData()
    
  }, [])

  useEffect(() => {
    async function fecthData() {
      const user = await api.get('/users/me')
      setUser_Id(user.data.id)
    }
    fecthData()
    
  }, [])

  const id = props.match.params.id

  useEffect(() => {
    async function fecthData() {
      const postApi = await api.get(`/posts/${id}`)      
      setTitle(postApi.data.data.title)       
      setPost(postApi.data.data.post)
      setImage_url(postApi.data.data.image_url)
      setCategoryId(postApi.data.data.categoryId)      
    }
    fecthData()
    return () => {}
    
  }, [])

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {

      const data = new FormData()
           
      if (categoryId === undefined) {
        setCatNull(true)        
        return
      }
      
      setCatNull(false)       
      
      data.append('category_id', categoryId)   
      data.append('image_url', image_url)     
      data.append('user_id', user_id)
      data.append('title', title)
      data.append('post', post)
      

      await api.patch(`/posts/${id}`, data)
      
      setTitle('')
      setPost('')      
      setImage_url(null)
      setCategoryId(null)
      setIsErrorValid(false)
      setErrorValid('')
      setSeccess(true)
      setCatNull(false)

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
        <Form method='POST' >               
          <h1>Editar Post</h1>
          <select  name='category'  value={categoryId} onChange={({ target }) => setCategoryId(target.value)}  >           
            <option>Selecione uma Categoria</option>
            { category.map(cat => (<option value={cat.id} key={cat.id}>{cat.name}</option>)) }
          </select>

          <input 
            type='file' 
            placeholder='Selecione a imagem'
            onChange={({ target }) => setImage_url(target.files[0])}
          />         
          <input 
            type='text' 
            placeholder='Digite o Título do Post'
            value={title} 
            onChange={({ target }) => setTitle(target.value)}  
          />          
          <PostBg>
            <SimpleMDE value={post} onChange={(valor)=> setPost(valor)} />
            { catNull && <p>Selecione uma Categoria!</p> }    
            { imageNull && <p>Selecione uma Imagem!</p> }      
            { isErrorValid && errorValid.map( (err, index) => <p key={index}>{err.msg}</p>)}
            { success && <Redirect to='/admin/homeadmin' />}  
            <BaseButton>
              <Button primary type='submit' onClick={handleSubmit}>Salvar Post</Button>&nbsp;&nbsp;
              <Button onClick={() => setSeccess(true)}>Cancelar</Button>
            </BaseButton>
          </PostBg>          
        </Form>             
      </Container>
    </div>
  )
}

export default EditPost