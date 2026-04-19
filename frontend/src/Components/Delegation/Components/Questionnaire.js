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
                title: "Quelle est votre approche de la délégation",
                description : "Identifier votre approche de la délégation",
                questions:[
                    {
                        id:1,
                        text:"Tout peut se déléguer",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:2,
                        text:"Il est difficile de trouver quelqu'un à qui déléguer car la plupart des gens craignent les responsabilités",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:3,
                        text:"Déléguer, c'est céder une partie de son pouvoir et de ses responsabilités à un collaborateur",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:4,
                        text:"Il est de bonne guerre de déléguer en priorité les activités les moins motivantes",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:5,
                        text:"La délégation suppose un climat de confiance entre le chef et le collaborateur",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:6,
                        text:"Toute délégation implique un contrôle",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:7,
                        text:"La délégation engendre souvent le laxisme et la dilution des responsabilités",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:8,
                        text:"Une délégation n'est jamais définitive",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:9,
                        text:"Il faut parfois savoir imposer la délégation à des collaborateurs réticents",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:10,
                        text:"Un collaborateur peut très bien refuser la délégation qu'on lui propose",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:11,
                        text:"La délégation suppose un droit à l'erreur pour le collaborateur",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:12,
                        text:"La délégation est le plus souvent inutile, car pourquoi faire faire par d'autres des choses qu'on ferait mieux ou plus vite soi-même?",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:13,
                        text:"Le bénéficiaire d'une délégation auto-contrôle son activité et ses résultats",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:14,
                        text:"La notion de contrôle est contraire à l'esprit de la démarche de délégation",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:15,
                        text:"Les modalités et la périodicité du contrôle sont déterminées et annoncées au départ lors de la mise en place d'une délégation",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:16,
                        text:"La délégation permet au responsable hiérarchique de mieux gérer son temps",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:17,
                        text:"Le responsable qui délègue trop risque de constater un jour... qu'il n'a plus grand chose à faire",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:18,
                        text:"En cas d'imprévu grave dans le cadre d'une délégation c'est le collaborateur qui informe le responsable hiérarchique",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:19,
                        text:"Dans la démarche de délégation, le responsable ne doit pas intervenir en dehors des procédures de contrôle prévues ou de celles demandées par le collaborateur",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:20,
                        text:"La délégation se pratique essentiellement en cas d'absence du responsable",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                ],
                choices: [
                    {id:1,
                    number:"--",
                    text:"Tout à fait FAUX",
                    value:0},
                    {id:2,
                    number:"-",
                    text:"Plutôt FAUX",
                    value:0},
                    {id:3,
                    number:"+",
                    text:"Plutôt VRAI",
                    value:0},
                    {id:4,
                    number:"++",
                    text:"Tout à fait VRAI",
                    value:0}
                ],
                answers : [
                    {
                    maxvalue:30,
                    text:"Vous avez sans doute du mal avec la délégation et la séance plénière devrait vous aider à y voir plus clair.",
                    },
                    {
                    maxvalue:60,
                    text:"Vous déléguez régulièrement mais vous pouvez sans doute encore faire des progrès dans cet outil de motivation de vos équipes et de gestion des priorités pour vous.",
                    },
                    {
                    maxvalue:80,
                    text:"Vous êtes un champion de la délégation ! Nous nous réjouissons de partager votre expérience lors de la séance plénière.",
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
