import React, { useState, useEffect } from 'react'

import api from '../../services/api'
import HeaderHome from '../../components/NavBarMenu'
import Footer from '../../components/Footer'

import { Grid, Divider } from 'semantic-ui-react'

import { PostList, CardPost }from './PostsCategoryStyles'

const CategoriesPosts = (props) => {
  const [ posts, setPosts ] = useState([])
  const [ error, setError ] = useState(false)
  const [ category, setCategory ] = useState('')

  const url = props.match.url
  
  useEffect(() => {
    async function fecthData() {
      const postsCategory = await api.get(url)       
      
      if(!postsCategory.data.error) {
        setPosts(postsCategory.data.data)       
        setCategory(postsCategory.data.data[0].category)
      } else {
          setError(true)
      }      
    }

    fecthData()
  }, [])

  return (   
    <div>
      <HeaderHome />
      <PostList>
        <h1>{category}</h1>
        <Grid>
          { error ? (<p>Nenhum registro encontrado!</p>) :
            posts.map(post => (
            <CardPost>
              <article>
                <img src={`http://localhost:3001/files/${post.image_url}`} alt='image reactjs' />  
                <div>          
                  <h2>{post.title}</h2>
                  <h4>Por <strong>{post.name}</strong> {post.date}</h4>              
                  <h5>{post.category}</h5> 
                </div>      
              </article>      
            </CardPost>  ))
          }
        </Grid>
      </PostList>
      <Divider hidden />
      <Divider hidden /> 
      <Footer />
    </div>
  )
}

export default CategoriesPosts