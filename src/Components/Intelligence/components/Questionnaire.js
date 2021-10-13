import React, { Component } from 'react'
import Header from './Header'
import Categories from './Categories'
import ReactToPrint from 'react-to-print'
import ToPrint from './ToPrint'

export default class Questionnaire extends Component {
    
    constructor(props){
        super(props)
        this.printRef = React.createRef();
        this.state = {
            questionnaire :
                {
                    titre: "Intelligence émotionnelle",
                    answers: [
                        {id:1,
                        number:1,
                        text:"Jamais",
                        value:0},
                        {id:2,
                        number:2,
                        text:"Rarement",
                        value:1},
                        {id:3,
                        number:3,
                        text:"Parfois",
                        value:2},
                        {id:4,
                        number:4,
                        text:"Souvent",
                        value:3},
                        {id:5,
                        number:5,
                        text:"Toujours",
                        value:4},
    
                    ],
                    reponses : [
                        {
                        maxvalue:24,
                        text:"Aire de développement: nécessite votre attention",
                        },
                        {
                        maxvalue:35,
                        text:"Fonctionnement efficace : mérite d'être renforcé",
                        },
                        {
                        maxvalue:40,
                        text:"Véritable compétence: à utiliser comme un levier pour développer votre air de développement",
                        },
                    ],
                    categories : [
                        {
                            id:1,
                            name : "Conscience de soi",
                            completed:false,
                            value:'',
                            message:"Veuillez compléter l'ensemble des questions pour connaître votre score",
                            questions : [
                                {
                                id:1,
                                text:"Mes émotions sont claires pour moi en règle générale, j'arrive à mettre des mots dessus et à les décrire",  
                                value:'',
                                completed:false
                            },
                                {
                                id:2,
                                text:"Je suis en mesure de relever des changements physiologiques lorsque je ressens des émotions",  
                                value:'',
                                completed:false
                            },
                                {
                                id:3,
                                text:"Mes émotions impactent les gens autour de moi",  
                                value:'',
                                completed:false
                            },
                                {
                                id:4,
                                text:"Je trouve facile de mettre des mots sur mes émotions",  
                                value:'' ,
                                completed:false   
                            },
                                {
                                id:5,
                                text:"Je suis facilement affecté par des évènements externes",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:6,
                                text:"Je reconnais quand je vais me mettre en colère",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:7,
                                text:"Je m'ouvre facilement aux autres de mes sentiments sincères",    
                                value:'',
                                completed:false
                            },    
                            {
                                id:8,
                                text:"Il peut arriver que je me parle pour modifier mes états émotifs",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:9,
                                text:"Même si je suis énervé, je reste conscient de ce qui se passe",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:10,
                                text:"J'arrive à séparer mes pensées de mes sentiments si je les examine",  
                                value:'',
                                completed:false    
                            },
                                
                            ],
                            
                        },
                        {
                            id:2,
                            name : "Maîtrise de soi",
                            completed:false,
                            value:"",
                            message:"Veuillez compléter l'ensemble des questions pour connaître votre score",
                            questions : [
                                {
                                id:11,
                                text:"Je prends la resposabilités de mes réactions",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:12,
                                text:"Il est aisé pour moi de me définir des objectifs et de m'y tenir",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:13,
                                text:"Je me décrirais comme une personne équilibrée émotionnellement",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:14,
                                text:"Je suis quelqu'un de patient",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:15,
                                text:"Je sais accepter les commentaires critiques sans me sentir fâché",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:16,
                                text:"Même dans les moments stressants, je maintiens mon sang froid",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:17,
                                text:"Si je ne suis pas impacté directement par un problème, je ne le laisse pas m'affecter",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:18,
                                text:"J'arrive à me freiner lorsque je ressens de la colère pour quelqu'un, je reste efficace",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:19,
                                text:"Je contrôle les envies de choses qui pourraient faire baisser mon bien-être",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:20,
                                text:"Je dirige mon énergie vers des activités créatives",  
                                value:'',
                                completed:false    
                            },
                                
                            ],
                            
                        },
                        {
                            id:3,
                            name : "Conscience sociale",
                            completed:false,
                            value:"",
                            message: "Veuillez compléter l'ensemble des questions pour connaître votre score",
                            questions : [
                                {
                                id:21,
                                text:"Je considère l'impact de mes actions sur les autres",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:22,
                                text:"Je peux rapidement voir si les personnes autour de moi sont en train de s'énerver",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:23,
                                text:"Si l'état d'esprit d'une personne change, je le sens immédiatement",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:24,
                                text:"Je suis capable d'annoncer de mauvaises nouvelles aux autres",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:25,
                                text:"En règle générale, je comprends ce que les autres ressentent",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:26,
                                text:"Mes amis me confient des choses intimes",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:27,
                                text:"Je sais difficilement me contrôler lorsque je vois quelqu'un pleurer",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:28,
                                text:"Je sais faire la différence entre les moments où il faut parler... et ceux où il faut se taire",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:29,
                                text:"Je comprends que les plans d'autres personnes peuvent changer, je m'adapte",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:30,
                                text:"J'ai une vision positive des autres",  
                                value:'',
                                completed:false    
                            },
                                
                            ],
                            
                        },
                        {
                            id:4,
                            name : "Gestion des relations",
                            completed:false,
                            value:"",
                            message:"Veuillez compléter l'ensemble des questions pour connaître votre score",
                            questions : [
                                {
                                id:31,
                                text:"Je me retrouve à agir comme médiateur dans des tensions entre d'autres personnes",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:32,
                                text:"Je fournis des conseils et du soutien aux autres, au besoin",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:33,
                                text:"Je partage facilement des sentiments intimes aux autres",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:34,
                                text:"Je suis un bon motivateur d'équipe",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:35,
                                text:"On dit de moi que je suis une personne joyeuse et amusante",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:36,
                                text:"Je me fais facilement de nouveaux amis",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:37,
                                text:"J'exprime clairement les pensées d'un groupe. (Je suis capable de synthèse)",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:38,
                                text:"Aider les autres me fait plaisir",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:39,
                                text:"J'aime qu'on sache qu'on peut compter sur moi",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:40,
                                text:"Je suis capable de calmer quelqu'un qui est bouleversé",  
                                value:'',
                                completed:false    
                            },
                                
                            ],
                            
                        },
                    ],  
                },
        }
    }

  

