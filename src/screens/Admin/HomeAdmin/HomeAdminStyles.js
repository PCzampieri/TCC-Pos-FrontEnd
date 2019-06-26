import styled from 'styled-components'

export const TableBg = styled.div`   
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 8px 0px, 
                rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, 
                rgba(0, 0, 0, 0.12) 0px 3px 3px -2px; 
  h1 {
    text-align: center;
  }
`
export const PostBg = styled.div`  
  width: 100%;
  max-width: 850px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 30px;  
  border-radius: 5px;
  background: #ffffff;
  
  h1 {
    text-align: center;
  }
`
export const Container = styled.div`
  margin: auto;  
  height: 100vh;  
`
export const Form = styled.form`  
  width: 83%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  border-radius: 5px;
  h1 {
    color: #000;
  }
  p {    
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    max-width: 850px;
    text-align: center;
  }
  input {
    flex: 1;
    line-height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    max-width: 850px;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  } 
  input[type=file] {
    flex: 1;
    line-height: 40px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    max-width: 850px;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  } 
  select {
    flex: 1;
    height: 42px;
    margin-bottom: 15px;
    padding: 12px;
    color: #777;
    font-size: 17px;
    width: 100%;
    max-width: 850px;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  } 
  
  
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 8px 0px, 
              rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, 
              rgba(0, 0, 0, 0.12) 0px 3px 3px -2px; 
`
export const BaseButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
`