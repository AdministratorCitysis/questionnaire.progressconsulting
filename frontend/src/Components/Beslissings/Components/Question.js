import React, { Component } from 'react'
import Possibilites from './Possibilites'
import Context from './Context'

class Question extends Component{

constructor(props) {
    super(props)

    this.state = {
        text:" ",
        prevpts:0
    }

    this.handleValue = this.handleValue.bind(this)
}

    handleValue = (question) =>{
        this.props.handlevalue(question)
        
    }
    handleText = (text) => {
        this.setState({text})
    }

    getId = (id) =>{
        //this.props.setquestioncompleted(id)
    }

    render(){
        const question = this.props.question

        return(
            <Context.Consumer>
                {
                data => 
                {     
                    return(
        <tr className="question">   
            <td className="question-number">{question.id}</td>
                <td className="question-text">{question.text}</td>
                <td className="question-possibilites-text">{this.state.text}</td>
            <Possibilites className="question-possibilites" handlevalue={this.handleValue} handletext={this.handleText} question={question} choices={data.choices} />
        </tr>
                    )      
                }}
            </Context.Consumer>
                )}
    
}
export default Question