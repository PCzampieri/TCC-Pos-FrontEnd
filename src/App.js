import React from 'react'

import GlobalStyle from './styles/global'

import Header from './components/Header'
import HomePosts from './screens/HomePosts'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />    
      <HomePosts />
    </div>
  )
}

export default App
