import React, { Component } from 'react'
import Questionnaire from './Assertiveness/Components/Questionnaire'

export default class Assertiveness extends Component {
     
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
