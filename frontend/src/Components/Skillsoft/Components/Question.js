import React, { Component } from 'react'
import Possibilites from './Possibilites'

class Question extends Component{

    state={
        question:this.props.question,
        text:" ",
        prevpts:0
    }

    handleGetValue = (value) =>{
        let counter =0
        counter -= parseInt(this.state.prevpts)
        counter += parseInt(value)
        this.setState({prevpts:value})
        this.getId(this.state.question.id)
        this.props.getanswervalue(counter)
        
    }
    handleText = (text) => {
        this.setState({text})
    }

    getId = (id) =>{
        this.props.setquestioncompleted(id)
    }

    render(){

    return(
        <tr className="question">   
            <td className="question-number">{this.state.question.id} </td>
            <td className="question-text">{this.state.question.text}</td>
            <td className="question-possibilites-text">{this.state.text}</td>
            <Possibilites className="question-possibilites" data={this.props.data} handlegetvalue={this.handleGetValue} handletext={this.handleText} question={this.state.question} />          
        </tr>
    )
    }
    
}
export default Question