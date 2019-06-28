import React, { useState, useEffect } from 'react'
import Markdown from 'markdown-to-jsx'
import ReactDisqusComments from 'react-disqus-comments'

import HeaderHome from '../../components/NavBarMenu'
import Footer from '../../components/Footer'
import DateFormat from '../../components/DateFormat'

import api from '../../services/api'
import { MainPost, Header, PostContent } from './PostStyle'

const Post = props => {
  const [ post, setPost ] = useState('')
  const [ title, setTitle ] = useState('')
  const [ image_url, setImage_url ] = useState(null)
  const [ category, setCategory ] = useState('')
  const [ name, setName ] = useState('')
  const [ created_at, setCreated_at ] = useState('') 

  const id = props.match.params.id

  useEffect(() => {
    async function fetchData() {
      const postApi = await api.get(`/posts/${id}`)

      setTitle(postApi.data.data.title)
      setPost(postApi.data.data.post)
      setCreated_at(postApi.data.data.created_at)
      setImage_url(postApi.data.data.image_url)
      setName(postApi.data.data.name)
      setCategory(postApi.data.data.category)     
    }

    fetchData()
  }, [])

  const handleNewComment = (comment) => {
    console.log(comment.text);
  }

  return (
    <div>
      <HeaderHome />
      <MainPost>      
        <Header>
          <div>
            <h2>{title}</h2>
            <h3>Por {name} em <DateFormat date={created_at} /></h3>
            <h6>{category}</h6>
          </div>
          <hr />
        </Header>
        <PostContent>        
          <img src={`http://localhost:3001/files/${image_url}`} alt='Imagem' />
          <Markdown>
            {post}
          </Markdown>
          <br /><br /><br />
          <ReactDisqusComments
          shortname="example"
          identifier="something-unique-12345"
          title="Example Thread"
          url="http://www.example.com/example-thread"
          category_id="123456"
          onNewComment={handleNewComment}/>
        </PostContent>
       
      </MainPost>      
      <Footer/>
    </div>
  )
}

export default Post