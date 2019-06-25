import styled from 'styled-components'

export const TableBg = styled.div`  
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
export const Container = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  height: 100vh;  
`
export const Form = styled.form`  
  width: 400px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;  
  h1 {
    color: #000;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
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