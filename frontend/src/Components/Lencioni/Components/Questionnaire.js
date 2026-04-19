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
                title: "Questionnaire Lencioni",
                description : "Dans quelle mesure chacune des affirmations suivantes vous correspond-elle ?",
                instruction : "Il est important d'évaluer les énoncés en toute honnêteté et sans tenter de prévoir l'incidence de vos réponses sur les résultats.",
                conclusion : "Peu importe vos résultats, il est important de garder à l'esprit le fait que le travail d'équipe exige des efforts constants, car sans eux, même la meilleure équipe peut glisser dans le dysfonctionnement.",
                completed: false,
                questions:[
                    {
                        id:1,
                        text:"Les membres de l'équipe sont passionés et ouverts lorsqu'ils discutent d'un problème.",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:2,
                        text:"Les membres de l'équipe font remarquer à leurs pairs leurs points faibles ou des comportements improductifs.",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:3,
                        text:"Les membres de l'équipe connaissent la teneur des tâches de leurs pairs et savent en quoi leur contribution est collectivement bénéfique.",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:4,
                        text:"Les membres de l'équipe s'excusent sincèrement et sans tarder auprès de leurs pairs lorsqu'ils disent ou font quelque chose d'inapproprié ou qui pourrait porter préjudice au groupe.",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:5,
                        text:"Les membres de l'équipe font volontairement des sacrifices (en ce qui a trait au budget, aux rivalités, et aux effectifs) dans leurs services ou domaines de compétence, et ce, dans l'intérêt du groupe.",
                        value:0,
                        categoryId:5,
                        completed:false,
                    },
                    {
                        id:6,
                        text:"Les membres de l'équipe admettent ouvertement leurs points faibles et leurs erreurs.",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:7,
                        text:"Les réunions de l'équipe admettent ouvertement leurs points faibles et leurs erreurs.",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:8,
                        text:"Les membres de l'équipe quittent les réunions en sachant que leurs pairs se sont entièrement engagés envers les décisions qui ont été prises, même s'ils s'y opposaient initialement.",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:9,
                        text:"Le moral des troupes est directement proportionnel à l'atteinte des résultats de l'équipe.",
                        value:0,
                        categoryId:5,
                        completed:false,
                    },
                    {
                        id:10,
                        text:"Pendant les réunions de l'équipe, les problèmes les plus importants - et plus complexes - sont abordés dans le but d'y trouver une solution.",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:11,
                        text:"Les membres de l'équipe sont profondément préoccupés par la perspective de décevoir leurs pairs.",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:12,
                        text:"Les membres de l'équipe sont au courant de la vie personnelle de leurs pairs et se sentent à l'aise d'en discuter.",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:13,
                        text:"Les membres de l'équipe mettent fin à leurs discussions en prenant des résolutions fermes et spécifiques et dressent des plans d'action.",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:14,
                        text:"Les membres de l'équipe remettent en question leurs approches et leurs plans respectifs.",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:15,
                        text:"Les membres de l'équipe ne s'empressent pas de faire reconnaître leurs contributions personnelles, mais n'hésitent pas à souligner immédiatement celles des autres.",
                        value:0,
                        categoryId:5,
                        completed:false,
                    },
                ],
                choices: [
                    {id:1,
                    number:"1",
                    text:"Rarement",
                    value:1},
                    {id:2,
                    number:"2",
                    text:"Parfois",
                    value:2},
                    {id:3,
                    number:"3",
                    text:"Habituellement",
                    value:3},
                ],
                answers : [
                    {
                    maxvalue:5,
                    text:"Votre résultat est probablement une indication que la dysfonction doit être prise en compte.",
                    },
                    {
                    maxvalue:7,
                    text:"Votre résultat indique que la dysfonction pourrait représenter un problème.",
                    },
                    {
                    maxvalue:9,
                    text:"Votre résultat est une indication probable que la dysfonction n'est pas un problème pour votre équipe.",
                    },
                ],
                categories:[
                    {
                        id:1,
                        text:["Manque de confiance"], 
                        color : "#002F47",
                        description:"",
                        value:0
                    },
                    {
                        id:2,
                        text:["Peur de la confrontation"],
                        color : "#002F47",
                        description:"",
                        value:0
                    },
                    {
                        id:3,
                        text:["Absence d'engagement"],
                        color : "#002F47",
                        description:"",
                        value:0
                    },
                    {
                        id:4,
                        text:["Évitement de la responsabilisation"],
                        color : "#002F47",
                        description:"",
                        value:0
                    },  
                    {
                        id:5,
                        text:["Inattention portée aux résultats"],
                        color : "#002F47",
                        description:"",
                        value:0
                    },  
                ]
            }
       }

       this.handleValue = this.handleValue.bind(this)
   }
   
   handleValue = (props) => {
    let questionnaire = this.state.questionnaire
    let questions = questionnaire.questions
    const qIndex = questions.findIndex(question => question.id === props.id)
    questions[qIndex] = props
    questionnaire.questions = questions
    let categories = this.state.questionnaire.categories

    //console.log("categories",categories)
    let cIndex = categories.findIndex(category => category.id === props.categoryId)
    //console.log("cIndex",cIndex)
    if(cIndex >= 0)
    {
        let newcategory = categories[cIndex]
        newcategory.value += props.value
        categories[cIndex] = newcategory
        questionnaire.categories = categories
    }
    questionnaire.completed = questionnaire.questions.every(question => question.completed === true)
    this.setState({questionnaire})

   }
   
    render() {
        return (
            <Context.Provider value={this.state.questionnaire} >
                <div className="survey">
                <Header questionnaire={this.state.questionnaire}/>
                <Questions questions={this.state.questionnaire.questions} description={this.state.questionnaire.description} handlevalue={this.handleValue} />
               <Answer questions={this.state.questionnaire.questions} categories={this.state.questionnaire.categories} />
               {/* <div className="asterix">
                <p>*{this.state.questionnaire.asterix}</p>
                </div>*/}
                </div>
            </Context.Provider> 
        )
    }
}
