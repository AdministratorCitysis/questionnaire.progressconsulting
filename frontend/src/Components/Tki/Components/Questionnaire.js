import React, { Component } from 'react'
import Header from './Header'
import Context from './Context'
import Questions from './Questions'
import Answer from './Answer'

export default class Questionnaire extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             title: "Gestion des conflits TKI",
             instruction : "Dans de nombreux cas, les affirmations ne caractérisent réellement votre comportement ; veuillez alors choisir la réaction que vous seriez le plus susceptible d’avoir.",
             description : "Imaginez que vous vous trouvez dans des situations où vos aspirations et vos désirs diffèrent de ceux d’une autre personne. Comment réagissez-vous généralement ? \n Pour chaque paire, cocher l’affirmation correspondant le mieux à votre propre attitude en pareil cas.",
             completed: false,
             categories:[
                {
                    id:11,
                    text: ["Compétition"],
                    value:0,
                },
                {
                    id:12,
                    text:["Collaboration"],
                    value:0,
                },
                {
                    id:13,
                    text:["Compromis"],
                    value:0,
                },
                {
                    id:14,
                    text:["Eviter"],
                    value:0,
                },
                {
                    id:15,
                    text:["Céder"],
                    value:0,
                },
            ],
             questions : [
                {
                    id:21,
                    completed:false,
                    choices : [
                        {
                            id:31,
                            name:"Je laisse parfois à d’autres la responsabilité de résoudre le problème",
                            categoryId:14,
                        },
                        {
                            id:32,
                            name:"Plutôt que de discuter de nos désaccords, j’essaie de faire ressortir les points sur lesquels nous nous entendons",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:22,
                    completed:false,
                    choices : [
                        {
                            id:33,
                            name:"J’essaie de trouver une solution de compromis",
                            categoryId:13,
                        },
                        {
                            id:34,
                            name:"Je tâche de répondre à toutes nos préoccupations, aux siennes comme aux miennes",
                            categoryId:12,
                        },
                    ],
                },
                {
                    id:23,
                    completed:false,
                    choices : [
                        {
                            id:35,
                            name:"Je poursuis généralement mes objectifs avec détermination",
                            categoryId:11,
                        },
                        {
                            id:36,
                            name:"Je cherche à rassurer l’autre et à préserver notre relation",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:24,
                    completed:false,
                    choices : [
                        {
                            id:37,
                            name:"J’essaie de trouver une solution de compromis",
                            categoryId:13,
                        },
                        {
                            id:38,
                            name:"Je sacrifie parfois mes propres désirs à ceux de l’autre",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:25,
                    completed:false,
                    choices : [
                        {
                            id:39,
                            name:"Je cherche systématiquement l’aide de l’autre pour trouver une solution",
                            categoryId:12,
                        },
                        {
                            id:310,
                            name:"J’essaie de faire le nécessaire pour éviter les tensions inutiles",
                            categoryId:14,
                        },
                    ],
                },
                {
                    id:26,
                    completed:false,
                    choices : [
                        {
                            id:311,
                            name:"J’essaie d’éviter de me créer des désagréments",
                            categoryId:14,
                        },
                        {
                            id:312,
                            name:"J’essaie de faire adopter ma position",
                            categoryId:11,
                        },
                    ],
                },
                {
                    id:27,
                    completed:false,
                    choices : [
                        {
                            id:313,
                            name:"J’essaie de repousser le problème pour m’accorder un délai de réflexion",
                            categoryId:14,
                        },
                        {
                            id:314,
                            name:"Je cède sur certains points en échange d’autres concessions",
                            categoryId:13,
                        },
                    ],
                },
                {
                    id:28,
                    completed:false,
                    choices : [
                        {
                            id:315,
                            name:"Je poursuis généralement mes objectifs avec détermination",
                            categoryId:11,
                        },
                        {
                            id:316,
                            name:"J’essaie de soulever immédiatement  toutes les questions qui peuvent se poser",
                            categoryId:12,
                        },
                    ],
                },
                {
                    id:29,
                    completed:false,
                    choices : [
                        {
                            id:317,
                            name:"Je trouve que cela ne vaut pas toujours la peine de se préoccuper des divergences",
                            categoryId:14,
                        },
                        {
                            id:318,
                            name:"Je fais des efforts pour arriver à mon but",
                            categoryId:11,
                        },
                    ],
                },
                {
                    id:210,
                    completed:false,
                    choices : [
                        {
                            id:319,
                            name:"Je poursuis mes objectifs avec détermination",
                            categoryId:11,
                        },
                        {
                            id:320,
                            name:"J’essaie de trouver une solution de compromis",
                            categoryId:13,
                        },
                    ],
                },
                {
                    id:211,
                    completed:false,
                    choices : [
                        {
                            id:321,
                            name:"J’essaie de poser immédiatement toutes les questions qui peuvent se poser",
                            categoryId:12,
                        },
                        {
                            id:322,
                            name:"Je cherche à rassurer l’autre et à préserver notre relation",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:212,
                    completed:false,
                    choices : [
                        {
                            id:323,
                            name:"J’évite parfois les positions sujettes à controverse",
                            categoryId:13,
                        },
                        {
                            id:324,
                            name:"Je fais des concessions si l’autre en fait",
                            categoryId:14,
                        },
                    ],
                },
                {
                    id:213,
                    completed:false,
                    choices : [
                        {
                            id:325,
                            name:"Je propose un terrain d’entente",
                            categoryId:13,
                        },
                        {
                            id:326,
                            name:"J’insiste pour faire passer mes idées",
                            categoryId:11,
                        },
                    ],
                },
                {
                    id:214,
                    completed:false,
                    choices : [
                        {
                            id:327,
                            name:"Je fais part de mes idées à l’autre et je lui demande les siennes",
                            categoryId:12,
                        },
                        {
                            id:328,
                            name:"J’essaie de lui démontrer la logique, et les avantages de ma position",
                            categoryId:11,
                        },
                    ],
                },
                {
                    id:215,
                    completed:false,
                    choices : [
                        {
                            id:329,
                            name:"Je cherche à rassurer l’autre et à préserver notre relation",
                            categoryId:15,
                        },
                        {
                            id:330,
                            name:"J’essaie de faire le nécessaire pour éviter des tensions",
                            categoryId:14,
                        },
                    ],
                },
                {
                    id:216,
                    completed:false,
                    choices : [
                        {
                            id:331,
                            name:"J’essaie de ne pas blesser l’autre",
                            categoryId:15,
                        },
                        {
                            id:332,
                            name:"J’essaie de convaincre l’autre personne des mérites de ma position",
                            categoryId:11,
                        },
                    ],
                },
                {
                    id:217,
                    completed:false,
                    choices : [
                        {
                            id:333,
                            name:"Je poursuis généralement mes objectifs avec détermination",
                            categoryId:11,
                        },
                        {
                            id:334,
                            name:"J’essaie de faire le nécessaire pour éviter les tensions inutiles",
                            categoryId:14,
                        },
                    ],
                },
                {
                    id:218,
                    completed:false,
                    choices : [
                        {
                            id:335,
                            name:"Je peux laisser l’autre maintenir son point de vue, si cela lui fait plaisir",
                            categoryId:15,
                        },
                        {
                            id:336,
                            name:"Je fais des concessions si l’autre en fait",
                            categoryId:13,
                        },
                    ],
                },
                {
                    id:219,
                    completed:false,
                    choices : [
                        {
                            id:337,
                            name:"J’essaie de poser immédiatement toutes les questions qui peuvent se poser",
                            categoryId:12,
                        },
                        {
                            id:338,
                            name:"J’essaie de repousser le problème pour m’accorder un délai de réflexion",
                            categoryId:14,
                        },
                    ],
                },
                {
                    id:220,
                    completed:false,
                    choices : [
                        {
                            id:339,
                            name:"Je cherche à régler immédiatement nos divergences",
                            categoryId:12,
                        },
                        {
                            id:340,
                            name:"J’essaie de trouver un juste milieu et obtenir des concessions mutuelles",
                            categoryId:13,
                        },
                    ],
                },
                {
                    id:221,
                    completed:false,
                    choices : [
                        {
                            id:341,
                            name:"En abordant les négociations, j’essaie de prendre en considération les aspirations de l’autre",
                            categoryId:15,
                        },
                        {
                            id:342,
                            name:"Je penche toujours en faveur d’une discussion directe du problème",
                            categoryId:12,
                        },
                    ],
                },
                {
                    id:222,
                    completed:false,
                    choices : [
                        {
                            id:343,
                            name:"J’essaie de trouver une position intermédiaire entre la sienne et la mienne",
                            categoryId:13,
                        },
                        {
                            id:344,
                            name:"Je fais valoir mes désirs",
                            categoryId:11,
                        },
                    ],
                },
                {
                    id:223,
                    completed:false,
                    choices : [
                        {
                            id:345,
                            name:"Je m’attache très souvent à satisfaire toutes nos aspirations",
                            categoryId:12,
                        },
                        {
                            id:346,
                            name:"Je fais valoir mes désirs",
                            categoryId:14,
                        },
                    ],
                },
                {
                    id:224,
                    completed:false,
                    choices : [
                        {
                            id:347,
                            name:"Si l’autre prend les choses très à cœur, j’essaie de satisfaire ses aspirations",
                            categoryId:15,
                        },
                        {
                            id:348,
                            name:"J’essaie de l’amener à un compromis",
                            categoryId:13,
                        },
                    ],
                },
                {
                    id:225,
                    completed:false,
                    choices : [
                        {
                            id:349,
                            name:"J’essaie de lui démontrer la logique et les avantages de ma position",
                            categoryId:11,
                        },
                        {
                            id:350,
                            name:"En abordant les négociations, j’essaie de prendre en considération les aspirations de l’autre",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:226,
                    completed:false,
                    choices : [
                        {
                            id:351,
                            name:"Je propose un terrain d’entente",
                            categoryId:13,
                        },
                        {
                            id:352,
                            name:"Je cherche presque toujours à satisfaire toutes nos aspirations",
                            categoryId:12,
                        },
                    ],
                },
                {
                    id:227,
                    completed:false,
                    choices : [
                        {
                            id:353,
                            name:"J’évite parfois les positions sujettes à controverse",
                            categoryId:14,
                        },
                        {
                            id:354,
                            name:"Si cela fait plaisir à l’autre, je peux le laisser maintenir ses positions",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:228,
                    completed:false,
                    choices : [
                        {
                            id:355,
                            name:"Je poursuis généralement mes objectifs avec détermination",
                            categoryId:11,
                        },
                        {
                            id:356,
                            name:"Je cherche généralement l’aide de l’autre pour trouver une solution",
                            categoryId:12,
                        },
                    ],
                },
                {
                    id:229,
                    completed:false,
                    choices : [
                        {
                            id:357,
                            name:"Je propose un terrain d’entente",
                            categoryId:13,
                        },
                        {
                            id:358,
                            name:"Je trouve qu’il ne vaut pas toujours la peine de se préoccuper des divergences",
                            categoryId:14,
                        },
                    ],
                },
                {
                    id:230,
                    completed:false,
                    choices : [
                        {
                            id:359,
                            name:"J’essaie de ne pas blesser l’autre",
                            categoryId:15,
                        },
                        {
                            id:360,
                            name:"Je partage toujours ma vision du problème avec l’autre pour que nous puissions le régler",
                            categoryId:12,
                        },
                    ],
                },
            ],
            }

        this.handleAddPoint = this.handleAddPoint.bind(this)
    }
    
    handleAddPoint = (data) => {
        console.log("data questionnaire",data)
        /*
        data = {questionId , categoryId, oldCategoryId }
        */
        let questions = this.state.questions
        let categories = this.state.categories
        categories.map(element => console.log("categoryID",element.id))
        const qIndex = questions.findIndex(element => element.id === parseInt(data.questionId))
        console.log("qIndex",qIndex)
        if(qIndex >=0)
        {
                questions[qIndex].completed = true
                const cIndex = categories.findIndex(element => element.id === parseInt(data.categoryId))
                console.log("cIndex",cIndex)
                categories[cIndex].value += 1
                const oldcIndex = categories.findIndex(element => element.id === parseInt(data.oldCategoryId))
                if(oldcIndex >=0)
                categories[oldcIndex].value -= 1
        }
        this.setState({
            questions,
            categories
        })
    }
    
    render() {
        return (
            <Context.Provider value={this.state} >
                <div className="survey">
                    <Header questionnaire={this.state}/>
                    <Questions handleclick={this.handleAddPoint} />
                    <Answer questions={this.state.questions} categories={this.state.categories} />
                </div>
        </Context.Provider> 
        )
    }
}
