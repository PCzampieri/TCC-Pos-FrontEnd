import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'
import HeaderHome from '../../components/NavBarMenu'
import Footer from '../../components/Footer'
import DateFormat from '../../components/DateFormat'

import { Icon, Grid, Divider, Header } from 'semantic-ui-react'

import { PostList, LastPost, CardPost, CategoriesList, HeaderPost }from './HomeStyles'

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
        <Link style={{textDecoration: 'none'}} to={`/posts/${post.id}`} >
          <article>
            <img src={`http://localhost:3001/files/${post.image_url}`} alt='image' />  
            <div> 
              <h4>Por: <h6>{post.name}</h6> em <DateFormat date={post.created_at} /></h4>            
              <h2>{post.title}</h2>                        
              <h5>{post.category}</h5> 
            </div>           
          </article> 
        </Link>     
      </CardPost> 
    )
  }

  return (   
    <div>
    <HeaderHome />
    <HeaderPost>      
      <CategoriesList>
        <div>
          <h1>Categorias</h1>
          {
            categories.map(cat =>  (<span key={cat.id}><Link to={`/posts/category/${cat.id}`} style={{color:'#000'}} >
                                      {cat.name}
                                      </Link></span>)
                                    )
          }          
        </div>
      </CategoriesList>      
      
      <Link to={`/posts/${lastPost.id}`} style={{textDecoration: 'none'}}>
        <LastPost>        
          <div>        
            <img src={`http://localhost:3001/files/${lastPost.image_url}`} alt='image' />  
          </div>
          <header>          
            <span><Icon name='star'/> DESTAQUE</span>   
            <h2>{lastPost.title}</h2>
            <h4>Por <strong>{lastPost.name}</strong></h4>
            <h5>{lastPost.category}</h5>
          </header>
        </LastPost>      
      </Link>
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
    <Footer />
    </div>
  )
}

export default HomePosts