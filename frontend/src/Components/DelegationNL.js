import React, { Component } from 'react'
//import './Delegation/dist/css/questionnaire.css'
import Questionnaire from './DelegationNL/Components/Questionnaire'

export default class DelegationNL extends Component {
    
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
