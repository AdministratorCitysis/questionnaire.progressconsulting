import React, { Component } from 'react'
import Header from './Header'
import Categories from './Categories'

export default class Questionnaire extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            questionnaire :
                {
                    titre: "Gestion du temps",
                    answers: [
                        {id:1,
                        number:"--",
                        text:"Tout à fait FAUX",
                        value:-2},
                        {id:2,
                        number:"-",
                        text:"Plutôt FAUX",
                        value:-1},
                        {id:3,
                        number:"+",
                        text:"Plutôt VRAI",
                        value:+1},
                        {id:4,
                        number:"++",
                        text:"Tout à fait VRAI",
                        value:+2}
    
                    ],
                    reponses : [
                        {
                        maxvalue:0,
                        text:"Beaucoup de difficulté en matière de gestion de votre temps.\nA vous d'analyser ce qui est dû à votre environnement de travail et ce qui est de votre fait.",
                        },
                        {
                        maxvalue:60,
                        text:"Gestion de votre temps moyen.\nVous devez progresser.",
                        },
                        {
                        maxvalue:90,
                        text:"Vous gérez votre temps de façon active et positive. Bravo!\nSurtout ne vous reposez pas sur vos lauriers, car dans ce domaine, rien n'est acquis et tout se dégrade très vite.",
                        },
                    ],
                    categories : [
                        {
                            id:1,
                            name : " ",
                            description: "Répondez sincèrement, spontanément pour vous-même. Choisissez l'option correspondant le mieux à votre sentiment face à chaque affirmation proposée", 
                            completed:false,
                            value:'',
                            message:"Veuillez compléter l'ensemble des questions pour connaître votre score",
                            questions : [
                                {
                                id:1,
                                text:"En arrivant à mon poste de travail, je connais les 3 premières tâches à accomplir",  
                                value:'',
                                completed:false
                            },
                                {
                                id:2,
                                text:"Je n'oublie pas de décommander mes rendez-vous",  
                                value:'',
                                completed:false
                            },
                                {
                                id:3,
                                text:"L'analyse de la façon dont je gère mon temps m'a conduit à modifier certains de mes comportements",  
                                value:'',
                                completed:false
                            },
                                {
                                id:4,
                                text:"Je consacre assez de temps à mes loisirs et à ma vie familiale",  
                                value:'' ,
                                completed:false   
                            },
                                {
                                id:5,
                                text:"J'ai mes méthodes pour économiser du temps",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:6,
                                text:"Dans une réunion ou dans un entretien professionnel, je n'oublie pas la variable temps",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:7,
                                text:"J'ai le temps de m'informer et de me former",    
                                value:'',
                                completed:false
                            },    
                            {
                                id:8,
                                text:"Je sais me déconnecter de mes soucis professionnels en dehors de mes heures de travail",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:9,
                                text:"Je connais mes désirs et mes motivations",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:10,
                                text:"Je peux me concentrer sur les tâches importantes sans être interrompu",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:11,
                                text:"Je sais où passe mon temps",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:12,
                                text:"Je réfléchis chaque jour quelques minutes à l'organisation de mes priorités",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:13,
                                text:"Je parle avec mes collègues de la façon dont chacun organise son temps",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:14,
                                text:"Je dors suffisament",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:15,
                                text:"Je tiens compte de mes rythmes personnels dans l'organisation de mon travail",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:16,
                                text:"Je me fixe des objectifs personnels et professionnels à court et  à moyen terme",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:17,
                                text:"Je casse de temps en temps mes habitudes et mes routines",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:18,
                                text:"Je veille à limiter le stress",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:19,
                                text:"Je termine toujours ce que j'avais prévu de faire",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:20,
                                text:"Je m'accorde du temps pour moi, pour faire ce qu'il me plaît",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:21,
                                text:"Je négocie certaines priorités avec mon patron",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:22,
                                text:"J'ai peu d'imprévu dans la journée",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:23,
                                text:"Je connais à tout moment chacune des tâches et activités que j'ai à réaliser",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:24,
                                text:"Je connais mes points faibles et j'en tiens compte",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:25,
                                text:"Je connais les domaines d'activité où j'ai tendance à passer beaucoup de temps et ceux où j'ai tendance à passer peu de temps",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:26,
                                text:"Je sais ce qui me fait perdre du temps",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:27,
                                text:"Je sais distinguer l'essentiel de l'accessoire",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:28,
                                text:"Je me sens la plupart du temps en forme",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:29,
                                text:"Je sais dire non et refuser certaines sollicitations",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:30,
                                text:"Je sais à l'avance combien de temps me prend une activité",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:31,
                                text:"Je pratique l'alternance entre mes diverses activités et entre la réflexion de l'action",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:32,
                                text:"J'utilise un seul agenda pour mes activités professionnelles et personnelles",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:33,
                                text:"Je ne règle jamais plusieurs affaires à la fois",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:34,
                                text:"Il m'arrive rarement de travailler sous la pression et l'échéance",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:35,
                                text:"Quel que soit le type de rendez-vous ou réunion, je trouve toujours du temps pour le préparer ",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:36,
                                text:"J'arrive toujours à l'heure à mes rendez-vous",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:37,
                                text:"Je ne suis pas toujours disponible",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:38,
                                text:"Je sais repousser ce qui n'est pas la priorité du moment",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:39,
                                text:"J'ai développé des méthodes pour réduire ou utiliser mes temps de transport et de déplacement",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:40,
                                text:"Je n'hésite pas à abréger un entretien ou une réunion qui se prolonge indûment",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:41,
                                text:"Je filtre toujours mes appels téléphoniques",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:42,
                                text:"J'ai suffisament de temps pour mes lectures professionnelles",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:43,
                                text:"J'ai adapté mon système de classement à ma fonction",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:44,
                                text:"J'actualise régulièrement mes objectifs et mes méthodes de travail",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:45,
                                text:"J'ai le temps d'informer et de former les autres",  
                                value:'',
                                completed:false    
                            },
                                
                            ],
                            
                        },
                    ],  
                },
        }
    }

  

    SetQuestionCompleted=(question)=>{
        let newcategorie = this.state.questionnaire.categories[0]
        let newquestions = newcategorie.questions
        const questionIndex = newquestions.findIndex(element => element.id === question.id)
        newquestions[questionIndex].completed = true
        newquestions[questionIndex].value = question.value
        newcategorie.questions = newquestions
        newcategorie.completed = newquestions.every(question => question.completed === true)
        let newquestionnaire = this.state.questionnaire
        newquestionnaire.categories[0] = newcategorie
        this.setState({questionnaire:newquestionnaire})
        //const answer = this.state.questionnaire.answers.find(element => element.value === parseInt(newquestions[questionIndex].value))
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
