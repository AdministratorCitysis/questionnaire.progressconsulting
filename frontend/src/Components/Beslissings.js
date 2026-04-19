import React, { Component } from 'react'
import Questionnaire from './Beslissings/Components/Questionnaire'

export default class Assertiviteit extends Component {
     
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
