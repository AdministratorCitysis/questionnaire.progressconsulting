import React, { Component } from 'react'
import Questionnaire from './TKI_NL/Components/Questionnaire'

export default class TKI_NL extends Component {
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
