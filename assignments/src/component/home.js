import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import WelcomePage from './welcomePage'
import UserComponent from './user'

export default class home extends Component {

    constructor(props){
        super(props)
        this.state = {
            Message : 'about'
        }
    }

  render() {
    return (
      <>
        <nav>
            <li>
                <Link to={'/about'} 
                onClick={()=>{this.setState({Message : "about"})}} 
                className="text-link">About
                </Link>
            </li>
            <li>
                <Link to={'/user'} 
                onClick={()=>{this.setState({Message : "user"})}} 
                className="text-link">Users
                </Link>
            </li>
            <li>
                <Link to={'/contact'} 
                onClick={()=>{this.setState({Message : "contact"})}} 
                className="text-link">Contact
                </Link>
                </li>
        </nav>

        <WelcomePage message={this.state.Message} />

        {this.state.Message === "user" ? <UserComponent/> : null}
 
      </>
    )
  }
}
