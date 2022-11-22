import React from "react";

class State extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name : "John",
            age : 21,
            list: ["Apple", "Orange", "Grapes"]
        }
    }

    onDelete=(item)=>{
        const updateList = this.state.list.filter((value , index)=> {
            return item !== value
        })
        this.setState({
            list : updateList
        })
    }

    render(){
        var changeList = this.state.list;
        changeList = changeList.map((item,index) => {
            return(
                <h3 key={index}>{item} <span onClick={() =>this.onDelete(item)}>X</span></h3>
            )
        })

        return(
            <>
                <h2>Change State Component </h2>
                <h3>Welcome {this.state.name} </h3>
                <div>{changeList}</div>   
            </>
        )
    }
}
export default State;