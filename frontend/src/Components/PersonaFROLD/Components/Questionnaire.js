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
                title: "Profil PERSONA ",
                description : "Parmi ces trios de traits de caractère ci-dessous, choisissez celui qui vous ressemble le plus.",
                instruction : "Répondez de manière honnête et non de ce qui est socialement souhaitable. N'y pensez pas trop longtemps. Il doit être aussi intuitif que possible.",
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
                                name:"Efficace",
                                value : 2,
                            },
                            {
                                id:32,
                                name:"Dominateur",
                                value : 3,
                            },
                            {
                                id:33,
                                name:"Serviable",
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
                                name:"Capable de s’affirmer",
                                value : 3,
                            },
                            {
                                id:35,
                                name:"Calme",
                                value : 2,
                            },
                            {
                                id:36,
                                name:"Content",
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
                                name:"Silencieux",
                                value : 1,
                            },
                            {
                                id:38,
                                name:"Réfléchi",
                                value : 2,
                            },
                            {
                                id:39,
                                name:"Sociable",
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
                                name:"Amical",
                                value : 2,
                            },
                            {
                                id:312,
                                name:"Prend ses responsabilités",
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
                                name:"Attentif",
                                value : 3,
                            },
                            {
                                id:314,
                                name:"Négocie volontiers",
                                value : 2,
                            },
                            {
                                id:315,
                                name:"Prend des initiatives",
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
                                name:"Réceptif",
                                value : 1,
                            },
                            {
                                id:317,
                                name:"Inflexible",
                                value : 3,
                            },
                            {
                                id:318,
                                name:"Coopératif",
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
                                name:"Têtu",
                                value : 1,
                            },
                            {
                                id:320,
                                name:"Circonspect",
                                value : 2,
                            },
                            {
                                id:321,
                                name:"Extraverti",
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
                                name:"Enthousiaste",
                                value : 3,
                            },
                            {
                                id:323,
                                name:"Réservé",
                                value : 1,
                            },
                            {
                                id:324,
                                name:"Mesuré",
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
                                name:"Obstiné",
                                value : 3,
                            },
                            {
                                id:326,
                                name:"Actif",
                                value : 2,
                            },
                            {
                                id:327,
                                name:"Rigoureux",
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
                                name:"Battant",
                                value : 3,
                            },
                            {
                                id:329,
                                name:"Equilibré",
                                value : 2,
                            },
                            {
                                id:330,
                                name:"Conciliant",
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
                                name:"Joyeux",
                                value : 3,
                            },
                            {
                                id:332,
                                name:"Soucieux des autres",
                                value : 2,
                            },
                            {
                                id:333,
                                name:"Volontaire",
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
                                name:"S’en tient à ce qui est convenu",
                                value : 1,
                            },
                            {
                                id:335,
                                name:"Vif",
                                value : 3,
                            },
                            {
                                id:336,
                                name:"Diplomate",
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
                                name:"Argumente facilement",
                                value : 3,
                            },
                            {
                                id:338,
                                name:"Nonchalant",
                                value : 2,
                            },
                            {
                                id:339,
                                name:"S’adapte facilement",
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
                                name:"Accommodant",
                                value : 2,
                            },
                            {
                                id:341,
                                name:"Obéissant – docile",
                                value : 1,
                            },
                            {
                                id:342,
                                name:"Directif",
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
                                name:"Organisé",
                                value : 2,
                            },
                            {
                                id:344,
                                name:"Précis",
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
                                name:"Populaire",
                                value : 3,
                            },
                            {
                                id:347,
                                name:"Discipliné",
                                value : 1,
                            },
                            {
                                id:348,
                                name:"Cultivé",
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
                            text:"Jaune",
                            color:'#EDE813',
                            primary:"RECONNAISSANCE, Être une référence",
                            secondary:["Vous êtes extraverti et orienté vers les personnes. Vous montrez de l'enthousiasme et vous passionnez très vite pour les nouveautés. Vous aimez travailler avec les autres et leur transmettre votre motivation. Vous entretenez votre réseau. Vous vivez à travers le regard des autres, vous aimez les compliments et soignez votre apparence. Vous avez tendance à ne pas finir vos tâches dès qu'un nouveau sujet passionnant se profile à l'horizon."],
                        },
                        //X == 16 ==> Résultat
                        {
                            id:2,
                            text:"Relation",
                            color: "#FFFFFF",
                            primary:"Votre résultat n'est pas défini sur l'axe horizontal",
                            secondary:["On peut néanmoins en déduire une attention vers le côté relationnel.La priorité est plutôt l'humain, les personnes, la relation aux autres"],
                        },
                        //X > 16 ==> Vert
                        {
                            id:3,
                            text:"Vert",
                            color:'#009640',
                            primary:"HARMONIE, pour être accepté",
                            secondary:["Vous êtes orienté vers les personnes et les relations, et plutôt introverti. Vous parlez doucement et chaleureusement. Vous ne supportez pas les conflits, ni les critiques directes, qui peuvent vous blesser. Vous agissez de façon calme et et modérée. Vous pouvez toutefois réagir violemment car vous avez tendance à intérioriser et à contenir vos émotions."],
                           
                        },
                    ],
                    //Y == 16
                    [
                        //X > 16
                        {
                            id:4,
                            text:"Extraverti",
                            color: "#FFFFFF",
                            primary:"Votre résultat n'est pas défini sur l'axe vertical",
                            secondary:["On peut néanmoins en déduire une attention aux sentiments, opinions ou raisonnements récurrents"],
                        },
                        //X == 16
                        {
                            id:5,
                            text:"Indéfini",
                            color: "#FFFFFF",
                            primary:"Votre résultat n'est pas défini sur l'axe vertical et horizontal",
                            secondary:["Vous pouvez réessayer en remplaçant certaines réponses sur lesquelles vous avez peut-être hésité"],
                       
                        },
                        //X < 16
                        {
                            id:6,
                            text:"Introverti",
                            color: "#FFFFFF",
                            primary:"Votre résultat n'est pas défini sur l'axe vertical",
                            secondary:["On peut néanmoins en déduire une énergie moins visible. Les sentiments, les opinions sont plus intériorisés"],
                        }
                    ],
                    //Y > 16
                    [
                        //X > 16
                        {
                            id:7,
                            text:"Rouge",
                            color:'#E30613',
                            primary:"EFFICACITÉ, Pouvoir décider",
                            secondary:["Vous êtes orienté vers l'action et les résultats, et plutôt extraverti. Vous possédez une vision d'ensemble et ne vous embarrassez pas des détails. Vous êtes motivé par les challenges et allez droit au but. Vous parlez vite et fort. Vous n'avez pas peur de vous tromper, vous prenez vos décisions rapidement, même avec très peu de cartes en main et n’avez aucun souci à reconnaître vos éventuelles erreurs."],
                        },
                        //X == 16
                        {
                            id:8,
                            text:"Résultat",
                            color: "#FFFFFF",
                            primary:"Votre résultat n'est pas défini sur l'axe horizontal",
                            secondary:["On peut néanmoins en déduire l'attention portée aux tâches à réaliser, aux objectifs et aux résultats"],
                        },
                        //X < 16
                        {
                            id:9,
                            text:"Bleu",
                            color:'#045576',
                            primary:"SÉCURITÉ, soyez rassuré",
                            secondary:["Vous êtes  introverti, orienté vers les tâches . Vous êtes consciencieux et aimez travailler au calme. Vous êtes une personne posée, attentive aux  failles et  incohérences. Vous avez besoin de  structure et de précision. Vous détestez vous tromper, et cette simple éventualité suffit à vous paralyser. Vous avez besoin d'avoir toutes les cartes en main pour décider, de façon méthodique. Vous respectez les règles et les procédures car elles sont garantes de fiabilité."],
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
