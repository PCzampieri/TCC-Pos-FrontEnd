import styled from 'styled-components'

export const PostList = styled.section`
  width: 100%; 
  max-width: 1200px;  
  margin: 0 auto;
  padding: 0;

  h1 {    
    margin:0;
    padding: 40px;
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;    
  }
  
  @media (min-width: 320px) {    
   padding: 30px;    
   h1 {
    font-size: 2rem;    
   } 
  }
  @media (min-width: 1100px) {    
   padding: 0;    
   h1 {
    font-size: 3rem;
   } 
  }   
`

export const CardPost= styled(PostList)`  
  @media (min-width: 200px) { 
    width: 100%; 
    max-width: 360px;
    margin: auto;
    margin-top: 30px;    
    padding: 0px;
  
    article {     
      width: 100%;
      height: 490px;
      margin: 0;
      padding: 0;    
      background: #fff;  
      border-radius: 5px;  
      box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 8px 0px, 
                rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, 
                rgba(0, 0, 0, 0.12) 0px 3px 3px -2px; 
      

      div {
        padding: 0px 0 0px 25px;      
        margin:0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        h2 {
        font-size: 1.6rem;
        color: #000;
        }
        h4 {
          font-size: 14px;
          color: rgba(0,0,0,0.5);
        }
        h5 {
            background: #f9541e;
            color: #fff;
            padding: 1px 10px;
            border-radius: 10px; 
          } 
        h6 {
            display: inline-block;
            color: rgba(0,0,0,0.5);
            font-size: 18px;
          }      
        }
      
      img {      
        width: 100%;
        border-radius: 5px 5px 0 0;
      }
      :hover {
      cursor: pointer;         
      }
    }
  }
  
  @media (min-width: 768px) { 
    width: 50%; 
    margin: auto;
    margin-top: 30px;
    padding: 0px;
  
    article {     
      width: 100%;
      margin: 0;
      padding: 0;    
      background: #fff;  
      border-radius: 5px;  
      box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 8px 0px, 
                rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, 
                rgba(0, 0, 0, 0.12) 0px 3px 3px -2px; 
      div {
        padding: 25px 0 25px 25px;      
        margin:0;      
      }
      h2 {
        font-size: 1.8rem;
      }
      h4 {
        font-size: 1.2rem;
      }
      img {      
        width: 100%;
        border-radius: 5px 5px 0 0;
      }
      :hover {
      cursor: pointer;      
      }
    }
  }
  @media (min-width: 1100px) { 
    width: 33.333%; 
    margin: auto;
    padding: 30px;
  
    article {     
      width: 100%;
      margin: 0;
      padding: 0;    
      background: #fff;  
      border-radius: 5px;  
      box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 8px 0px, 
                rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, 
                rgba(0, 0, 0, 0.12) 0px 3px 3px -2px;
      div {
        padding: 25px 0 25px 25px;      
        margin:0;      
      }
      h2 {
        font-size: 1.8rem;
      }
      h4 {
        font-size: 1.2rem;
      }
      img {      
        width: 100%;
        border-radius: 5px 5px 0 0;
      }
      :hover {
        cursor: pointer;        
      }
   }
  }  
`