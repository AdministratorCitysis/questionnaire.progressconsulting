import React, { Component } from 'react'
import Question from './Question'

export default class Questions extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.handleValue = this.handleValue.bind(this)
    }
    
    handleValue = (question) =>{
        this.props.handlevalue(question)
    }
    
    render() {

        const questions = this.props.questions
        const description = this.props.description

        return (
            <div className="questions">
                <div className="questions-description">
                   <p>{description}</p> 
                </div>
                <table className="questions-table">
                    <tbody>
                        {questions.map((question,index)=>
                        (
                            <Question key={index} index={index} question={question} handlevalue={this.handleValue} />
                        ))}     
                    </tbody>
                </table>

                
            </div>
        )
    }
}
