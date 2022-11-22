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


    ChangeState = () =>{
        this.setState({
            name : "Siva",
            list : ["Goa", "Banana"]
        });
    }

    render(){

        return(
            <>
                <h2>Change State Component </h2>
                <h3>Welcome {this.state.name} </h3>
                {this.state.list.map((data, index)=> <h4>{index+1}  {data}</h4>)}
                <button type="button" onClick={this.ChangeState}>Change</button>
            </>
        )
    }
}
export default State;