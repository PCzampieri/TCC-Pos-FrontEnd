import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { isAuthenticated } from './services/auth'

import Home from './screens/HomePosts'
import Post from './screens/Post'
import PostsCategory from './screens/PostsCategory'
import Login from './screens/Admin/Login'

import HomeAdmin from './screens/Admin/HomeAdmin'
import NewPost from './screens/Admin/HomeAdmin/NewPost'
import EditPost from './screens/Admin/HomeAdmin/EditPost'

import Categories from './screens/Admin/Categories'
import NewCategory from './screens/Admin/Categories/NewCategory'
import EditCategory from './screens/Admin/Categories/EditCategory'

import UsersIndex from './screens/Admin/Users'
import NewUser from './screens/Admin/Users/NewUser'
import EditUser from './screens/Admin/Users/EditUser'


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
    <Switch>            
        <Route exact path='/' component={Home} />
        <Route path='/posts/:id' component={Post} />
        <Route path='/posts/category/:id' component={PostsCategory} />
        <Route exact path='/admin' component={Login} />
        <PrivateRoute path='/admin/homeadmin' component={HomeAdmin} />
        <PrivateRoute path='/admin/newpost' component={NewPost} />
        <PrivateRoute path='/admin/editpost/:id' component={EditPost} />        
        <PrivateRoute path='/admin/users' component={UsersIndex} />
        <PrivateRoute path='/admin/newuser' component={NewUser} />
        <PrivateRoute path='/admin/edituser/:id' component={EditUser} />
        <PrivateRoute path='/admin/categories' component={Categories} />
        <PrivateRoute path='/admin/newcategory' component={NewCategory} />
        <PrivateRoute path='/admin/editcategory/:id' component={EditCategory} />
        <Route path='*' component={() => <h2>Página não encontrada!! 404 - Error</h2>} />
    </Switch>
  </BrowserRouter>
)
export default Routes 