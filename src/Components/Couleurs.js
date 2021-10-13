import React, { Component } from 'react'
//import './Couleurs/css/couleurs.css'
import Header from './Couleurs/components/Header'
import Questionnaire from './Couleurs/components/Questionnaire'

export default class Couleurs extends Component {
  
    componentDidMount() {
        window.scrollTo(0, 0)
      }
  
    render() {
        return (
            <div className="App">
                <div className="survey">
                <Header />
                <Questionnaire />
                </div>
            </div>
        )
    }
}
