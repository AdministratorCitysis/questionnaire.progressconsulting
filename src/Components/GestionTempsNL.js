import React, { Component } from 'react'
import Questionnaire from './GestionTempsNL/Components/Questionnaire'
//import './GestionTemps/dist/css/questionnaire.css'

export default class GestionTemps extends Component {
   
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
