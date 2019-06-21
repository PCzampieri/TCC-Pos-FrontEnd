import React from 'react'
import { Icon, Grid, Divider, Header, Segment, Image } from 'semantic-ui-react'

import { PostList, CardPost }from './PostsCategoryStyles'

import nodejs from '../../assets/images/nodejs.png'
import reactjs from '../../assets/images/react.jpg'
import js from '../../assets/images/javascript.png'
import logojs from '../../assets/images/logojs.png'
import logonode from '../../assets/images/logoNode.png'
import logoreact from '../../assets/images/logoReact.png'

const CategoriesPosts = () => {
  return (   
    <div>
    <PostList>
      <h1>NodeJS</h1>
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

export default CategoriesPosts