import React from 'react'
import { Icon, Grid, Divider, Header } from 'semantic-ui-react'

import { PostList, LastPost, CardPost }from './HomeStyles'

import Footer from '../../components/Footer'

import nodejs from '../../assets/images/nodejs.png'
import reactjs from '../../assets/images/react.jpg'
import js from '../../assets/images/javascript.png'

const HomePosts = () => {
  return (   
    <div> 
    <PostList>
      <h1>
        Posts
        <Icon name='bookmark outline' />        
      </h1>

      <LastPost>   
        <div>
          <img src={nodejs} alt='image Nodejs' />  
        </div>
        <header>          
          <span><Icon name='star'/> DESTAQUE</span>   
          <h2>Desenvolvendo todo o Backend simplesmente com NodeJS</h2>
          <h4>Por <strong>CÉZAR ZAMPIERI</strong> há 2 dias</h4>
          <h5>NodeJS</h5>
        </header>
      </LastPost> 

      <Divider horizontal>
        <Header as='h3'>
          <Icon name='node js'/>    
          <Icon name='react'/>              
        </Header>
      </Divider> 

      <Grid> 
        <CardPost>
          <article>
            <img src={reactjs} alt='image reactjs' />  
            <div>          
              <h2>Desenvolvendo todo o Frontend simplesmente com ReactJS</h2>
              <h4>Por <strong>CÉZAR ZAMPIERI</strong> há 5 dias</h4>              
              <h5>ReactJS</h5> 
            </div>      
          </article>      
        </CardPost>  

        <CardPost>
          <article>
            <img src={nodejs} alt='image reactjs' />  
            <div>          
              <h2>Desenvolvendo todo o Frontend simplesmente com ReactJS</h2>
              <h4>Por <strong>CÉZAR ZAMPIERI</strong> há 5 dias</h4>
              <h5>ReactJS</h5> 
            </div>      
          </article>      
        </CardPost>  

        <CardPost>
          <article>
            <img src={js} alt='image reactjs' />  
            <div>          
              <h2>Desenvolvendo todo o Frontend simplesmente com ReactJS</h2>
              <h4>Por <strong>CÉZAR ZAMPIERI</strong> há 5 dias</h4>
              <h5>ReactJS</h5> 
            </div>      
          </article>      
        </CardPost>  

        <CardPost>
          <article>
            <img src={nodejs} alt='image reactjs' />  
            <div>          
              <h2>Desenvolvendo todo o Frontend simplesmente com ReactJS</h2>
              <h4>Por <strong>CÉZAR ZAMPIERI</strong> há 5 dias</h4>
              <h5>ReactJS</h5> 
            </div>      
          </article>      
        </CardPost>  

        <CardPost>
          <article>
            <img src={js} alt='image reactjs' />  
            <div>          
              <h2>Desenvolvendo todo o Frontend simplesmente com ReactJS</h2>
              <h4>Por <strong>CÉZAR ZAMPIERI</strong> há 5 dias</h4>
              <h5>ReactJS</h5> 
            </div>      
          </article>      
        </CardPost> 

        <CardPost>
          <article>
            <img src={reactjs} alt='image reactjs' />  
            <div>          
              <h2>Desenvolvendo todo o Frontend simplesmente com ReactJS</h2>
              <h4>Por <strong>CÉZAR ZAMPIERI</strong> há 5 dias</h4>
              <h5>ReactJS</h5> 
            </div>      
          </article>      
        </CardPost>  

        <CardPost>
          <article>
            <img src={reactjs} alt='image reactjs' />  
            <div>          
              <h2>Desenvolvendo todo o Frontend simplesmente com ReactJS</h2>
              <h4>Por <strong>CÉZAR ZAMPIERI</strong> há 5 dias</h4>
              <h5>ReactJS</h5> 
            </div>      
          </article>      
        </CardPost>    
      </Grid>
    </PostList>
    <Divider hidden />
    
    <Footer />    
    </div>
  )
}

export default HomePosts