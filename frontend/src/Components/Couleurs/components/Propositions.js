import React, { Component } from 'react'
import Proposition from './Proposition'



export default class Propositions extends Component {
    
    constructor(props){
        super(props)

        this.state={
            propositions : this.props.propositions,
            maxpoint : this.props.maxpoint
        }
    }
    
    handleAddPoint = (data) =>{
        //console.log("data propositions", data)
        this.props.handleaddpoint(data)
    }

    render() {

        return (
            <div className="propositions">
                {this.state.propositions.map((prop,index) => <Proposition key={index} maxpoint={this.props.maxpoint} proposition={prop} handleaddpoint={this.handleAddPoint} />)}
            </div>
        )
    }
}
