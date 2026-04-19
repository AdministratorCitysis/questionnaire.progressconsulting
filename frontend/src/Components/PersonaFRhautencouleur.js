import React, { Component } from 'react'
import Questionnaire from './PersonaFRhautencouleur/Components/Questionnaire'

export default class Caracteristique extends Component {
    
    
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
