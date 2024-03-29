import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'
import HeaderHome from '../../components/NavBarMenu'
import Footer from '../../components/Footer'
import DateFormat from '../../components/DateFormat'

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
              <Link to={`/posts/${post.id}`} style={{textDecoration: 'none'}}>
                <article>
                  <img src={`http://localhost:3001/files/${post.image_url}`} alt='image reactjs' />  
                  <div> 
                    <h4>Por <h6>{post.name}</h6>  em  <DateFormat date={post.created_at} /></h4>  
                    <h2>{post.title}</h2>            
                    <h5>{post.category}</h5> 
                  </div>      
                </article>      
              </Link>
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