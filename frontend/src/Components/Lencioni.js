import React, { Component } from 'react'
import Questionnaire from './Lencioni/Components/Questionnaire'

export default class Lencioni extends Component {
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
