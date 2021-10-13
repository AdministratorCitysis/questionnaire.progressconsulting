import React, { Component } from 'react'
import Header from './Header'
import Categories from './Categories'

export default class Questionnaire extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            questionnaire :
                {
                    titre: "Cultural Intelligence Self-assessment",
                    answers: [
                        {id:1,
                        number:"1",
                        text:"Never",
                        value:1},
                        {id:2,
                        number:"2",
                        text:"Once in a while",
                        value:2},
                        {id:3,
                        number:"3",
                        text:"Often",
                        value:3},
                        {id:4,
                        number:"4",
                        text:"Most of the time",
                        value:4},
                        {id:5,
                        number:"5",
                        text:"All the time",
                        value:5
                        }
    
                    ],
                    reponses : [
                        {
                        maxvalue:15,
                        text:"Very low : You need to start taking deliberate steps to develop your cultural intelligence.",
                        },
                        {
                        maxvalue:25,
                        text:"Low : You've started considering how to 'be' in a global world, but you should consider paying more conscious attention to developing your cultural intelligence.",
                        },
                        {
                        maxvalue:35,
                        text:"Average : You're making progress, but more attention is needed for success in the global marketplace.",
                        },
                        {
                        maxvalue:45,
                        text:"Above average : You're well on your way to having the cultural intelligence needed to become an effective global leader.",
                        },
                        {
                        maxvalue:50,
                        text:"Cultural genius : Your colleagues would probably benefit greatly from your approach. Be sure to share what you do and know with them!",
                        },
                    ],
                    categories : [
                        {
                            id:1,
                            name : "",
                            description: "Use this self-assessment to get an idea of your level of cultural intelligence.", 
                            title : "How often do the following statements apply to you?",
                            completed:false,
                            value:'',
                            questions : [
                                {
                                id:1,
                                text:"I put effort into finding out the differences and similarities between cultures around the world and my own culture.",  
                                value:'',
                                completed:false
                            },
                                {
                                id:2,
                                text:"I feel comfortable talking with people from different cultures.",  
                                value:'',
                                completed:false
                            },
                                {
                                id:3,
                                text:"I am aware that cultural differences may cause different understandings of the same goals.",  
                                value:'',
                                completed:false
                            },
                                {
                                id:4,
                                text:"I am mindful of the influence of culture on me and on those from other cultures.",  
                                value:'' ,
                                completed:false   
                            },
                                {
                                id:5,
                                text:"I adapt my behavior according to the cultural situation.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:6,
                                text:"I leverage the underlying motives of the people I lead to achieve team goals. ",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:7,
                                text:"I factor in the perspectives of people from other cultures when interacting with them.",    
                                value:'',
                                completed:false
                            },    
                            {
                                id:8,
                                text:"If I can't fully accomodate everyone's cultural motivations, I try to adapt in smaller ways.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:9,
                                text:"I build trust through reasoning or in a social manner, depending on the culture I am interacting with.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:10,
                                text:"I feel that I interact effectively with people who are culturally different from me.",  
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

    /*    this.setState(state => 
            state.questionnaire.categories.map(cat =>{
                cat.questions.map(question =>{
                    if(question.id === id)
                        {
                            question.completed = true
                            
                        }
                        
                    }) 
                return cat.completed = cat.questions.every(question => question.completed === true)
            })
            
        )*/
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

    /*SetCategorieMessage = (data) => {
        const reponses = this.state.questionnaire.reponses
        this.setState(state =>
            state.questionnaire.categories.map(
                cat => {
                    if(cat.id === data.id)
                    {if(cat.completed)
                        {
                            console.log("je rentre dans le if completed")
                            for(let i=0;i<reponses.length;i++)
                                {   console.log("valeur categorie: ",cat.value)
                                    console.log("valeur reponses: ",reponses[i].maxvalue)
                                   if(parseInt(cat.value) <= parseInt(reponses[i].maxvalue)) {
                                        return data.message = ("Score: " + cat.value + " - " + reponses[i].text)
                                    }  
                                    
                                }
                        }}
                        return true
                    }
            ))
        
    }*/
    
    render() {

        return (
            <div className="survey" >
                <Header questionnaire={this.state.questionnaire} />
               <Categories data={this.state.questionnaire} setcategorievalue={this.SetCategorieValue} setquestioncompleted={this.SetQuestionCompleted} />
            </div>
        )
    }
}
