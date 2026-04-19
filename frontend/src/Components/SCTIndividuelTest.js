import React, { Component } from 'react'
import Header from './SCT-Individuel-Test/components/Header'
import Questionnaire from './SCT-Individuel-Test/components/Questionnaire'

export default class SCTIndividuelTest extends Component {
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
