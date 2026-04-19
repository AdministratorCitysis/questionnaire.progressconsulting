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
                title: "Test des drivers",
                description : "Répondez aux 50 questions en choisissant l'option qui vous correspond le mieux",
                completed: false,
                questions:[
                    {
                        id:1,
                        text:"J'ai toujours l'impression de me battre contre la montre",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:2,
                        text:"Je pense que l'effort est plus important que le résultat",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:3,
                        text:"Je pense que dans la vie je dois me débrouiller tout seul",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:4,
                        text:"Pour commencer une tâche, il me faut toutes les informations",
                        value:0,
                        categoryId:5,
                        completed:false,
                    },
                    {
                        id:5,
                        text:"Il est important que les autres soient bien disposés à mon égard",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:6,
                        text:"Le stress me dope",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:7,
                        text:"J'ai toujours peur de ne pas être à la hauteur",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:8,
                        text:"Je suis très exigeant envers moi-même et les autres",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:9,
                        text:"Pour être satisfait, je dois exceller",
                        value:0,
                        categoryId:5,
                        completed:false,
                    },
                    {
                        id:10,
                        text:"Pour être aimé, je rends service plus que la moyenne",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:11,
                        text:"je ne peux déléguer car les autres sont trop lents",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:12,
                        text:"je dois dépenser beaucoup d'énergie pour faire les choses",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:13,
                        text:"Je n'exprime pas mes émotions",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:14,
                        text:"Pour être efficace, ma tâche doit être parfaite",
                        value:0,
                        categoryId:5,
                        completed:false,
                    },
                    {
                        id:15,
                        text:"Pour mon patron, je suis disponible, même chez moi",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:16,
                        text:"Je parle vite",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:17,
                        text:"J'ai un sentiment d'oppression et la peur d'exploser si je me laisse aller",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:18,
                        text:"J'aime accomplir de nobles tâches",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:19,
                        text:"Les faits, les chiffres, la logique, voilà les vraies valeurs",
                        value:0,
                        categoryId:5,
                        completed:false,
                    },
                    {
                        id:20,
                        text:"Il faut dire aux gens ce qu'ils ont envie d'entendre",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:21,
                        text:"J'ai envie d'interrompre les gens pour finir leurs phrases à leur place",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:22,
                        text:"J'ai le sentiment depuis longtemps d'être responsable de ce qui arrive aux autres",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:23,
                        text:"L'échange intellectuel est le domaine où je suis à l'aise",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:24,
                        text:"L'exactitude à tout prix, voilà le prix de mon image",
                        value:0,
                        categoryId:5,
                        completed:false,
                    },
                    {
                        id:25,
                        text:"J'aime savoir qu'un collègue a besoin de moi",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:26,
                        text:'Je dis souvent "Pressons … oui … oui …. Et alors ?"',
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:27,
                        text:'Les autres disent de moi que je me plains souvent',
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:28,
                        text:"J'aime ce qui fait appel à la logique",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:29,
                        text:"Je dois donner l'impression que je sais tout",
                        value:0,
                        categoryId:5,
                        completed:false,
                    },
                    {
                        id:30,
                        text:"Il faut savoir se couper en quatre",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:31,
                        text:"J'ai coutume de faire les cents pas lorsque je suis en attente de quelque chose",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:32,
                        text:"Les gens viennent vers moi sans que je le leur demande, car on me trouve gentil",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:33,
                        text:"J'ai du mal à faire confiance et à m'abandonner",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:34,
                        text:"Pour moi, une objection est le signe de mon incompétence",
                        value:0,
                        categoryId:5,
                        completed:false,
                    },
                    {
                        id:35,
                        text:"J'aime aider les autres",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:36,
                        text:"Je tapote souvent avec mes doigts ou mes pieds",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:37,
                        text:"Je crée des situations confuses où je me sens stupide et impuissant",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:38,
                        text:"La manière dont les autres me jugent sur ce que je fais m'importe beaucoup",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:39,
                        text:"Je suis convaincu que je suis le meilleur",
                        value:0,
                        categoryId:5,
                        completed:false,
                    },
                    {
                        id:40,
                        text:"Je ne sais pas dire non",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:41,
                        text:"Je vais trop vite, ce qui me fait faire des fautes d'inattention",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:42,
                        text:"Que d'efforts pour répondre à toutes ces questions !",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:43,
                        text:"Je me sens en sécurité si je ne m'implique pas émotionnellement",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:44,
                        text:"Tant qu'une tâche n'est pas réalisée comme je l'imaginais, je recommence",
                        value:0,
                        categoryId:5,
                        completed:false,
                    },
                    {
                        id:45,
                        text:"J'aime jouer le rôle de confident",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:46,
                        text:"Je ne peux rester inactif et au besoin, je fais plusieurs choses en même temps",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:47,
                        text:"Ma mère me disait souvent 'Avec un peu plus d'efforts tu …'",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:48,
                        text:"Dans una tâche à plusieurs, je n'aime pas que l'on ne respecte pas le timing, l'objectif et que l'on fasse des digressions",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:49,
                        text:"J'attends de mes collaborateurs qu'ils fassent exactement ce que je leur dis",
                        value:0,
                        categoryId:5,
                        completed:false,
                    },
                    {
                        id:50,
                        text:"En répondant à ces questiions, je me demande si les réponses correspondent bien à ce qu'lon attend de moi",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                ],
                choices: [
                    {id:1,
                    number:"0",
                    text:"Ce n'est pas moi",
                    value:0},
                    {id:2,
                    number:"1",
                    text:"C'est peut-être moi",
                    value:1},
                    {id:3,
                    number:"2",
                    text:"C'est quelques fois moi",
                    value:2},
                    {id:4,
                    number:"3",
                    text:"C'est souvent moi",
                    value:3},
                    {id:5,
                    number:"4",
                    text:"C'est tout à fait moi",
                    value:4}
                ],
                answers : [
                    {
                    maxvalue:0,
                    text:"Beaucoup de difficulté en matière de gestion de votre temps. A vous d'analyser ce qui est dû à votre environnement de travail et ce qui est de votre fait.",
                    },
                    {
                    maxvalue:60,
                    text:"Gestion de votre temps moyen. Vous devez progresser.",
                    },
                    {
                    maxvalue:90,
                    text:"Vous gérez votre temps de façon active et positive. Bravo! Mais peut-être pouvez-vous encore mieux... et surtout ne vous reposez pas sur vos lauriers, car dans ce domaine, rien n'est acquis et tout se dégrade très vite.",
                    },
                ],
                categories:[
                    {
                        id:1,
                        text:"Sois fort",
                        value:0
                    },
                    {
                        id:2,
                        text:"Fais plaisir",
                        value:0
                    },
                    {
                        id:3,
                        text:"Fais des efforts",
                        value:0
                    },
                    {
                        id:4,
                        text:"Fais vite",
                        value:0
                    },
                    {
                        id:5,
                        text:"Sois parfait",
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
            <Context.Provider value={this.state.questionnaire} className="survey" >
                <Header questionnaire={this.state.questionnaire}/>
                <Questions questions={this.state.questionnaire.questions} description={this.state.questionnaire.description} handlevalue={this.handleValue} />
               <Answer questions={this.state.questionnaire.questions} categories={this.state.questionnaire.categories}  />
            </Context.Provider> 
        )
    }
}
