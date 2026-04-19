import React, { Component } from 'react'
import Context from './Context'
import Header from './Header'
import Questions from './Questions'
import Answer from './Answer'
//import {ReactComponent as Graphic} from '../includes/graphic.svg'

export default class Questionnaire extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
             questionnaire: {
                title: "What is your profile?",
                description : " Which of the characteristics in each box, describe you best?",
                instruction : "Answer in an honest way, not what is socially desirable. Don't think about it too long. It has to be as intuitive as possible.",
                categories:[
                    {
                        id:11,
                        name: "H-scores",
                        value:0,
                    },
                    {
                        id:12,
                        name:"V-scores",
                        value:0,
                    },
                ],
                questions : [
                    {
                        id:21,
                        value:0,
                        categoryId:11,
                        completed:false,
                        choices : [
                            {
                                id:31,
                                name:"Efficient",
                                value : 2,
                            },
                            {
                                id:32,
                                name:"Dominant",
                                value : 3,
                            },
                            {
                                id:33,
                                name:"Helpful",
                                value : 1,
                            }
                        ],
                    },
                    {
                        id:22,
                        categoryId:11,
                        value:0,
                        completed:false,
                        choices : [
                            {
                                id:34,
                                name:"Is able to stand up for him/herself",
                                value : 3,
                            },
                            {
                                id:35,
                                name:"Calm",
                                value : 2,
                            },
                            {
                                id:36,
                                name:"Satisfied /Content",
                                value : 1,
                            }
                        ],
                    },
                    {
                        id:23,
                        categoryId:12,
                        value:0,
                        completed:false,
                        choices : [
                            {
                                id:37,
                                name:"Quiet",
                                value : 1,
                            },
                            {
                                id:38,
                                name:"Toughtful",
                                value : 2,
                            },
                            {
                                id:39,
                                name:"Social",
                                value : 3,
                            }
                        ],
                    },
                    {
                        id:24,
                        categoryId:12,
                        value:0,
                        completed:false,
                        choices : [
                            {
                                id:310,
                                name:"Jovial",
                                value : 3,
                            },
                            {
                                id:311,
                                name:"Friendly",
                                value : 2,
                            },
                            {
                                id:312,
                                name:"Takes his/her responsability",
                                value : 1,
                            }
                        ],
                    },
                    {
                        id:25,
                        categoryId:11,
                        value:0,
                        completed:false,
                        choices : [
                            {
                                id:313,
                                name:"Attentive",
                                value : 3,
                            },
                            {
                                id:314,
                                name:"Likes to negotiate",
                                value : 2,
                            },
                            {
                                id:315,
                                name:"Takes his/her responsability",
                                value : 1,
                            }
                        ],
                    },
                    {
                        id:26,
                        categoryId:11,
                        value:0,
                        completed:false,
                        choices : [
                            {
                                id:316,
                                name:"Sensitive",
                                value : 1,
                            },
                            {
                                id:317,
                                name:"Uncompromising",
                                value : 3,
                            },
                            {
                                id:318,
                                name:"Wants to cooperate",
                                value : 2,
                            }
                        ],
                    },
                    {
                        id:27,
                        categoryId:12,
                        value:0,
                        completed:false,
                        choices : [
                            {
                                id:319,
                                name:"Stubborn",
                                value : 1,
                            },
                            {
                                id:320,
                                name:"Cautious",
                                value : 2,
                            },
                            {
                                id:321,
                                name:"Extraverted",
                                value : 3,
                            }
                        ],
                    },
                    {
                        id:28,
                        categoryId:12,
                        value:0,
                        completed:false,
                        choices : [
                            {
                                id:322,
                                name:"Enthusiastic",
                                value : 3,
                            },
                            {
                                id:323,
                                name:"Reserved",
                                value : 1,
                            },
                            {
                                id:324,
                                name:"Cautious",
                                value : 2,
                            }
                        ],
                    },
                    {
                        id:29,
                        categoryId:11,
                        value:0,
                        completed:false,
                        choices : [
                            {
                                id:325,
                                name:"Obstinate",
                                value : 3,
                            },
                            {
                                id:326,
                                name:"Active",
                                value : 2,
                            },
                            {
                                id:327,
                                name:"Very accurate",
                                value : 1,
                            }
                        ],
                    },
                    {
                        id:210,
                        categoryId:11,
                        value:0,
                        completed:false,
                        choices : [
                            {
                                id:328,
                                name:"Fighter mentality",
                                value : 3,
                            },
                            {
                                id:329,
                                name:"Well balanced",
                                value : 2,
                            },
                            {
                                id:330,
                                name:"Accommodating",
                                value : 1,
                            }
                        ],
                    },
                    {
                        id:211,
                        categoryId:12,
                        value:0,
                        completed:false,
                        choices : [
                            {
                                id:331,
                                name:"Cheerful",
                                value : 3,
                            },
                            {
                                id:332,
                                name:"Wants to please others",
                                value : 2,
                            },
                            {
                                id:333,
                                name:"Has willpower",
                                value : 1,
                            }
                        ],
                    },
                    {
                        id:212,
                        categoryId:12,
                        value:0,
                        completed:false,
                        choices : [
                            {
                                id:334,
                                name:"Sticks to what was agreed upon",
                                value : 1,
                            },
                            {
                                id:335,
                                name:"Energetic",
                                value : 3,
                            },
                            {
                                id:336,
                                name:"Diplomatic",
                                value : 2,
                            }
                        ],
                    },
                    {
                        id:213,
                        categoryId:11,
                        value:0,
                        completed:false,
                        choices : [
                            {
                                id:337,
                                name:"Argues easily",
                                value : 3,
                            },
                            {
                                id:338,
                                name:"Careless",
                                value : 2,
                            },
                            {
                                id:339,
                                name:"Adapts him/herself easily",
                                value : 1,
                            }
                        ],
                    },
                    {
                        id:214,
                        categoryId:11,
                        value:0,
                        completed:false,
                        choices : [
                            {
                                id:340,
                                name:"Accommodating",
                                value : 2,
                            },
                            {
                                id:341,
                                name:"Obedient",
                                value : 1,
                            },
                            {
                                id:342,
                                name:"Controlling",
                                value : 3,
                            }
                        ],
                    },
                    {
                        id:215,
                        categoryId:12,
                        value:0,
                        completed:false,
                        choices : [
                            {
                                id:343,
                                name:"Organized",
                                value : 2,
                            },
                            {
                                id:344,
                                name:"Careful",
                                value : 1,
                            },
                            {
                                id:345,
                                name:"Original",
                                value : 3,
                            }
                        ],
                    },
                    {
                        id:216,
                        categoryId:12,
                        value:0,
                        completed:false,
                        choices : [
                            {
                                id:346,
                                name:"Popular",
                                value : 3,
                            },
                            {
                                id:347,
                                name:"Disciplined",
                                value : 1,
                            },
                            {
                                id:348,
                                name:"Well-read",
                                value : 2,
                            }
                        ],
                    },
                ],
                answers:[
                    //Y > 16
                    [
                        //X > 16 ==> Jaune
                        {
                            id:1,
                            text:"Yellow",
                            color:'#EDE813',
                            primary:"RECOGNITION, Being a reference",
                            secondary:["Extrovert","Intuitive - global vision","Future oriented","Creative","Curious","Optimistic","Positive"],
                        },
                        //X == 16 ==> Résultat
                        {
                            id:2,
                            text:"Relationship",
                            color: "#FFFFFF",
                            primary:"Your result is undefined on the horizontal axis",
                            secondary:["We can nevertheless deduce an attention towards the relational side.The priority is rather the human one, the people, the relation with the others."],
                        },
                        //X > 16 ==> Vert
                        {
                            id:3,
                            text:"Green",
                            color:'#009640',
                            primary:"HARMONY, To be accepted",
                            secondary:["User-friendly","Warm - Relationship oriented","Comfort","Empathy","Friendly - measured","Listening"],
                           
                        },
                    ],
                    //Y == 16
                    [
                        //X > 16
                        {
                            id:4,
                            text:"Extrovert",
                            color: "#FFFFFF",
                            primary:"Your result is undefined on the vertical axis",
                            secondary:["We can nevertheless deduce an attention to the feelings, opinions, or recurring reasoning"],
                        },
                        //X == 16
                        {
                            id:5,
                            text:"Indefinite",
                            color: "#FFFFFF",
                            primary:"Your result is undefined on the vertical and horizontal axis",
                            secondary:["You can try again by replacing some answers on which you might have been hesitant"],
                        },
                        //X < 16
                        {
                            id:6,
                            text:"Introverted",
                            color: "#FFFFFF",
                            primary:"Your result is undefined on the vertical axis",
                            secondary:["We can nevertheless deduce a less visible energy. Feelings, opinions are more internalized"],
                        }
                    ],
                    //Y > 16
                    [
                        //X > 16
                        {
                            id:7,
                            text:"Red",
                            color:'#E30613',
                            primary:"EFFICIENCY, Being able to decide",
                            secondary:["Short","Concise","Direct","Organized","Result oriented - straight to the point","Confident","Concrete"],
                        },
                        //X == 16
                        {
                            id:8,
                            text:"Result",
                            color: "#FFFFFF",
                            primary:"Your result is undefined on the horizontal axis",
                            secondary:["We can nevertheless deduce the attention paid to the tasks to be carried out, to the objectives and the results."],
                        },
                        //X < 16
                        {
                            id:9,
                            text:"Blue",
                            color:'#045576',
                            primary:"SAFETY, Be reassured",
                            secondary:["reserved","Precise - thorough","Analytic","Operational","Factual - methodical","Patient"],
                        },
                    ],
                    
                    
                    
                ],
             

             }
        }


    }
    
    handleAddPoint = (data) => {
        //console.log("data",data)
        let questions = this.state.questionnaire.questions
        let categories = this.state.questionnaire.categories
        const qIndex = questions.findIndex(element => element.id === data.questionId)
        //console.log("qIndex",qIndex)
        if(qIndex >=0)
        {
            const cIndex = categories.findIndex(element => element.id === questions[qIndex].categoryId)
                questions[qIndex].value = data.value
                questions[qIndex].completed = true
                categories[cIndex].value += parseInt(data.value)
                //console.log("cIndex",cIndex)
            }
        this.setState({
            questions,
            categories
        })
    }
   
    render() {
        return (
            <Context.Provider value={this.state.questionnaire} className="survey">
                <Header />
                <Questions questions = {this.state.questionnaire.questions} handleclick={this.handleAddPoint}/>
                <Answer />
            {/*<Graphic />*/}
            </Context.Provider>
        )
    }
}
