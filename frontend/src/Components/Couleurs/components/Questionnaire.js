import React, { Component } from 'react'
import Qualificatif from './Qualificatif'
import Classement from './Classement'
import Result from './Result'

export default class Questionnaire extends Component {
    
    constructor(props){
        super(props)

        this.state ={
            title:"Questionnaire des personnalités",
            colors:[
                {
                    id:1,
                    text:"Jaune",
                    color:'#EDE813',
                    point:0
                },
                {
                    id:2,
                    text:"Vert",
                    color:'#009640',
                    point:0
                },
                {
                    id:3,
                    text:"Rouge",
                    color:'#E30613',
                    point:0
                },
                {
                    id:4,
                    text:"Bleu",
                    color:'#002F47',
                    point:0
                },
            ],
            Qualificatifs : [
                {
                    id:1,
                    "title" : "Parmi ces qualificatifs, quels sont ceux qui vous ressemblent le plus? ",
                    "instruction":"Distribuez 10 points (par exemple : effcicace = 5 / Coopératif = 2 / Précis = 0 / Populaire = 3)",
                    "maxpoint":10,
                    "completed" : false,
                    "propositions":[
                        {
                            "id":1,
                            "completed" : false,
                            "choices": [
                                {
                                    "id":1,
                                    "title":"Efficace",
                                    "feature":1,
                                    "points":0
                
                                },
                                {
                                    "id":2,
                                    "title":"Coopératif",
                                    "feature":2,
                                    "points":0
                
                                },
                                {
                                    "id":3,
                                    "title":"Calme",
                                    "feature":3,
                                    "points":0
                
                                },
                                {
                                    "id":4,
                                    "title":"Populaire",
                                    "feature":4,
                                    "points":0
                
                                }
                            ]
                        },
                        {
                            "id":2,
                            "completed" : false,
                            "choices": [
                                {
                                    "id":1,
                                    "title":"Emotionnel",
                                    "feature":1,
                                    "points":0
                
                                },
                                {
                                    "id":2,
                                    "title":"Serein",
                                    "feature":2,
                                    "points":0
                
                                },
                                {
                                    "id":3,
                                    "title":"Enthousiaste",
                                    "feature":3,
                                    "points":0
                
                                },
                                {
                                    "id":4,
                                    "title":"Droit au but",
                                    "feature":4,
                                    "points":0
                
                                }
                            ]
                        },
                        {
                            "id":3,
                            "completed" : false,
                            "choices": [
                                {
                                    "id":1,
                                    "title":"Positif",
                                    "feature":1,
                                    "points":0
                
                                },
                                {
                                    "id":2,
                                    "title":"Organisé",
                                    "feature":2,
                                    "points":0
                
                                },
                                {
                                    "id":3,
                                    "title":"Précis",
                                    "feature":3,
                                    "points":0
                
                                },
                                {
                                    "id":4,
                                    "title":"Diplomate",
                                    "feature":4,
                                    "points":0
                
                                }
                            ]
                        },
                        {
                            "id":4,
                            "completed" : false,
                            "choices": [
                                {
                                    "id":1,
                                    "title":"Prévenant",
                                    "feature":1,
                                    "points":0
                
                                },
                                {
                                    "id":2,
                                    "title":"Joyeux",
                                    "feature":2,
                                    "points":0
                
                                },
                                {
                                    "id":3,
                                    "title":"Mesuré",
                                    "feature":3,
                                    "points":0
                
                                },
                                {
                                    "id":4,
                                    "title":"Persévérant",
                                    "feature":4,
                                    "points":0
                
                                }
                            ]
                        },
                        {
                            "id":5,
                            "completed" : false,
                            "choices": [
                                {
                                    "id":1,
                                    "title":"Vif",
                                    "feature":1,
                                    "points":0
                
                                },
                                {
                                    "id":2,
                                    "title":"A l'écoute",
                                    "feature":2,
                                    "points":0
                
                                },
                                {
                                    "id":3,
                                    "title":"Rationnel",
                                    "feature":3,
                                    "points":0
                
                                },
                                {
                                    "id":4,
                                    "title":"Réservé",
                                    "feature":4,
                                    "points":0
                
                                }
                            ]
                        },
                        {
                            "id":6,
                            "completed" : false,
                            "choices": [
                                {
                                    "id":1,
                                    "title":"Soucieux des autres",
                                    "feature":1,
                                    "points":0
                
                                },
                                {
                                    "id":2,
                                    "title":"Bavard",
                                    "feature":2,
                                    "points":0
                
                                },
                                {
                                    "id":3,
                                    "title":"Rigoureux",
                                    "feature":3,
                                    "points":0
                
                                },
                                {
                                    "id":4,
                                    "title":"Volontaire",
                                    "feature":4,
                                    "points":0
                
                                }
                            ]
                        },
                        {
                            "id":7,
                            "completed" : false,
                            "choices": [
                                {
                                    "id":1,
                                    "title":"Silencieux",
                                    "feature":1,
                                    "points":0
                
                                },
                                {
                                    "id":2,
                                    "title":"Décidé",
                                    "feature":2,
                                    "points":0
                
                                },
                                {
                                    "id":3,
                                    "title":"Empathie",
                                    "feature":3,
                                    "points":0
                
                                },
                                {
                                    "id":4,
                                    "title":"Proactif",
                                    "feature":4,
                                    "points":0
                
                                }
                            ]
                        },
                        {
                            "id":8,
                            "completed" : false,
                            "choices": [
                                {
                                    "id":1,
                                    "title":"Conciliant",
                                    "feature":1,
                                    "points":0
                
                                },
                                {
                                    "id":2,
                                    "title":"Préparé",
                                    "feature":2,
                                    "points":0
                
                                },
                                {
                                    "id":3,
                                    "title":"Jovial",
                                    "feature":3,
                                    "points":0
                
                                },
                                {
                                    "id":4,
                                    "title":"Responsable",
                                    "feature":4,
                                    "points":0
                
                                }
                            ]
                        },
                        {
                            "id":9,
                            "completed" : false,
                            "choices": [
                                {
                                    "id":1,
                                    "title":"Directif",
                                    "feature":1,
                                    "points":0
                
                                },
                                {
                                    "id":2,
                                    "title":"Attentioné",
                                    "feature":2,
                                    "points":0
                
                                },
                                {
                                    "id":3,
                                    "title":"Fiable",
                                    "feature":3,
                                    "points":0
                
                                },
                                {
                                    "id":4,
                                    "title":"Actif",
                                    "feature":4,
                                    "points":0
                
                                }
                            ]
                        },
                        {
                            "id":10,
                            "completed" : false,
                            "choices": [
                                {
                                    "id":1,
                                    "title":"Energique",
                                    "feature":1,
                                    "points":0
                
                                },
                                {
                                    "id":2,
                                    "title":"Réfléchi",
                                    "feature":2,
                                    "points":0
                
                                },
                                {
                                    "id":3,
                                    "title":"Efficient",
                                    "feature":3,
                                    "points":0
                
                                },
                                {
                                    "id":4,
                                    "title":"Chaleureux",
                                    "feature":4,
                                    "points":0
                
                                }
                            ]
                        }
                    ]
                },
                {
                    id:2,
                    "title" : "Parmi ces mots, quels sont ceux qui vous ressemblent le plus? ",
                    "instruction":"Distribuez 10 points, comme pour la question précédente",
                    "maxpoint":10,
                    "completed" : false,
                    "propositions":[
                        {
                            "id":1,
                            "completed" : false,
                            "choices": [
                                {
                                    "id":1,
                                    "title":"Amitié",
                                    "feature":1,
                                    "points":0
                
                                },
                                {
                                    "id":2,
                                    "title":"Précision",
                                    "feature":2,
                                    "points":0
                
                                },
                                {
                                    "id":3,
                                    "title":"Organisation",
                                    "feature":3,
                                    "points":0
                
                                },
                                {
                                    "id":4,
                                    "title":"Ambiance",
                                    "feature":4,
                                    "points":0
                
                                }
                            ]
                        },
                        {
                            "id":2,
                            "completed" : false,
                            "choices": [
                                {
                                    "id":1,
                                    "title":"Réseau",
                                    "feature":1,
                                    "points":0
                
                                },
                                {
                                    "id":2,
                                    "title":"Volonté",
                                    "feature":2,
                                    "points":0
                
                                },
                                {
                                    "id":3,
                                    "title":"Empathie",
                                    "feature":3,
                                    "points":0
                
                                },
                                {
                                    "id":4,
                                    "title":"Détail",
                                    "feature":4,
                                    "points":0
                
                                }
                            ]
                        },
                        {
                            "id":3,
                            "completed" : false,
                            "choices": [
                                {
                                    "id":1,
                                    "title":"Relation",
                                    "feature":1,
                                    "points":0
                
                                },
                                {
                                    "id":2,
                                    "title":"Résultat",
                                    "feature":2,
                                    "points":0
                
                                },
                                {
                                    "id":3,
                                    "title":"Echange",
                                    "feature":3,
                                    "points":0
                
                                },
                                {
                                    "id":4,
                                    "title":"Règles",
                                    "feature":4,
                                    "points":0
                
                                }
                            ]
                        },
                        {
                            "id":4,
                            "completed" : false,
                            "choices": [
                                {
                                    "id":1,
                                    "title":"Négociation",
                                    "feature":1,
                                    "points":0
                
                                },
                                {
                                    "id":2,
                                    "title":"Patience",
                                    "feature":2,
                                    "points":0
                
                                },
                                {
                                    "id":3,
                                    "title":"Créativité",
                                    "feature":3,
                                    "points":0
                
                                },
                                {
                                    "id":4,
                                    "title":"Aide",
                                    "feature":4,
                                    "points":0
                
                                }
                            ]
                        },
                        {
                            "id":5,
                            "completed" : false,
                            "choices": [
                                {
                                    "id":1,
                                    "title":"Prestige",
                                    "feature":1,
                                    "points":0
                
                                },
                                {
                                    "id":2,
                                    "title":"Harmonie",
                                    "feature":2,
                                    "points":0
                
                                },
                                {
                                    "id":3,
                                    "title":"Responsabilités",
                                    "feature":3,
                                    "points":0
                
                                },
                                {
                                    "id":4,
                                    "title":"Observation",
                                    "feature":4,
                                    "points":0
                
                                }
                            ]
                        },
                        {
                            "id":6,
                            "completed" : false,
                            "choices": [
                                {
                                    "id":1,
                                    "title":"Expertise",
                                    "feature":1,
                                    "points":0
                
                                },
                                {
                                    "id":2,
                                    "title":"Décision",
                                    "feature":2,
                                    "points":0
                
                                },
                                {
                                    "id":3,
                                    "title":"Support",
                                    "feature":3,
                                    "points":0
                
                                },
                                {
                                    "id":4,
                                    "title":"Compliment",
                                    "feature":4,
                                    "points":0
                
                                }
                            ]
                        },
                        {
                            "id":7,
                            "completed" : false,
                            "choices": [
                                {
                                    "id":1,
                                    "title":"Collaboration",
                                    "feature":1,
                                    "points":0
                
                                },
                                {
                                    "id":2,
                                    "title":"Image",
                                    "feature":2,
                                    "points":0
                
                                },
                                {
                                    "id":3,
                                    "title":"Sécurité",
                                    "feature":3,
                                    "points":0
                
                                },
                                {
                                    "id":4,
                                    "title":"Exigences",
                                    "feature":4,
                                    "points":0
                
                                }
                            ]
                        }
                    ]
                },
            ] ,
            Classements : [
             {
                 id:1,
                "title" : "Classez les phrases qui vous correspondent le plus dans ces situations (le plus en haut et le moins en bas).",
                "instruction":"",
                "maxpoint":10,
                "completed" : false,
                "suggestions":[
                    {
                        "id":1,
                        "text":"En soirée, vous aimez…",
                        "completed" : false,
                        "possibilites": [
                            {
                                "id":1,
                                "title":"Aider les hôtes",
                                "feature":1,
                                "points":0
            
                            },
                            {
                                "id":2,
                                "title":"Observer les invités",
                                "feature":2,
                                "points":0
            
                            },
                            {
                                "id":3,
                                "title":"Organiser ce qui doit être fait",
                                "feature":3,
                                "points":0
            
                            },
                            {
                                "id":4,
                                "title":"Mettre de l'ambiance",
                                "feature":4,
                                "points":0
            
                            }
                        ]
                    },
                    {
                        "id":2,
                        "completed" : false,
                        "text":"Aider les autres, c'est…",
                        "possibilites": [
                            {
                                "id":1,
                                "title":"Partager votre point de vue",
                                "feature":1,
                                "points":0
            
                            },
                            {
                                "id":2,
                                "title":"Ecouter attentivement",
                                "feature":2,
                                "points":0
            
                            },
                            {
                                "id":3,
                                "title":"Donner un bon conseil",
                                "feature":3,
                                "points":0
            
                            },
                            {
                                "id":4,
                                "title":"Comprendre précisément le problème",
                                "feature":4,
                                "points":0
            
                            }
                        ]
                    },
                    {
                        "id":3,
                        "completed" : false,
                        "text":"L'important dans la vie, c'est...",
                        "possibilites": [
                            {
                                "id":1,
                                "title":"Avoir de bonnes relations",
                                "feature":1,
                                "points":0
            
                            },
                            {
                                "id":2,
                                "title":"Etre à l'écoute",
                                "feature":2,
                                "points":0
            
                            },
                            {
                                "id":3,
                                "title":"Atteindre ses objectifs",
                                "feature":3,
                                "points":0
            
                            },
                            {
                                "id":4,
                                "title":"Etre compétent",
                                "feature":4,
                                "points":0
            
                            }
                        ]
                    },
                    {
                        "id":4,
                        "completed" : false,
                        "text":"Votre principal défaut?",
                        "possibilites": [
                            {
                                "id":1,
                                "title":"Parler trop",
                                "feature":1,
                                "points":0
            
                            },
                            {
                                "id":2,
                                "title":"Ne pas oser dire 'non'",
                                "feature":2,
                                "points":0
            
                            },
                            {
                                "id":3,
                                "title":"Parfois trop 'direct'",
                                "feature":3,
                                "points":0
            
                            },
                            {
                                "id":4,
                                "title":"Etre trop lent",
                                "feature":4,
                                "points":0
            
                            }
                        ]
                    },
                    {
                        "id":5,
                        "completed" : false,
                        "text":"Votre besoin essentiel?",
                        "possibilites": [
                            {
                                "id":1,
                                "title":"Etre reconnu",
                                "feature":1,
                                "points":0
            
                            },
                            {
                                "id":2,
                                "title":"Etre accepté",
                                "feature":2,
                                "points":0
            
                            },
                            {
                                "id":3,
                                "title":"Etre efficace",
                                "feature":3,
                                "points":0
            
                            },
                            {
                                "id":4,
                                "title":"Etre rassuré",
                                "feature":4,
                                "points":0
            
                            }
                        ]
                    }
                ]
            }
        ]   
        }

        this.handlePointQualificatif = this.handlePointQualificatif.bind(this)
        this.handlePointClassement = this.handlePointClassement.bind(this)
    }

