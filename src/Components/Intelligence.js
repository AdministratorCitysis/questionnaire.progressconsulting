import React, { Component } from 'react'
import Questionnaire from './Intelligence/components/Questionnaire'
//import './Intelligence/dist/css/questionnaire.css'

export default class Intelligence extends Component {
    
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
