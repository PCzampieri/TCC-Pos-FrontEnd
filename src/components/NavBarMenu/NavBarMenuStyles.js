import styled from 'styled-components'

export const Nav = styled.div`
  border-bottom: 1px solid #EAEAEB;
  text-align: center;
  height: 50px;
  line-height: 50px;
  background: #fff;

  .menu {
    margin: 0;
  }
  .menu a {
    clear: right;
    text-decoration: none;
    color: #000;
    margin: 0 10px;
  }

  label {
    margin: 0 40px 0 0;
    font-size: 26px;
    line-height: 50px;
    display: none;
    width: 26px;
    float: right;
    color:#000;
  } 
  #toggle {  
    display: none;
  }
  
  @media only screen and (max-width: 768px) {
    label {
      position: relative;
      z-index: 1000;
      display:block;
      cursor: pointer;      
    }
    .menu { 
      position: relative;
      z-index: 100;
      background: #fff;
      text-align: center;
      width: 100%;
      display: none;
    }
    .menu a {
      display: block;
      border-bottom: 1px solid #EAEAEB;
      margin:0;    
    } 
    #toggle:checked + .menu {
      display: block;        
    }
  }
`

export const BarraMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #1b1c1d;
  margin: 0 auto;
  height: 70px;
  h1 {
    margin: 0;
    color: #ffffff;
  }

`