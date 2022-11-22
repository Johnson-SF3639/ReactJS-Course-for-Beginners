import React, { Component } from 'react'

export default class EditUser extends Component {
  constructor(props){
    super(props);
    this.textName = React.createRef();
    this.textUserName = React.createRef();
  }

  FormHandle =(e)=>{
    e.preventDefault()
    const upDateEdit ={};
    upDateEdit.name = this.textName.current.value;
    upDateEdit.userName = this.textUserName.current.value;

    this.props.onEdit(upDateEdit);

  }

  componentDidMount(){
    this.textName.current.value = this.props.data[this.props.indexKey].name;    
    this.textUserName.current.value = this.props.data[this.props.indexKey].userName;
  }
  
  componentDidUpdate  (){
    this.textName.current.value = this.props.data[this.props.indexKey].name;    
    this.textUserName.current.value = this.props.data[this.props.indexKey].userName;
  }

  render() {
    const show = true;
  
    return (
      <div className='edit-user'>
        <form onSubmit={this.FormHandle}>
        <h2>Edit User</h2>

        <label><p>Name</p></label>
        <input type="text" ref={this.textName} />

        <label><p>Username</p></label>
        <input type="text" ref={this.textUserName} />
        

        <button type='submit'>Update User</button>
        <button type='button' id='cancel-btn' onClick={()=>{this.props.onCancel(show)}}>Cancel</button>
        </form>
      </div>
    )
  }
}
