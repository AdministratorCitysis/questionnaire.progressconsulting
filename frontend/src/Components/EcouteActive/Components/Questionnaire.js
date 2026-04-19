import React, { Component } from 'react'
import Header from './Header'
import Categories from './Categories'

export default class Questionnaire extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            questionnaire :
                {
                    titre: "Écoute active",
                    answers: [
                        {id:1,
                        number:"1",
                        text:"La plupart du temps",
                        value:1},
                        {id:2,
                        number:"2",
                        text:"Souvent",
                        value:2},
                        {id:3,
                        number:"3",
                        text:"Parfois",
                        value:3},
                        {id:4,
                        number:"4",
                        text:"Rarement",
                        value:4},
                        {id:5,
                        number:"5",
                        text:"Presque jamais",
                        value:5
                    },
    
                    ],
                    reponses : [
                        {
                        maxvalue: 90,
                        text:"Plus le chiffre de votre résultat est élevé (au-delà de 30) et plus vous avez développé votre capacité à écouter vraiment les autres. Cela signifie que vos échanges avec les autres sont plus constructifs, que vos relations sont riches et que vous minimisez les malentendus.",
                        },
                        
                    ],
                    categories : [
                        {
                            id:1,
                            name : " ",
                            description: "A quel point votre écoute est-elle active, profonde et empathique?",
                            instruction:"Répondez sincèrement, spontanément pour vous-même. Choisissez l'option correspondant le mieux à votre sentiment face à chaque affirmation proposée", 
                            completed:false,
                            value:'',
                            message:"Veuillez compléter l'ensemble des questions pour connaître votre score",
                            questions : [
                                {
                                id:1,
                                text:"Il n'est pas facile de me souvenir de ce dont les autres m'ont parlé après une conversation.",  
                                value:'',
                                completed:false
                            },
                                {
                                id:2,
                                text:"Je sais faire autre chose pendant qu'une personne me parle (cuisiner, travailler à l'ordinateur, écouter de la musique, etc.)",  
                                value:'',
                                completed:false
                            },
                                {
                                id:3,
                                text:"Les autres se sont déjà plaint que je ne les écoutais pas.",  
                                value:'',
                                completed:false
                            },
                                {
                                id:4,
                                text:"Je trouve qu'il vaut mieux écouter et peu poser de questions sur le sujet dont les autres me parlent.",  
                                value:'' ,
                                completed:false   
                            },
                                {
                                id:5,
                                text:"Je cherche des moyens de faire bifurquer la conversation lorsque le sujet ne m'intéresse pas.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:6,
                                text:"Je montre des signes d'impatience lorsque les autres  “tournent autour du pot”.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:7,
                                text:"Je me fatigue rapidement de la conversation lorsque je ne la maîtrise pas.",    
                                value:'',
                                completed:false
                            },    
                            {
                                id:8,
                                text:"Je pense à des sujets qui n'ont pas de rapport avec la conversation pendant que l'autre me parle.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:9,
                                text:"Il m'arrive de terminer les phrases des autres.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:10,
                                text:"Je préfère porter attention à ce que la personne dit plutôt qu'à son langage non verbal.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:11,
                                text:"J'exprime indirectement ma désapprobation lorsque je ne suis pas d'accord avec ce que les autres me disent (froncer les sourcils par exemple).",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:12,
                                text:"Je réfléchis à ce que je vais dire à l'autre pendant que l'autre est en train de parler.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:13,
                                text:"J'interromps lorsque j'ai quelque chose à ajouter à la conversation.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:14,
                                text:"Si je reçois un appel téléphonique, je m'excuse et j'interromps la conversation.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:15,
                                text:"Lorsqu'une personne me partage les difficultés qu'elle vit, j'essaie de lui partager mes conseils.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:16,
                                text:"J'ai de la difficulté à me concentrer sur ce qu'une autre personne me dit lorsqu'elle ne parle pas bien (grammaire, choix des mots, etc.).",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:17,
                                text:"Lorsque j'échange avec une personne dans une salle remplie de gens, j'ai de la difficulté à ne pas porter attention aux autres conversations.",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:18,
                                text:"Je préfère être spontané dans mes réponses, plutôt que de prendre le temps d'y réfléchir plus avant.",  
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
            <div className="survey"  >
                <Header questionnaire={this.state.questionnaire} />
               <Categories data={this.state.questionnaire} setcategorievalue={this.SetCategorieValue} setquestioncompleted={this.SetQuestionCompleted} />
            </div>
        )
    }
}
