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
  
  @media (min-width: 368px) {    
   padding: 30px;    
   h1 {
    font-size: 2.2rem;
   } 
  }
  @media (min-width: 1100px) {    
   padding: 0;    
   h1 {
    font-size: 3rem;
   } 
  }   
`
export const LastPost= styled(PostList)`
  width: 100%;  
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
  background: #FFF; 
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 8px 0px, 
              rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, 
              rgba(0, 0, 0, 0.12) 0px 3px 3px -2px;

  display: flex;
  align-items: center;
  justify-content: center;
  
  header {  
    width: 50%;  
    padding: 60px 0px 60px 60px;
  }
  div {     
    width: 50%;
    padding: 0;
    margin:0; 
    display: flex;
    align-items: center;
    justify-content: center;  
  } 
  img {
    width: 100%;  
    margin: 0;
    padding: 0;     
  }
  span {
    font-size: 10px;
    font-weight: 700;   
    padding: 4px 10px;  
    border-radius: 20px;
    background: #000;
    color: #FFF;
    margin: 0;
  }  
  h2 {
    font-size: 2.2rem;  
  }
  :hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: block;     
    header {  
      width: 100%;  
      padding: 60px 30px 60px 60px;
    }
    h2 {
      font-size: 1.8rem;  
    }      
    div {     
      width: 100%;
      padding: 0;
      margin:0; 
      display: flex;
      align-items: center;
      justify-content: center;  
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
  @media (min-width: 992px) { 
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