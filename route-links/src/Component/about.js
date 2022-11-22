import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class about extends Component {
  render() {
    return (
      <div className='about-page'>
        <h1>About Page</h1>
        <Link to={'/'}><h4>Home</h4></Link>
      </div>
    )
  }
}
