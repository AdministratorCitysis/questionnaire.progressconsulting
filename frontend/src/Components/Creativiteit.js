import React, { Component } from 'react'
import Questionnaire from './Creativiteit/Components/Questionnaire'

export default class Creativiteit extends Component {
   
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
