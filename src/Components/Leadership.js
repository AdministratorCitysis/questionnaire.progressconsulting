import React, { Component } from 'react'
import Questionnaire from './Leadership/Components/Questionnaire'

export default class Leadership extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    
    render() {

        
        return (
            <div className="App">
            <Questionnaire />
            </div>
        )
    }
}
