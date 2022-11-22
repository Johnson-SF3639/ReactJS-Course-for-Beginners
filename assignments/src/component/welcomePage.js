import React, { Component } from 'react'

export default class welcomePage extends Component {
  render() {
    return (
      <>
      <h1 className='heading'> Welcome to {this.props.message} screen of user management </h1>
      </>
    )
  }
}
