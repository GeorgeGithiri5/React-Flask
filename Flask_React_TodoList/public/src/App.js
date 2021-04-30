import React from 'react'
import List from './components/List'

export default class App extends React.Component{
  render(){
    return(
      <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h1 className="text-center">Todo</h1>
            <List/>
          </div>
        </div>
      </div>
      </>
    )
  }
}