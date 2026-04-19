import React, { Component } from 'react'
import Questionnaire from './Creativite/Components/Questionnaire'

export default class Creativite extends Component {
   
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
