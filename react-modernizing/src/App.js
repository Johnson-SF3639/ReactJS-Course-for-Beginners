import React from "react";
import './App.css'
import ListComp from "./Component/Listcomponent"

class App extends React.Component{

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
                <ListComp item={item} index={index} onDelete={() =>this.onDelete(item)}/>
            )
        })

        return(
            <div className="App">
                <h2>Change State Component </h2>
                <h3>Welcome {this.state.name} </h3>
                <div>{changeList}</div>   
            </div>
        )
    }
}
export default App;