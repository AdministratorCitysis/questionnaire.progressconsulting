import React, { Component } from 'react'
import Choice from './Choice'

export default class xChoices extends Component {
    
    constructor(props){
        super(props)

        this.state={
            choices : this.props.choices,

        }
    }

    handleAddPoint=(data)=>{
        this.props.handleaddpoint(data)
    }
    
    render() {
        return this.state.choices.map((choice,index) => <Choice key={index} choice={choice} maximum={this.props.maximum} maxpoint={this.props.maxpoint} handleaddpoint={this.handleAddPoint}/>)
    }
}