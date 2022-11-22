import React from "react";
import './App.css'
import ListComp from "./Component/Listcomponent"
import AddListItem from "./Component/addItem";
import { Link } from "react-router-dom";

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

    onAdd = (item)=>{
        const updateList = this.state.list;
        updateList.push(item);
        this.setState({
            list : updateList
        })
    }

    componentWillMount(){
        console.log('componentWillMount');
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    componentWillUpdate(){
        console.log('componentWillUpdate');
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
                <h1>Change State Component </h1>
                <h2>Welcome {this.state.name} </h2>
                <Link to={'/about'}><h4>About Us</h4></Link>
                <div className="list-items">{changeList}
                <AddListItem onAdd={this.onAdd}/>  
                </div> 
            </div>
        )   
    }
}
export default App;