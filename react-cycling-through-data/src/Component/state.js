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
        var changeList = this.state.list;
        changeList = changeList.map((item,index) => {
            return(
                <li>{item} and index is {index}</li>
            )
        })

        return(
            <>
                <h2>Change State Component </h2>
                <h3>Welcome {this.state.name} </h3>
                <h4>
                    {changeList}
                </h4>
                <button type="button" onClick={this.ChangeState}>Change</button>
            </>
        )
    }
}
export default State;