import React, { Component } from 'react'
import Questionnaire from './Activitemanageriale/Components/Questionnaire'

export default class Activitemanageriale extends Component {
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
