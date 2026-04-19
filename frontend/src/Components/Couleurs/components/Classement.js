import React, { Component } from 'react'
import Suggestions from './Suggestions'

export default class Classement extends Component {
    
    handleAddPoint = (data) =>{
        data.classementId = this.props.data.id
        this.props.handleaddpoint(data)
    }
    
    
    render() {
        return (
            <div className="classement">
                <p className="classement-title">{this.props.data.title}{this.props.data.instruction}</p>
                <Suggestions data={this.props.data.suggestions} handleaddpoint={this.handleAddPoint} />
            </div>
        )
    }
}
