import React, { Component } from 'react'
import Classement from './Classement'
import Answer from './Answer'
import Questions from './Questions'
import Context from './Context'

export default class Questionnaire extends Component {
    
    constructor(props){
        super(props)

        this.state ={
            title:"Questionnaire SCT",
            categories:[
                {
                    id:1,
                    text:["Prémoderne Clanique"],
                    color:'#62388E',
                    value:0
                },
                {
                    id:2,
                    text:["Prémoderne Guerrier"],
                    color:'#E51A1F',
                    value:0
                },
                {
                    id:3,
                    text:["Prémoderne Autoritaire"],
                    color:'#5B9BD4',
                    value:0
                },
                {
                    id:4,
                    text:["Modernisme"],
                    color:'#FCBF17',
                    value:0
                },
                {
                    id:5,
                    text:["Postmoderne"],
                    color:'#70AD47',
                    value:0
                },
                {
                    id:6,
                    text:["Hypermoderne"],
                    color:'#F1E60F',
                    value:0
                },
                {
                    id:7,
                    text:["Hypermoderne Intégral"],
                    color:'#47BCC2',
                    value:0
                },
            ],
            Classements : [
             {
                 id:1,
                "title" : "Partie 1. Classer ces différents mots/expressions par ordre d'importance. Du plus attirant au moins attirant.",
                "instruction":"",
                "maxpoint":7,
                "completed" : false,
                "suggestions":[
                    {
                        "id":1,
                        "text":"Proposition",
                        "completed" : false,
                        "possibilites": [
                            {
                                "id":1,
                                "title":"Tradition",
                                "categoryId":1,
                                value:0
            
                            },
                            {
                                "id":2,
                                "title":"Être respecté(e) !",
                                "categoryId":2,
                                value:0
            
                            },
                            {
                                "id":3,
                                "title":"Mérite",
                                "categoryId":4,
                                value:0
            
                            },
                            {
                                "id":4,
                                "title":"Sens",
                                "categoryId":7,
                                value:0
            
                            },
                            {
                                "id":5,
                                "title":"Egalité",
                                "categoryId":5,
                                value:0
            
                            },
                            {
                                "id":6,
                                "title":"Discipline",
                                "categoryId":3,
                                value:0
            
                            },
                            {
                                "id":7,
                                "title":"Créativité",
                                "categoryId":6,
                                value:0
            
                            },
                        ]
                    },
                    {
                        "id":2,
                        "completed" : false,
                        "text":"Proposition",
                        "possibilites": [
                            {
                                "id":1,
                                "title":"Pouvoir",
                                "categoryId":2,
                                value:0
            
                            },
                            {
                                "id":2,
                                "title":"Management participatif",
                                "categoryId":5,
                                value:0
            
                            },
                            {
                                "id":3,
                                "title":"Entrepreneur",
                                "categoryId":4,
                                value:0
            
                            },
                            {
                                "id":4,
                                "title":"Structure",
                                "categoryId":3,
                                value:0
            
                            },
                            {
                                "id":5,
                                "title":"Rituel",
                                "categoryId":1,
                                value:0
            
                            },
                            {
                                "id":6,
                                "title":"Autonomie",
                                "categoryId":6,
                                value:0
            
                            },
                            {
                                "id":7,
                                "title":"Ecologie",
                                "categoryId":7,
                                value:0
            
                            },
                        ]
                    },
                    {
                        "id":3,
                        "completed" : false,
                        "text":"Proposition",
                        "possibilites": [
                            {
                                "id":1,
                                "title":"Ambition",
                                "categoryId":4,
                                value:0
            
                            },
                            {
                                "id":2,
                                "title":"Processus",
                                "categoryId":3,
                                value:0
            
                            },
                            {
                                "id":3,
                                "title":"Univers",
                                "categoryId":7,
                                value:0
            
                            },
                            {
                                "id":4,
                                "title":"Harmonie",
                                "categoryId":5,
                                value:0
            
                            },
                            {
                                "id":5,
                                "title":"Honneur",
                                "categoryId":1,
                                value:0
            
                            },
                            {
                                "id":6,
                                "title":"Liberté",
                                "categoryId":6,
                                value:0
            
                            },
                            {
                                "id":7,
                                "title":"Rapidité",
                                "categoryId":2,
                                value:0
            
                            },
                        ]
                    },
                    {
                        "id":4,
                        "completed" : false,
                        "text":"Proposition",
                        "possibilites": [
                            {
                                "id":1,
                                "title":"Impact sociétal",
                                "categoryId":7,
                                value:0
            
                            },
                            {
                                "id":2,
                                "title":"Energie",
                                "categoryId":2,
                                value:0
            
                            },
                            {
                                "id":3,
                                "title":"Racines",
                                "categoryId":1,
                                value:0
            
                            },
                            {
                                "id":4,
                                "title":"Succès",
                                "categoryId":4,
                                value:0
            
                            },
                            {
                                "id":5,
                                "title":"Ordre",
                                "categoryId":3,
                                value:0
            
                            },
                            {
                                "id":6,
                                "title":"Amour",
                                "categoryId":5,
                                value:0
            
                            },
                            {
                                "id":7,
                                "title":"Agilité",
                                "categoryId":6,
                                value:0
            
                            },
                        ]
                    },
                ]
            },
        ],
            Questionnaire : [
                {
                    id:1,
                    "title" : "Partie 2. Dans quelle mesure êtes-vous d'accord avec ces affirmations ?",
                    "instruction":"",
                    "completed" : false,
                    questions: [
                        //Série 1
                        {
                            id:1,
                            text:"Le passé est important – il nous aide à définir qui nous sommes", 
                            value:0,
                            categoryId : 1,
                            completed:false
                        },
                        {
                            id:2,
                            text:"La clarté des rôles et responsabilités est essentielle dans une organisation", 
                            value:0,
                            categoryId : 3,
                            completed:false
                        },
                        {
                            id:3,
                            text:"Le monde est plein d’opportunités", 
                            value:0,
                            categoryId : 4,
                            completed:false
                        },
                        {
                            id:4,
                            text:"La compétition crée de la performance, comme dans le sport", 
                            value:0,
                            categoryId : 2,
                            completed:false
                        },
                        {
                            id:5,
                            text:"Nous sommes connecté(e)s les uns aux autres", 
                            value:0,
                            categoryId : 7,
                            completed:false
                        },
                        {
                            id:6,
                            text:"Le consensus est la meilleure manière de gérer un différent", 
                            value:0,
                            categoryId : 5,
                            completed:false
                        },
                        {
                            id:7,
                            text:"Le monde est complexe… et c’est intéressant", 
                            value:0,
                            categoryId : 6,
                            completed:false
                        },
                        //Série 2
                        {
                            id:8,
                            text:"L’humain est au centre de tout", 
                            value:0,
                            categoryId : 5,
                            completed:false
                        },
                        {
                            id:9,
                            text:"Le courage est une vertu cardinale", 
                            value:0,
                            categoryId : 2,
                            completed:false
                        },
                        {
                            id:10,
                            text:"Il n’y a pas de hasard", 
                            value:0,
                            categoryId : 7,
                            completed:false
                        },
                        {
                            id:11,
                            text:"La connaissance est un but en soi", 
                            value:0,
                            categoryId : 6,
                            completed:false
                        },
                        {
                            id:12,
                            text:"J’aime les fêtes de fin d’année, les « pots de départ »…", 
                            value:0,
                            categoryId : 1,
                            completed:false
                        },
                        {
                            id:13,
                            text:"Le droit est essentiel dans nos sociétés", 
                            value:0,
                            categoryId : 3,
                            completed:false
                        },
                        {
                            id:14,
                            text:"L’important, c’est de se dépasser", 
                            value:0,
                            categoryId : 4,
                            completed:false
                        },
                        //Série 3
                        {
                            id:15,
                            text:"Il est important pour une équipe de partager des moments de « communion »", 
                            value:0,
                            categoryId : 1,
                            completed:false
                        },
                        {
                            id:16,
                            text:"Croître est passionnant", 
                            value:0,
                            categoryId : 4,
                            completed:false
                        },
                        {
                            id:17,
                            text:"La bienveillance est une qualité cardinale", 
                            value:0,
                            categoryId : 5,
                            completed:false
                        },
                        {
                            id:18,
                            text:"Le monde est incertain.", 
                            value:0,
                            categoryId : 3,
                            completed:false
                        },
                        {
                            id:19,
                            text:"Le monde est une jungle…", 
                            value:0,
                            categoryId : 2,
                            completed:false
                        },
                        {
                            id:20,
                            text:"Il est essentiel de préserver nos éco-systèmes", 
                            value:0,
                            categoryId : 7,
                            completed:false
                        },
                        {
                            id:21,
                            text:"J’ai besoin de liberté au travail", 
                            value:0,
                            categoryId : 6,
                            completed:false
                        },
                        //Série 4
                        {
                            id:22,
                            text:"Il faut une personnalité forte pour être efficace", 
                            value:0,
                            categoryId : 2,
                            completed:false
                        },
                        {
                            id:23,
                            text:"Le développement personnel est un élément clé de l'épanouissement professionnel", 
                            value:0,
                            categoryId : 7,
                            completed:false
                        },
                        {
                            id:24,
                            text:"Il n’est pas important de tout comprendre… certaines choses n’ont pas d’explication", 
                            value:0,
                            categoryId : 1,
                            completed:false
                        },
                        {
                            id:25,
                            text:"Il faut des règles claires de fonctionnement", 
                            value:0,
                            categoryId : 3,
                            completed:false
                        },
                        {
                            id:26,
                            text:"La coopération est l’avenir de l’Homme", 
                            value:0,
                            categoryId : 5,
                            completed:false
                        },
                        {
                            id:27,
                            text:"Il faut saisir sa chance quand elle se présente", 
                            value:0,
                            categoryId : 4,
                            completed:false
                        },
                        {
                            id:28,
                            text:"Esthétique et efficacité vont de pair", 
                            value:0,
                            categoryId : 6,
                            completed:false
                        },
                        //Série 5
                        {
                            id:29,
                            text:"Le but d'une organisation est de survivre dans un environnement souvent hostile", 
                            value:0,
                            categoryId : 2,
                            completed:false
                        },
                        {
                            id:30,
                            text:"La mission d'une organisation est de générer du bien-être pour celles et ceux qui y travaillent", 
                            value:0,
                            categoryId : 5,
                            completed:false
                        },
                        {
                            id:31,
                            text:"L'ambition d'une organisation est de générer de la rentabilité pour assurer sa croissance", 
                            value:0,
                            categoryId : 4,
                            completed:false
                        },
                        {
                            id:32,
                            text:"Le mandat d'une organisation est de produire des services et biens de qualité dans les délais impartis", 
                            value:0,
                            categoryId : 3,
                            completed:false
                        },
                        {
                            id:33,
                            text:"La responsabilité d’une organisation est de répondre aux défis sociétaux globaux", 
                            value:0,
                            categoryId : 7,
                            completed:false
                        },
                        {
                            id:34,
                            text:"Le défi d'une organisation est de trouver son chemin dans un environnement de plus en plus complexe", 
                            value:0,
                            categoryId : 6,
                            completed:false
                        },
                        {
                            id:35,
                            text:"Nous devons respecter l’histoire de notre organisation", 
                            value:0,
                            categoryId : 1,
                            completed:false
                        },

                    ],
                    choices: [
                        {id:1,
                        number:"1",
                        text:"Pas du tout d'accord",
                        value:0},
                        {id:2,
                        number:"2",
                        text:"Pas vraiment d'accord",
                        value:1},
                        {id:3,
                        number:"3",
                        text:"Ni d'accord, ni pas d'accrod",
                        value:4},
                        {id:4,
                        number:"4",
                        text:"Plutôt d'accord",
                        value:8},
                        {id:5,
                        number:"5",
                        text:"Tout à fait d'accord",
                        value:12}
                    ],
                }
            ]
        }
        this.handlePointClassement = this.handlePointClassement.bind(this)
        this.handlePointQuestionnaire = this.handlePointQuestionnaire.bind(this)
    }
    
