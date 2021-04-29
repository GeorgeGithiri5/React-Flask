import React, {Component} from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component{
    constructor(){
        super()
        this.state = {
            first_name:'',
            last_name:'',
            email:''
        }
    }
    componentDidMount(){
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)

        this.setState({
            first_name:decoded.identity.first_name,
            last_name:decoded.identity.last_name,
            email: decoded.identity.email
        })
    }
    render(){
        return(
            <div className="container">
                <div className="jumbotron mt-5">
                    <h1 className="text-center">profile</h1>
                </div>
                <p className="text-center">Hello, {this.state.first_name} {this.state.last_name}</p>
                <p className="text-center">I hope your email is {this.state.email}</p>
            </div>
        )
    }
}

export default Profile