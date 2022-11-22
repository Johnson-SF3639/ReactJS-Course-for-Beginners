import React from "react";

class State extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name : "John",
            age : 21,
            list : ["Apple", "Orange", "Grapes"]
        }
    }

    render(){
        return(
            <>
                <h2>State Component </h2>
                <h3>Welcome {this.state.name} </h3>
                {this.state.list.map((data)=> <h4>{data}</h4>)}
            </>
        )
    }
}
export default State;