    handlePointQualificatif = (data) => {
        console.log("handlePointQualificatif ",data)

        let newQualificatifs = this.state.Qualificatifs
        const qualificatifIndex = newQualificatifs.findIndex(qualificatif => qualificatif.id === data.categoryId)
        let newQualificatif = newQualificatifs.find(qualificatif => qualificatif.id === data.categoryId)
        const propositionIndex = newQualificatif.propositions.findIndex(element => element.id === data.propositionId)
        newQualificatif.propositions[propositionIndex].completed = data.propositionCompleted
        newQualificatif.completed = newQualificatif.propositions.every(proposition => proposition.completed === true)
        newQualificatifs[qualificatifIndex] = newQualificatif



        this.setState((state) => ({
            colors: state.colors.map((color) =>
            color.id === data.feature ? {...color, point : parseInt(color.point)  + parseInt(data.value) } : color
            ),
            Qualificatifs : newQualificatifs
            })
        )}
    
    handlePointClassement = (data) => {
        if(data.checked)
        {
            let newClassements = this.state.Classements
            const classementIndex = newClassements.findIndex(classement => classement.id === data.classementId)
            let newClassement = newClassements.find(classement => classement.id === data.classementId)
            const indexSuggestion = newClassement.suggestions.findIndex(element => element.id === data.suggestionId)
            newClassement.suggestions[indexSuggestion].completed = data.checked
            newClassement.completed = newClassement.suggestions.every(suggestion => suggestion.completed === true)
            newClassements[classementIndex] = newClassement
            
            //console.log("newClassement", newClassement)
    
    
    
            this.setState((state) => ({
                colors: state.colors.map((color) =>
                color.id === data.feature ? {...color, point : parseInt(color.point)  + parseInt(data.value) } : color
                ),
                Classements : newClassements
            })
            )
        }
        else
        {
            let newClassements = this.state.Classements
            const classementIndex = newClassements.findIndex(classement => classement.id === data.classementId)
            let newClassement = newClassements.find(classement => classement.id === data.classementId)
            const indexSuggestion = newClassement.suggestions.findIndex(element => element.id === data.suggestionId)
            newClassement.suggestions[indexSuggestion].completed = data.checked
            newClassement.completed = newClassement.suggestions.every(suggestion => suggestion.completed === true)
            newClassements[classementIndex] = newClassement
            
            //console.log("newClassement", newClassement)
            
    
    
            this.setState((state) => ({
              Classements : newClassements
            })
            )
        }
    }
    
    render() {

        //console.log(this.state.Qualificatifs[1])
        let completed = []
        this.state.Qualificatifs.every(q => completed.push(q.completed))
        this.state.Classements.every(q => completed.push(q.completed))
        const iscompleted = completed.every(i => i === true)
        //const iscompleted = true
        
        //console.log(iscompleted)

        return (
            <div >
               { this.state.Qualificatifs.map((qualificatif, index) =>
                    <Qualificatif key={index} data={qualificatif} handleaddpoint={this.handlePointQualificatif}/>
                )}
               {this.state.Classements.map((classement,index) =>
                <Classement key={index} data={classement} handleaddpoint={this.handlePointClassement}/>
               )}
                <Result iscompleted={iscompleted} title={this.state.title}  colors={this.state.colors}/>
            </div>
        )
    }
}
