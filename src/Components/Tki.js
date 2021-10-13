import React, { Component } from 'react'
import Questionnaire from './Tki/Components/Questionnaire'

export default class Tki extends Component {
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
