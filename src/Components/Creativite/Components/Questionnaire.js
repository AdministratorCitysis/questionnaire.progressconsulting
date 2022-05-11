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
                title: "Questionnaire des styles créatifs*",
                description : "Dans quelle mesure chacune des affirmations suivantes vous correspond-elle ?",
                asterix: "Inspiré de l'approche des préférences cérébrales de Ned Herrmann.",
                completed: false,
                questions:[
                    {
                        id:1,
                        text:"On vous reconnaît un bon esprit de synthèse et d’association des idées",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:2,
                        text:"Vous aimez les jeux de logique",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:3,
                        text:"Il est important de garder le contrôle de soi pour ne pas biaiser l’exercice créatif",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:4,
                        text:"Le secret d’une bonne session créative réside avant tout dans la qualité de l’écoute",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:5,
                        text:"Vous recherchez la compagnie de créateurs et d’artistes",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:6,
                        text:"Vous pensez que la créativité permet de se préparer aux différentes éventualités",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:7,
                        text:"Avoir des idées, c'est à la portée de tous ! Ce qui compte, c'est comment on va les mettre en œuvre",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:8,
                        text:"Votre ressenti lors des contacts avec les autres vous aide à faire des choix entre différentes idées",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:9,
                        text:"Vous avez besoin de voir le problème de manière globale plutôt que de pouvoir y entrer par un détail spécifique",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:10,
                        text:"Vous avez besoin de prendre le temps de réfléchir avant de passer à l’action",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:11,
                        text:"Vous aimez l'implémentation de nouvelles idées selon un calendrier précis",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:12,
                        text:"Vous avez l'impression qu'un fond sonore ou musical vous aide pour être créatif",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:13,
                        text:"Vous appréciez la pensée abstraite et conceptuelle",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:14,
                        text:"Selon vous, chiffres et créativité vont très bien ensemble",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:15,
                        text:"On fait souvent appel à vos capacités d'organisateur",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:16,
                        text:"Le plaisir d’échanger passe avant le résultat des idées générées",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:17,
                        text:"Vous aimez collecter vos sources d’inspiration partout",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:18,
                        text:"Vous aimez dessiner des plans ou des détails techniques pour générer de nouvelles idées",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:19,
                        text:"La créativité c’est plutôt un processus qu’un talent",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:20,
                        text:"C’est bon d’avoir des idées utopistes",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:21,
                        text:"Une session créative réussie ressemble à un jeu",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:22,
                        text:"La créativité doit aussi apporter une solution pertinente au problème soulevé !",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:23,
                        text:"Vous aimez lister toutes les idées sans les juger : il faut rester neutre au début",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:24,
                        text:"On dit de vous que votre enthousiasme pour la nouveauté est communicatif",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:25,
                        text:"L’audace fait partie de votre personnalité",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:26,
                        text:'Vous ne supportez pas quand les autres ne tiennent pas des propos cohérents',
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:27,
                        text:'Vous préférez utiliser des techniques créatives reconnues et éprouvées',
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:28,
                        text:"Être créatif, c’est observer et voir ce que les autres ne voient pas",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:29,
                        text:"La créativité permet d'imaginer le futur, vous aimez les projets visionnaires",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:30,
                        text:"Il est bon d'être créatifs ensemble pour développer une pensée critique",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:31,
                        text:"Dans un exercice créatif, il ne faut pas trop se laisser mener par ses émotions",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:32,
                        text:"Vous êtes un fervent promoteur de l'intelligence collective",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:33,
                        text:"Vous aimez lancer vos idées de manière spontanée : les premières idées sont souvent les meilleures",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:34,
                        text:"Vous avez lu quelques livres d'experts en créativité pour vous inspirer",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:35,
                        text:"Vous aimez rappeler les règles de bonnes pratiques avant de lancer une session créative",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:36,
                        text:"Vous n'aimez pas être créatif seul et préférez brainstormer en groupe",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:37,
                        text:"Vous pensez souvent par images et métaphores",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:38,
                        text:"Découper un problème en plusieurs séquences vous aide à générer des solutions",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:39,
                        text:"Une session créative doit être bien organisée",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:40,
                        text:"Vous aimez tester vos idées auprès d'une personne de confiance",
                        value:0,
                        categoryId:1,
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
                    text:"C'est quelques fois moi",
                    value:1},
                    {id:3,
                    number:"2",
                    text:"Je ne sais pas",
                    value:2},
                    {id:4,
                    number:"3",
                    text:"C'est parfois moi",
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
                        text:["Enthousiaste","communicateur"], 
                        color : "#008ED6",
                        description:"L'enthousiaste communicateur est un style créatif ouvert aux autres. Ce style retire son énergie des contacts et des échanges avec les autres. Ses émotions et sa sensibilité sont source de nouvelles idées, car il voit ce que d'autres n'ont pas vu. Avec un certain idéalisme et optimisme, il aime partager son enthousiasme pour créer ensemble de nouvelles manières de faire.",
                        value:0
                    },
                    {
                        id:2,
                        text:["Pragmatique","pionnier"],
                        color : "#0076B2",
                        description:"Quand ce style créatif est activé, nous préférons réfléchir seul avant d'agir et lancer nos idées. Il s'agit tout d'abord d'observer les faits derrière un problème, pourquoi pas en partant de ce que nous disent les chiffres. Ensuite, nous pouvons aborder plusieurs éventualités, pourquoi pas en listant d'abord toutes les possibilités de manière neutre ou en dessinant un croquis technique. Il s'agit de rester cohérent de ne pas se laisser emporter par nos biais personnels de la pensée qui limiteraient notre créativité. Ensuite viendra le moment de vérité : le test de notre idée et la récolte du feedback des utilisateurs.",
                        value:0
                    },
                    {
                        id:3,
                        text:["Imaginatif","visionnaire"],
                        color : "#005F8E",
                        description:"Ce style créatif nous fait penser par images. Sa force réside dans l'association d'idées apparemment sans lien. Grâce à une vision globale et conceptuelle, on peut résoudre des problèmes par intuition et explorer de nouvelles pistes. Il faut une certaine dose d'audace et surtout beaucoup de curiosité pour nourrir ce style créatif! Chaque jour donne l'opportunité de nouvelles expérimentations, si on ouvre bien l'oeil !",
                        value:0
                    },
                    {
                        id:4,
                        text:["Chercheur","organisé"],
                        color : "#00476B",
                        description:"Le style créatif du Chercheur Organisé nous aide à gérer notre projet créatif et à faire en sorte que nos idées prennent vie. On peut s'inspirer des succès des personnalités créatives pour  répliquer leurs techniques. Il s'agit d'utiliser des outils créatifs éprouvés pour mettre de l'ordre dans ses idées. Parfois, l'observation d'un petit détail peut nous donner de grandes idées ! Seulement après on peut faire le tri dans les différentes catégories d'idées et se lancer dans la planification, avec le test d'un prototype par exemple.",
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
            <Context.Provider value={this.state.questionnaire} >
                <div className="survey"  >
                <Header questionnaire={this.state.questionnaire}/>
                <Questions questions={this.state.questionnaire.questions} description={this.state.questionnaire.description} handlevalue={this.handleValue} />
               <Answer questions={this.state.questionnaire.questions} categories={this.state.questionnaire.categories} />
                <div className="asterix">
                <p>*{this.state.questionnaire.asterix}</p>
                </div>
                </div>
               
            </Context.Provider> 
        )
    }
}
