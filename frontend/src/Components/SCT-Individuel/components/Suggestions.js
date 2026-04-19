import React, { Component } from 'react'
import Suggestion from './Suggestion'

export class Suggestions extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        this.handleAddPoint = this.handleAddPoint.bind(this)
    }
    


    handleAddPoint = (element) =>{
        this.props.handleaddpoint(element)
    }
    
    render() {
        return (
            <div className="suggestions">
            {this.props.data.map((suggestion,index) => <Suggestion key={index} data={suggestion} handleaddpoint={this.handleAddPoint} />)}
        </div>
        )
    }
}

export default Suggestions
