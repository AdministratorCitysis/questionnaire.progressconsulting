import React, { Component } from 'react'
import Header from './Header'
import Categories from './Categories'

export default class Questionnaire extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            questionnaire :
                {
                    titre: "Managerial activites",
                    answers: [
                        {id:1,
                        number:"1",
                        text:"Never",
                        value:1},
                        {id:2,
                        number:"2",
                        text:"Rarely",
                        value:2},
                        {id:3,
                        number:"3",
                        text:"Sometimes",
                        value:3},
                        {id:4,
                        number:"4",
                        text:"Often",
                        value:4},
                        {id:5,
                        number:"5",
                        text:"Always",
                        value:5
                        }
    
                    ],
                    reponses : [
                        {
                        maxvalue:15,
                        text:"This figure is theoretical, you will discuss face-to-face. This allowed you to concretize the managerial activities that you can set up.",
                        },
                        {
                        maxvalue:25,
                        text:"This figure is theoretical, you will discuss face-to-face. This allowed you to concretize the managerial activities that you can set up.",
                        },
                        {
                        maxvalue:35,
                        text:"This figure is theoretical, you will discuss face-to-face. This allowed you to concretize the managerial activities that you can set up.",
                        },
                        {
                        maxvalue:45,
                        text:"This figure is theoretical, you will discuss face-to-face. This allowed you to concretize the managerial activities that you can set up.",
                        },
                        {
                        maxvalue:10000,
                        text:"This figure is theoretical, you will discuss face-to-face. This allowed you to concretize the managerial activities that you can set up.",
                        },
                    ],
                    categories : [
                        {
                            id:1,
                            name : "",
                            description: "For each question, please tick one answer to know your result.", 
                            title : "In the list of managerial activities below, what is the frequency of implementation in your work?",
                            completed:false,
                            value:'',
                            questions : [
                                {
                                id:1,
                                text:"I organize and lead team meetings.",  
                                value:'',
                                completed:false
                            },
                                {
                                id:2,
                                text:"I explain the vision and strategic decisions.",  
                                value:'',
                                completed:false
                            },
                                {
                                id:3,
                                text:"I provide positive feedback.",  
                                value:'',
                                completed:false
                            },
                                {
                                id:4,
                                text:"I give negative feedback.",  
                                value:'' ,
                                completed:false   
                            },
                                {
                                id:5,
                                text:"I assess skills/results.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:6,
                                text:"I define the missions / skills.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:7,
                                text:"I establish an individual action plan (training plan).",    
                                value:'',
                                completed:false
                            },    
                            {
                                id:8,
                                text:"I define the team's objectives.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:9,
                                text:"I define the individual goals.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:10,
                                text:"I assist a team member who is 'stuck'.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:11,
                                text:"I de-escalate conflicts.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:12,
                                text:"I update myself about the activity of my team.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:13,
                                text:"I set priorities / coordinate projects.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:14,
                                text:"I am involved in transversal projects.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:15,
                                text:"I develop a network of internal / external relations.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:16,
                                text:"I initiate the career plans of my team members.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:17,
                                text:"I live the values of companies (exemplarity).",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:18,
                                text:"I provide the necessary means.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:19,
                                text:"I hold performance reviews.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:20,
                                text:"I hold development reviews.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:21,
                                text:"I establish the processes.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:23,
                                text:"I transmit the information to my manager.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:24,
                                text:"I follow up on activities.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:25,
                                text:"I assign the tasks.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:26,
                                text:"I coordinate with the other managers.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:27,
                                text:"I carry out the administrative follow-up.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:28,
                                text:"I participate in the identification of the necessary means.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:29,
                                text:"I propose ideas for improvement.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:30,
                                text:"I set up a personal development plan.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:31,
                                text:"I study people's behavior (level, attitude, ...).",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:32,
                                text:"I devote time to listening (1/1,...).",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:33,
                                text:"I determine the objectives of my team and evaluate them.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:34,
                                text:"I encourage the team to propose ideas and I present them to others.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:35,
                                text:"I am accessible for the team.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:36,
                                text:"I manage the informal.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:37,
                                text:"I make decisions.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:38,
                                text:"I delegate.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:39,
                                text:"I support / defend my team.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:40,
                                text:"I ask for feedback (on myself, the way I manage).",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:41,
                                text:"I organize a teambuilding.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:42,
                                text:"I organize a work group.",  
                                value:'',
                                completed:false    
                            },
                            ],
                            
                        },
                    ],  
                },
        }
    }

  

    SetQuestionCompleted=(id)=>{
        let newcategorie = this.state.questionnaire.categories[0]
        let newquestions = newcategorie.questions
        const questionIndex = newquestions.findIndex(element => element.id === id)
        newquestions[questionIndex].completed = true
        newcategorie.questions = newquestions
        newcategorie.completed = newquestions.every(question => question.completed === true)
        let newquestionnaire = this.state.questionnaire
        newquestionnaire.categories[0] = newcategorie
        this.setState({questionnaire:newquestionnaire})
    }

    SetCategorieValue = (data) => {
        this.setState(state => 
            state.questionnaire.categories.map(
            cat => {if(cat.id === data.id)
                        {
                            cat.value = parseInt(data.value)
                        }
                        return true
                    }
            
        ))
    }
    
    render() {

        return (
            <div className="survey" >
                <Header questionnaire={this.state.questionnaire} />
               <Categories data={this.state.questionnaire} setcategorievalue={this.SetCategorieValue} setquestioncompleted={this.SetQuestionCompleted} />
            </div>
        )
    }
}
