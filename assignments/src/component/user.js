import React, { Component } from 'react'
import UserAddList from './addUser'
import EditUser from './editUser';
import ViewUser from './viewUser'

export default class user extends Component {
    constructor(props){
        super(props);
        this.state = {
            showData : true,
            data : [{ name : 'John', userName : 'Johnson'}, {name : 'Siva', userName : 'viratSiva'}],
            editKey : 0
        }    
    }

    onDelete=(details)=>{
      const deleteData = this.state.data.filter((list, key)=>{
        return details !== key;
      })
      this.setState({
        data : deleteData
      })
    }

    onAdd =(details)=>{
      const addData = this.state.data;
      addData.push(details)
      this.setState({
        data : addData
      })
    }

    onShow =(details)=>{
      this.setState({
        showData : false,
        editKey : details
      })
    }

    onCancel =(details)=>{
      this.setState({
        showData : details
      })
    }
    
    onEdit= (details) => {
      const EditData = this.state.data
      
      EditData[this.state.editKey].name = details.name;
      EditData[this.state.editKey].userName = details.userName;
      this.setState({
        data : EditData,
        showData : true 
      })
    }

    render() {

    return (
      <div className='user-component'>
        <h1> User Component </h1>
        <div className='add-user-list'>
        { this.state.showData ? 
        <UserAddList data={this.state.data} onAdd={(e)=>{this.onAdd(e)}} /> : 
        <EditUser data={this.state.data} indexKey={this.state.editKey} onEdit={(e)=>{this.onEdit(e)}} onCancel={(e)=>{this.onCancel(e)}}/>}
        </div>
        <div className='del-user-list'>
        <ViewUser  data={this.state.data} onDelete={(e)=>this.onDelete(e)} onShow={(e)=>this.onShow(e)}/>
        </div>
      </div>
    )
  }
}
