import React from "react";
import Lists from './Lists'

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
                <Lists value={item} key={index}/>
            )
        })

        return(
            <>
                <h2>Change State Component </h2>
                <h3>Welcome {this.state.name} </h3>
                    {changeList}    
                <button type="button" onClick={this.ChangeState}>Change</button>
            </>
        )
    }
}
export default State;