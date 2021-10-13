import React, { Component } from 'react'
import Header from './SCT-Individuel/components/Header'
import Questionnaire from './SCT-Individuel/components/Questionnaire'

export default class SCTIndividuel extends Component {
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
