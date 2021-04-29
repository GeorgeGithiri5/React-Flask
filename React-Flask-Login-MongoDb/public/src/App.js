import React from 'react'
import {Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Landing'
import Register from './components/Register'
import Profile from './components/Profile'

export default class App extends React.Component{
  render(){
    return(
      <>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path = "/register" component = {Register} />
            <Route exact path = "/login" component = {Login} />
            <Route exact path = "/profile" component = {Profile} />
          </div>
        </div>
      </>
    )
  }
}