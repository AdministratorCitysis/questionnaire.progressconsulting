import React, { Component } from 'react'
//import './Delegation/dist/css/questionnaire.css'
import Questionnaire from './DelegationEN/Components/Questionnaire'

export default class DelegationEN extends Component {
    
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
