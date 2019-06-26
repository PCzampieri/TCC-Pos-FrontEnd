import styled from 'styled-components'

export const MainPost = styled.section`
  width: 100%;  
  margin: 0 auto; 
  background: #ffffff;
`
export const Header = styled(MainPost)`
  max-width: 700px;  
  padding-top: 20px; 
  padding-bottom: 20px;
  
  h2 {
    font-size: 56px;  
    color: #111111;  
  }
  h3 {
    margin-top: 30px;
    font-size: 16px;
    color: #555555;
  }
  span {
    font-size: 14px;
    color: #333333;
    background: #f4f4f4;
    font-weight: 700;   
    padding: 4px 10px;  
    border-radius: 20px;
    margin: 0;   
  }
  hr {
    margin-top: 20px;
  }
`
export const PostContent = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 30px;
  padding-bottom: 30px;

  h1 {
    text-align: center;
  }
    
  img {
    width: 100%;  
    margin-bottom: 30px;  
  }
  p {
    color: #333333;
    font-size: 20px;
  }
`
