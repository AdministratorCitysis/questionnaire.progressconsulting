import React, { Component } from 'react'

import Header from './Header'
import Questions from './Questions'
import Context from './Context'
import Answer from './Answer'

export default class Questionnaire extends Component {
   
   constructor(props) {
       super(props)
   
       this.state = {
            questionnaire: 
            {
                title: "How do you approach delegation ?",
                description : "Define your approach to delegation",
                questions:[
                    {
                        id:1,
                        text:"One can delegate everything",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:2,
                        text:"It is difficult to find someone to whom one can delegate, because most people do not take up responsibilities",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:3,
                        text:"To delegate is to cede some of one's power and responsibilities to a team member",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:4,
                        text:"It is only fair to delegate the least motivating activities as a priority",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:5,
                        text:"Delegation presupposes a climate of trust between the manager and the team member",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:6,
                        text:"Every delegation implies a control",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:7,
                        text:"Delegation often leads to laxity and to reduced sense of responsibility",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:8,
                        text:"Delegation is never final",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:9,
                        text:"Sometimes you need to know how to impose delegation on reluctant team members",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:10,
                        text:"An employee can refuse to take on a delegated task",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:11,
                        text:"Delegating implies that an employee has the right to make mistakes",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:12,
                        text:"Delegating is usually pointless, because why have someone else do something you are good at or can do much faster?",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:13,
                        text:"The recipient of a delegation controls the task and the result themselves",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:14,
                        text:"The concept of control is contrary to the spirit of the delegation approach",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:15,
                        text:"The procedures and frequency of checks are established and announced at the start of delegation",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:16,
                        text:"Delegation allows the hierarchical manager to better manage his/her time",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:17,
                        text:"The manager who delegates too much risks finding one day ... that he/she doesn't have much more to do",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:18,
                        text:"In the event of serious unforeseen circumstances in the context of a delegation, the team member informs the manager ",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:19,
                        text:"When delegating, the manager should not intervene, unless in the control procedures foreseen in advance or if requested by the team member him/herself",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:20,
                        text:"In practice, delegation occurs mainly in the absence of a manager",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                ],
                choices: [
                    {id:1,
                    number:"--",
                    text:"Strongly Disagree ",
                    value:0},
                    {id:2,
                    number:"-",
                    text:"Disagree",
                    value:0},
                    {id:3,
                    number:"+",
                    text:"Agree",
                    value:0},
                    {id:4,
                    number:"++",
                    text:"Totally agree",
                    value:0}
                ],
                answers : [
                    {
                    maxvalue:30,
                    text:"You are probably struggling with delegation and the group session should help you see things more clearly.",
                    },
                    {
                    maxvalue:60,
                    text:"You already delegate regularly, but there is probably room for progress, so you can motivate your teams and manage priorities for yourself.",
                    },
                    {
                    maxvalue:80,
                    text:"You are a champion of delegation! We look forward to sharing your experience during the group session.",
                    },
                ],
                categories:[
                    {
                        id:1,
                        text:"positive",
                        values:[1,2,3,4]
                    },
                    {
                        id:2,
                        text:"negative",
                        values:[4,3,2,1]
                    },
                ]



            }
       }

       this.handleValue = this.handleValue.bind(this)
   }
   
   handleValue = (props) => {
    const questionnaire = this.state.questionnaire
    const questions = questionnaire.questions
    const Index = questions.findIndex(question => question.id === props.id)
    questions[Index] = props
    questionnaire.questions = questions
    this.setState({questionnaire:questionnaire})

   }
   
    render() {
        return (
            <Context.Provider value={this.state.questionnaire} className="survey" >
                <Header questionnaire={this.state.questionnaire}/>
                <Questions questions={this.state.questionnaire.questions} description={this.state.questionnaire.description} handlevalue={this.handleValue} />
                <Answer questions={this.state.questionnaire.questions} answers={this.state.questionnaire.answers} title={this.state.questionnaire.title}/>
            </Context.Provider> 
        )
    }
}
