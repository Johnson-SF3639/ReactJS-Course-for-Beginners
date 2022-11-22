import React, { Component } from 'react'

export default class addUser extends Component {
  constructor(props){
    super(props);
    this.textName = React.createRef();
    this.textUserName = React.createRef();
  }

  HandleForm=(e)=>{
    e.preventDefault()
    const newuser = {};
    newuser.name = this.textName.current.value;
    newuser.userName = this.textUserName.current.value;

    this.props.onAdd(newuser);
    
    this.textName.current.value ="";
    this.textUserName.current.value ="";
  }

  render() {
    return (
      <div className='add-user'>
        <form onSubmit={this.HandleForm}>
          <h2>AddUser</h2>
          <label><p>Name</p></label><input type="text" required ref={this.textName}/>
          <label><p>Username</p></label><input type="text" required ref={this.textUserName}/>
          <button type='submit'>Add New User</button>
        </form>
      </div>
    )
  }
}
