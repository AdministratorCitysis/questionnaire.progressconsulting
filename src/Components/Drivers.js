import React, { Component } from 'react'
import Questionnaire from './Drivers/Components/Questionnaire'

export default class Drivers extends Component {
   
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