    SetQuestionCompleted=(data)=>{

        let newcategories = this.state.questionnaire.categories
        let catIndex = newcategories.findIndex(element => element.id === data.catId)
        let newquestions = newcategories[catIndex].questions
        const questionIndex = newquestions.findIndex(element => element.id === data.questionId)
        newquestions[questionIndex].completed = true
        newcategories[catIndex].questions = newquestions
        newcategories[catIndex].completed = newquestions.every(question => question.completed === true)
        let newquestionnaire = this.state.questionnaire
        newquestionnaire.categories = newcategories
        this.setState({questionnaire:newquestionnaire})
    }

    SetCategorieValue = (data) => {
        this.setState(state => 
            state.questionnaire.categories.map(
            cat => {if(cat.id === data.id)
                        {
                            cat.value = parseInt(data.value)
                        }
                        return this.SetCategorieMessage(cat)
                    }
            
        ))
    }

    SetCategorieMessage = (data) => {
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
        
    }
    
    render() {

        const AllCompleted = this.state.questionnaire.categories.every(element => element.completed === true )
        let printbutton
        if(AllCompleted)
        {
            printbutton =   <ReactToPrint
            trigger={() => <div className="download-button"><p>Sauvegarder</p></div>}
            content={() => this.printRef.current} />  
        }

        return (
            <div className="survey">
                <Header questionnaire={this.state.questionnaire} />
                <Categories data={this.state.questionnaire} setcategorievalue={this.SetCategorieValue} setquestioncompleted={this.SetQuestionCompleted} />
                <ToPrint questionnaire={this.state.questionnaire} ref={this.printRef}></ToPrint>
                {printbutton}
            </div>
        )
    }
}