    handlePointClassement = (data) => {
            let newClassements = this.state.Classements
            const classementIndex = newClassements.findIndex(classement => classement.id === data.classementId)
            let newClassement = newClassements.find(classement => classement.id === data.classementId)
            const indexSuggestion = newClassement.suggestions.findIndex(element => element.id === data.suggestionId)
            newClassement.suggestions[indexSuggestion].possibilites = data.possibilites
            newClassement.suggestions[indexSuggestion].completed = data.checked
            newClassement.completed = newClassement.suggestions.every(suggestion => suggestion.completed === true)
            newClassements[classementIndex] = newClassement
            this.setState({
                Classements : newClassements})
    }

    handlePointQuestionnaire = (data) => {

        let Questionnaire = this.state.Questionnaire
        const questionIndex = Questionnaire[0].questions.findIndex(question => question.id === data.id)
        Questionnaire[0].questions[questionIndex] = data
        this.setState({Questionnaire})
    }
    
    render() {

        return (
            <Context.Provider value={this.state} >
               {this.state.Classements.map((classement,index) =>
                <Classement key={index} data={classement} handleaddpoint={this.handlePointClassement}/>
               )}
               {this.state.Questionnaire.map((questionnaire_,index) =>
                 <div className="classement">
                 <p className="classement-title">{questionnaire_.title}</p>
                 <div className="choices-list w100">
                     <ul className="w100">
               {questionnaire_.choices.map((choice,Index) => <li key={Index} className="choice-list">
               <p className="choice-number">{choice.number}</p>
                   <p className="choice-text">{choice.text}</p>
               </li> )}
                     </ul>
                 </div>
                <Questions key={index} questions={questionnaire_.questions} description={questionnaire_.title} handlevalue={this.handlePointQuestionnaire} />
                </div>
               )}
               <Answer />
            </Context.Provider>
        )
    }
}
