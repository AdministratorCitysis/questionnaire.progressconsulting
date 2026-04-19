import React, { Component } from 'react'
import Question from './Question'

class Questions extends Component {

    state={
        counter:0
    }

    GetAnswerValue = (value) =>{
        let cnt = parseInt(this.state.counter) 
        cnt += parseInt(value)
        this.setState({counter: cnt})
        this.props.setmessage(cnt)
    }

    SetQuestionCompleted = (question) => {
        this.props.setquestioncompleted(question)
    }

    render(){

        const questions = this.props.questions
        const data = this.props.data
        
        return(
                <table className="questions-table">
                    <tbody>
        {questions.map((question,index)=>
        (
            <Question key={index} question={question} data={data}  getanswervalue={this.GetAnswerValue} setquestioncompleted={this.SetQuestionCompleted}/>
            
        ))}     
                    </tbody>
                </table>
        )
    }
}
export default Questions