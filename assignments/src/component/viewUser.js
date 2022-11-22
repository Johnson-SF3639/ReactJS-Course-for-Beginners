import React, { Component } from 'react'

export default class viewUser extends Component {

  render() {
    var showList = this.props.data;
    showList = showList.map((data, key) =>{
      return(
          <tr key={key}>        
            <td>{data.name}</td>
            <td>{data.userName}</td>
            <td>
              <button type='button' onClick={()=>{this.props.onShow(key)}} className='btn'>Edit</button>
              <button type='button' onClick={()=>{this.props.onDelete(key)}} className='btn'>Delete</button>
            </td>
          </tr>
      )
    })

    return (
      <div className='view-user'>
        <h2>View User</h2>
        <table>
        <thead>
          <tr>
            <td><b>Name</b></td>
            <td><b>Username</b></td>
            <td><b>Actions</b> </td>
          </tr>
          <tr>
          <td colSpan={3}><hr/></td>
          </tr>
          {showList}
          </thead>
        </table>
      </div>
    )
  }
}
