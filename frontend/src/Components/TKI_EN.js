import React, { Component } from 'react'
import Questionnaire from './TKI_EN/Components/Questionnaire'

export default class TKI_EN extends Component {
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
