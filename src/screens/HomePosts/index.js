import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import { Icon, Grid, Divider, Header, Segment, Image } from 'semantic-ui-react'

import { PostList, LastPost, CardPost, CategoriesList, HeaderPost }from './HomeStyles'

import nodejs from '../../assets/images/nodejs.png'
import reactjs from '../../assets/images/react.jpg'
import js from '../../assets/images/javascript.png'


const HomePosts = () => {
  const [ posts, setPosts ] = useState([])
  const [ lastPost, setLastPost ] = useState({})
  const [ categories, setCategories ] = useState([])

  useEffect(() => {
    async function fetchData() {
      const allPost = await api.get('/posts')
      const PostLast = allPost.data.data[0]      
      
      setLastPost(PostLast)  
      setPosts(allPost.data.data)
    }

    fetchData()      
  }, [])

  useEffect(() => {
    async function fetchData() {
      const categorias = await api.get('/categories')
      
      setCategories(categorias.data.data)
    }

    fetchData()
  }, [])

  const renderPosts = (post) => {
    return (
      <CardPost key={post.id}>
        <article>
          <img src={`http://localhost:3001/files/${post.image_url}`} alt='image' />  
          <div>          
            <h2>{post.title}</h2>
            <h4>Por <strong>{post.name} </strong>{post.date}</h4>              
            <h5>{post.category}</h5> 
          </div>      
        </article>      
      </CardPost> )
  }

  return (   
    <div>
    <HeaderPost>      
      <CategoriesList>
        <div>
          <h1>Categorias</h1>
          {
            categories.map(cat =>  (<span><Link to={`/posts/category/${cat.id}`}>{cat.name}</Link></span>))
          }          
        </div>
      </CategoriesList>      
      <LastPost>        
        <div>        
          <img src={`http://localhost:3001/files/${lastPost.image_url}`} alt='image' />  
        </div>
        <header>          
          <span><Icon name='star'/> DESTAQUE</span>   
          <h2>{lastPost.title}</h2>
          <h4>Por <strong>{lastPost.name}</strong> {lastPost.date}</h4>
          <h5>{lastPost.category}</h5>
        </header>
      </LastPost>      
    </HeaderPost> 

    <PostList>        
      <Divider horizontal>
        <Header as='h3'>
          <Icon name='node js'/>    
          <Icon name='react'/>              
        </Header>
      </Divider> 
      <Grid> 
        {  
          Object
          .keys(posts)
          .map( key => renderPosts(posts[key]))
        }       
      </Grid>
    </PostList>
    <Divider hidden />
    <Divider hidden /> 
    </div>
  )
}

export default HomePosts