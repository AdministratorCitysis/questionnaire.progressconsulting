import React, { Component } from 'react'
import Header from './Header'
import Categories from './Categories'

export default class Questionnaire extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            questionnaire :
                {
                    titre: "Les activités managériales",
                    answers: [
                        {id:1,
                        number:"1",
                        text:"Jamais",
                        value:1},
                        {id:2,
                        number:"2",
                        text:"Rarement",
                        value:2},
                        {id:3,
                        number:"3",
                        text:"Parfois",
                        value:3},
                        {id:4,
                        number:"4",
                        text:"Souvent",
                        value:4},
                        {id:5,
                        number:"5",
                        text:"Toujours",
                        value:5
                        }
    
                    ],
                    reponses : [
                        {
                        maxvalue:15,
                        text:"Ce chiffre est théorique, vous allez discuter ensemble en présentiel. Ceci vous a permis de concrétiser les activités managériales que vous pouvez mettre en place.",
                        },
                        {
                        maxvalue:25,
                        text:"Ce chiffre est théorique, vous allez discuter ensemble en présentiel. Ceci vous a permis de concrétiser les activités managériales que vous pouvez mettre en place.",
                        },
                        {
                        maxvalue:35,
                        text:"Ce chiffre est théorique, vous allez discuter ensemble en présentiel. Ceci vous a permis de concrétiser les activités managériales que vous pouvez mettre en place.",
                        },
                        {
                        maxvalue:45,
                        text:"Ce chiffre est théorique, vous allez discuter ensemble en présentiel. Ceci vous a permis de concrétiser les activités managériales que vous pouvez mettre en place.",
                        },
                        {
                        maxvalue:10000,
                        text:"Ce chiffre est théorique, vous allez discuter ensemble en présentiel. Ceci vous a permis de concrétiser les activités managériales que vous pouvez mettre en place.",
                        },
                    ],
                    categories : [
                        {
                            id:1,
                            name : "",
                            description: "Pour chaque question, veuillez cocher une réponse pour connaître votre résultat.", 
                            title : "Dans la liste des activités managériales ci-dessous, quelle est la fréquence de mise en œuvre dans votre travail?",
                            completed:false,
                            value:'',
                            questions : [
                                {
                                id:1,
                            text:"J'organise et j'anime les réunions d'équipe.",  
                                value:'',
                                completed:false
                            },
                                {
                                id:2,
                                text:"J'explique la vision et les décisions stratégiques.",  
                                value:'',
                                completed:false
                            },
                                {
                                id:3,
                                text:"Je donne du feedback positif.",  
                                value:'',
                                completed:false
                            },
                                {
                                id:4,
                                text:"Je donne du feedback négatif.",  
                                value:'' ,
                                completed:false   
                            },
                                {
                                id:5,
                                text:"J'évalue les compétences/résultats.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:6,
                                text:"Je définis les missions / compétences. ",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:7,
                                text:"J'établis un plan d'action individuel (plan de formation).",    
                                value:'',
                                completed:false
                            },    
                            {
                                id:8,
                                text:"Je définis les objectifs de l'équipe.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:9,
                                text:"Je définis les objectifs individuels.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:10,
                                text:"J'assiste un collaborateur bloqué.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:11,
                                text:"Je désamorce les conflits.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:12,
                                text:"Je rends compte de l'activité de mon équipe.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:13,
                                text:"Je fixe les priorités.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:14,
                                text:"Je m'implique dans les projets transversaux.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:15,
                                text:"Je développe un réseau de relations internes / externes.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:16,
                                text:"J'entreprends les plans de carrière de mes collaborateurs.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:17,
                                text:"Je vis les valeurs d'entreprises (exemplarité).",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:18,
                                text:"Je mets à disposition les moyens nécessaires.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:19,
                                text:"Je tiens des entretiens de fonctionnement.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:20,
                                text:"Je tiens des entretiens d'évolution.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:21,
                                text:"J'établis les process.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:22,
                                text:"Je communique les décisions du Comité de Direction.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:23,
                                text:"Je fais remonter l'information vers mon responsable.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:24,
                                text:"Je fais le suivi des activités.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:25,
                                text:"Je répartis les tâches.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:26,
                                text:"Je me coordonne avec les autres responsables.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:27,
                                text:"Je réalise le suivi administratif.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:28,
                                text:"Je participe à l'identification des moyens nécessaires.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:29,
                                text:"Je propose des idées d'amélioration.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:30,
                                text:"Je mets en place une plan de développement personnel.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:31,
                                text:"J'étudie le comportement des gens (niveau, attitude,…).",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:32,
                                text:"Je consacre du temps pour écouter (1/1,…).",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:33,
                                text:"Je détermine les objectifs de mon équipe et je les évalue.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:34,
                                text:"J'incite l'équipe à proposer des idées et je les présente aux autres.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:35,
                                text:"Je suis accessible pour l'équipe.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:36,
                                text:"Je gère l'informel.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:37,
                                text:"Je prends des décisions.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:38,
                                text:"Je délègue.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:39,
                                text:"Je soutiens / défends mon équipe.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:40,
                                text:"Je demande du feedback  (sur moi-même, ma manière de gérer).",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:41,
                                text:"J'organise un teambuilding.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:42,
                                text:"J'organise un groupe de travail.",  
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
