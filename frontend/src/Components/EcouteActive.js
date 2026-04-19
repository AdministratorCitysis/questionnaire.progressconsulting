import React, { Component } from 'react'
import Questionnaire from './EcouteActive/Components/Questionnaire'


export default class EcouteActive extends Component {
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
