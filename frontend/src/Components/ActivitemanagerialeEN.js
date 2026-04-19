import React, { Component } from 'react'
import Questionnaire from './ActivitemanagerialeEN/Components/Questionnaire'

export default class ActivitemanagerialeEN extends Component {
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
