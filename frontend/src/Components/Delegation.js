import React, { Component } from 'react'
//import './Delegation/dist/css/questionnaire.css'
import Questionnaire from './Delegation/Components/Questionnaire'

export default class Delegation extends Component {
    
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
