import React, { Component } from 'react'
import Questionnaire from './Skillsoft/Components/Questionnaire'

export default class Skillsoft extends Component {
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
