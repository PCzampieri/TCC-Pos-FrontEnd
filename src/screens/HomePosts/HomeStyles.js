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
    text-decoration: none;  
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
export const HeaderPost = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 30px auto 30px auto;  
`
export const LastPost= styled(HeaderPost)` 
  width: 70%;    
  padding: 0;
  margin: auto;
  background: #FFF; 
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 8px 0px, 
              rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, 
              rgba(0, 0, 0, 0.12) 0px 3px 3px -2px;

  display: flex;
  align-items: center;
  justify-content: flex-start;  
  
  div {     
    width: 50%;
    padding: 0;
    margin:0; 
    display: flex;
    align-items: center;
    justify-content: center;  

    img {
      width: 100%;  
      margin: 0;
      padding: 0;   
      border-radius: 5px 0 0 5px;  
    }
  }
  
  header {  
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;  
    width: 50%; 
    padding-left: 60px; 
    
    span {
      font-size: 10px;
      font-weight: 700;   
      padding: 3px 10px;  
      border-radius: 20px;
      background: #000;
      color: #FFF;
      margin: 0;
    }  
    h2 {
      font-size: 2.2rem;  
      color: #000;
    }
    h4{
      color: rgba(0,0,0,0.5);    
    }
    h5 {
      background: #f9541e;
      color: #fff;
      padding: 1px 10px;
      border-radius: 10px; 
    }
  }
  
  :hover {
    cursor: pointer;
  }
  
  @media (max-width: 768px) {
    display: block;     
    header {  
      width: 100%;  
      padding: 30px 20px 30px 30px;
    }
    h2 {
      font-size: 1.6rem; 
      color: #000; 
    }
    h4, h5 {
    color: #000;    
    }
    img {
      border-radius: 5px 5px 0 0;  
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
export const CategoriesList = styled(HeaderPost)`
   @media (min-width: 992px) { 
    div { 
      float: right;          
      margin: auto;
      width: 20%;  
      min-width: 180px;  
      background: #ffffff;
      padding: 30px;
      border-radius: 10px;    

      box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 8px 0px, 
                  rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, 
                  rgba(0, 0, 0, 0.12) 0px 3px 3px -2px; 
    }    
    h1 {
      font-size: 24px;  
      border-bottom: 3px solid #f5f5f5; 
      color: #000; 
    }
    span {
      display: flex;
      flex-direction: column;  
      line-height: 25px;  
      font-size: 16px;
      font-weight: bold;
      text-decoration: none;
      color: #000;
    }
  }
  @media (max-width: 991px) { 
    div {      
      margin: 0 auto;
      width: 70%;       
      background: #ffffff;
      padding: 30px;
      border-radius: 10px;    

      box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 8px 0px, 
                  rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, 
                  rgba(0, 0, 0, 0.12) 0px 3px 3px -2px; 
    }    
    h1 {
      font-size: 24px;  
      border-bottom: 3px solid #f5f5f5;  
      color: #000;
    }
    span {      
      display: flex;      
      align-items: center;
      justify-content: center;            
      font-size: 16px;
      line-height: 22px; 
      font-weight: bold;
      text-decoration: none;
      color: #000;
    }
  }
`

export const CardPost= styled(PostList)`  
  @media (min-width: 200px) { 
    width: 100%;     
    max-width: 360px;   
    margin: auto;
    padding: 0px;
  
    article {           
      width: 100%;
      max-width: 360px;            
      margin: 0;  
      margin-top: 20px;  
      height: 490px;
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
          display: block;
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
        border-bottom: 1px solid #a0a0a0 
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
        color: #000;
      }
      h4 {
        font-size: 1.2rem;
        color: #000;
      }
      h5 {
        color: #000;
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
    margin-bottom: 30px;
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
        color: #000;
      }
      h4 {
        font-size: 1.2rem;
        color: #000;
      }
      h5 {
        color: #000;
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