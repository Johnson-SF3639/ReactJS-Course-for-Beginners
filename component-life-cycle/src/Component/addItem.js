import React, { Component } from 'react'

export default class addItem extends Component {
    constructor(props){
        super(props);
        this.textInput = React.createRef();
        this.HandleSubmit = this.HandleSubmit.bind(this);
    }

    HandleSubmit (e){
        e.preventDefault();
        this.props.onAdd(this.textInput.current.value);  
    }

  render() {
    
    return (
      <>
        <form id="add-todo" onSubmit={this.HandleSubmit}>
            <input type="text" className='text' required ref={this.textInput}/>
            <input type="submit" className='btn' value="Hit me"/> 
        </form>
      </>
    )
  }
}