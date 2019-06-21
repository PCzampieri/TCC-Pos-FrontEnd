import React from 'react'
import { Icon, Grid, Divider, Header, Segment, Image } from 'semantic-ui-react'

import { PostList, LastPost, CardPost, CategoriesList, HeaderPost }from './HomeStyles'

import nodejs from '../../assets/images/nodejs.png'
import reactjs from '../../assets/images/react.jpg'
import js from '../../assets/images/javascript.png'
import logojs from '../../assets/images/logojs.png'
import logonode from '../../assets/images/logoNode.png'
import logoreact from '../../assets/images/logoReact.png'

const HomePosts = () => {
  return (   
    <div>    
    

    <HeaderPost>
      <CategoriesList>
        <div>
          <h1>Categorias</h1>
          <span>NodeJS</span>          
          <span>ReactJS</span>
          <span>React Native</span>
          <span>Sequelize</span>
          <span>Express</span>
          <span>Socket io</span>
          <span>NodeJS</span>
          <span>ReactJS</span>
          <span>React Native</span>
          <span>Sequelize</span> 
        </div>
      </CategoriesList>
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
    </HeaderPost> 

    <PostList>        
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
    <Divider hidden /> 
    </div>
  )
}

export default HomePosts