import React, { Component } from 'react'
import Possibilites from './Possibilites'

class Question extends Component{

constructor(props) {
    super(props)

    this.state = {
        question:this.props.question,
        text:" ",
        prevpts:0
    }

    this.handleValue = this.handleValue.bind(this)
}


    state={
       
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

    return(
        <tr className="question">   
            <td className="question-number">{this.props.index+1} </td>
    <td className="question-text">{this.state.question.text}</td>
    <td className="question-possibilites-text">{this.state.text}</td>
            <Possibilites className="question-possibilites" handlevalue={this.handleValue} handletext={this.handleText} question={this.state.question} />
        </tr>
    )
    }
    
}
export default Question