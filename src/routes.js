import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { isAuthenticated } from './services/auth'

import Home from './screens/HomePosts'
import Post from './screens/Post'
import NavBarMenu from './components/NavBarMenu'
import Footer from './components/Footer'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route 
        { ...rest } 
        render={props => 
            isAuthenticated() ? (
                <Component { ...props } />
            ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            )
        }
    /> 
)

const Routes = () => (
  <BrowserRouter>
    <NavBarMenu />
      <Switch>            
          <Route exact path='/' component={Home} />
          <Route path='/post' component={Post} />
          <PrivateRoute path='/admin' component={() => <h1>Painel Administrativo</h1>} />
          <Route path='*' component={() => <h2>Página não encontrada!! 404 - Error</h2>} />
      </Switch>   
    <Footer />
  </BrowserRouter>
)
export default Routes 