import React, {Component} from 'react'
import {Login} from './userFunction'

class Login extends Component{
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }
    onChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit = (e) =>{
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        Login(user)
                .then(res=>{
                    if(!res.error){
                        this.props.history.push(`/profile`)
                    }
                })
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Please Sign In</h1>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type = "email"
                                    className = "form-control"
                                    name = "email"
                                    placeholder = "Enter Email"
                                    value = {this.state.email}
                                    onChange = {this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type = "password"
                                    className = "form-control"
                                    name = "password"
                                    placeholder = "Enter password"
                                    value = {this.state.password}
                                    onChange = {this.onChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login