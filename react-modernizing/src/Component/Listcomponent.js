import React from "react";


class ListComp extends React.Component{

    render(){

        return(
            <>              
                <h3> {this.props.item} <span onClick={() =>this.props.onDelete(this.props.item)}>X</span></h3>
            </>
        )
    }
}
export default ListComp;