import React, { Component } from 'react'
import Header from './Header'
import Context from './Context'
import Questions from './Questions'
import Answer from './Answer'


export default class Questionnaire extends Component {
    
    constructor(props) {
        super(props)
       
        this.state = {
             title: "Assertivité",
             instruction : "Répondez à l'ensemble des affirmations pour connaître votre résultat.",
             description : ["Répondez spontanément en choisissant l'affirmation qui vous correspond le mieux.","Vrai = si vous pensez ou agissez de cette façon la plupart du temps.","Faux = Si vous faite ou pensez rarement ce qui est écrit."],
             categories:[
                {
                    id:11,
                    text: ["Attitude de soumission"],
                    value:0,
                },
                {
                    id:12,
                    text:["Attitude agressive"],
                    value:0,
                },
                {
                    id:13,
                    text:["Attitude manipulatrice"],
                    value:0,
                },
                {
                    id:14,
                    text:["Atttude assertive"],
                    value:0,
                },
            ],
            questions : [
                {
                    id:21,
                    completed:false,
                    text : "Je dis souvent oui, alors que je voudrais dire non",
                    categoryId : 11,
                },
                {
                    id:22,
                    completed:false,
                    text : "Je défends mes intérêts tout en acceptant que les autres défendent leurs intérêts",
                    categoryId : 14,
                },
                {
                    id:23,
                    completed:false,
                    text : "Je préfère dissimuler ce que je pense ou ressens, si je ne connais pas bien mon interlocuteur",
                    categoryId : 13,
                },
                {
                    id:24,
                    completed:false,
                    text : "Les autres disent de moi que j'ai des tendances autoritaires",
                    categoryId : 12,
                },
                {
                    id:25,
                    completed:false,
                    text : "Je pense qu'il est plus facile d'agir par personne interposée que directement",
                    categoryId : 13,
                },
                {
                    id:26,
                    completed:false,
                    text : "Je suis direct! Je dis aux gens ce que je pense et je ne crains pas de les critiquer négativement",
                    categoryId : 12,
                },
                {
                    id:27,
                    completed:false,
                    text : "J'accepte de m'occuper de certaines tâches qui manifestement ne relèvent pas de mes fonctions",
                    categoryId : 11,
                },
                {
                    id:28,
                    completed:false,
                    text : "Je ne crains pas de donner mon opinion, même en face d'interlocuteurs hostiles",
                    categoryId : 14,
                },
                {
                    id:29,
                    completed:false,
                    text : 'Au cours des négociations "tendues", je préfère me tenir en retrait pour écouter et utiliser ainsi les points faibles des autres',
                    categoryId : 13,
                },
                {
                    id:210,
                    completed:false,
                    text : "On me reproche parfois d'avoir l'esprit de contradiction",
                    categoryId : 12,
                },
                {
                    id:211,
                    completed:false,
                    text : "J'ai du mal à écouter les autres quand je dois faire passer une de mes convictions",
                    categoryId : 12,
                },
                {
                    id:212,
                    completed:false,
                    text : "Je peux persuader facilement les gens pour les faire adhérer à mon opinion, même si ce n'est pas dans leur intérêt",
                    categoryId : 13,
                },
                {
                    id:213,
                    completed:false,
                    text : "Flatter l'orgueil des autres et les caresser dans le sens du poil est un bon moyen d'obtenir ce que l'on veut",
                    categoryId : 13,
                },
                {
                    id:214,
                    completed:false,
                    text : "J'entretiens avec les autres des rapports fondés sur la confiance",
                    categoryId : 14,
                },
                {
                    id:215,
                    completed:false,
                    text : "Je préfère ne pas demander de l'aide à un collègue. Je ne tiens pas à passer pour un incompétent",
                    categoryId : 11,
                },
                {
                    id:216,
                    completed:false,
                    text : "Je me sens bloqué dès que je dois réaliser une action inhabituelle. J'ai tendance à être timide",
                    categoryId : 11,
                },
                {
                    id:217,
                    completed:false,
                    text : "Je m'énerve et j'explose sur des détails après avoir accumulé des frustrations sans réagir",
                    categoryId : 11,
                },
                {
                    id:218,
                    completed:false,
                    text : "Je suis à l'aise dans les contacts 'face à face'",
                    categoryId : 14,
                },
                {
                    id:219,
                    completed:false,
                    text : "Je joue assez souvent la comédie pour arriver à mes fins",
                    categoryId : 13,
                },
                {
                    id:220,
                    completed:false,
                    text : "Je suis bavard et je coupe la parole aux autres sans m'en rendre compte à temps",
                    categoryId : 12,
                },
                {
                    id:221,
                    completed:false,
                    text : "J'ai de l'ambition et je suis prêt à tout pour gérer ma carrière",
                    categoryId : 12,
                },
                {
                    id:222,
                    completed:false,
                    text : "Je sais généralement à qui je dois m'adresser et quand : c'est important pour réussir",
                    categoryId : 13,
                },
                {
                    id:223,
                    completed:false,
                    text : "En cas de désaccord, je recherche les compromis réalistes qui rencontrent les intérêts mutuels",
                    categoryId : 14,
                },
                {
                    id:224,
                    completed:false,
                    text : 'Je préfère jouer "cartes sur table"',
                    categoryId : 14,
                },
                {
                    id:225,
                    completed:false,
                    text : "J'ai tendance à remettre à plus tard ce que je dois faire",
                    categoryId : 11,
                },
                {
                    id:226,
                    completed:false,
                    text : "Je laisse souvent des points dans l'ombre pour éviter des conflits",
                    categoryId : 11,
                },
                {
                    id:227,
                    completed:false,
                    text : "En général, je me présente tel que je suis, sans dissimuler mes sentiments",
                    categoryId : 14,
                },
                {
                    id:228,
                    completed:false,
                    text : "Il en faut beaucoup pour m'intimider",
                    categoryId : 12,
                },
                {
                    id:229,
                    completed:false,
                    text : "Pour prendre du pouvoir, il faut faire peur aux autres",
                    categoryId : 12,
                },
                {
                    id:230,
                    completed:false,
                    text : "Je sais reprendre ma revanche à l'occasion quand je me suis 'fait avoir'",
                    categoryId : 12,
                },
                {
                    id:231,
                    completed:false,
                    text : "Une manière efficace pour déstabiliser quelqu'un est de lui reprocher qu'il agit contre ses propres principes",
                    categoryId : 13,
                },
                {
                    id:232,
                    completed:false,
                    text : "'La fin justifie les moyens', j'agis en conséquence ",
                    categoryId : 13,
                },
                {
                    id:233,
                    completed:false,
                    text : "Je suis capable d'être moi même, tout en continuant d'être accepté socialement",
                    categoryId : 14,
                },
                {
                    id:234,
                    completed:false,
                    text : "Quand je ne suis pas d'accord, je l'exprime avec calme et je me fais entendre",
                    categoryId : 14,
                },
                {
                    id:235,
                    completed:false,
                    text : "J'ai le souci de ne pas importuner les autres",
                    categoryId : 11,
                },
                {
                    id:236,
                    completed:false,
                    text : "J'ai du mal à prendre parti à choisir",
                    categoryId : 11,
                },
                {
                    id:237,
                    completed:false,
                    text : "Je n'aime pas être la seule personne de mon avis dans un groupe, dans ce cas je préfère me taire",
                    categoryId : 11,
                },
                {
                    id:238,
                    completed:false,
                    text : "Je n'ai pas peur de parler en public",
                    categoryId : 14,
                },
                {
                    id:239,
                    completed:false,
                    text : "La vie n'est qu'un rapport de force et une lutte continuelle",
                    categoryId : 12,
                },
                {
                    id:240,
                    completed:false,
                    text : "Je n'ai pas peur de relever les défis dangereux et risqués",
                    categoryId : 12,
                },
                {
                    id:241,
                    completed:false,
                    text : "Créer des conflits est parfois plus efficace que réduire les tensions",
                    categoryId : 13,
                },
                {
                    id:242,
                    completed:false,
                    text : "On me trouve généralement habile et malin dans les relations avec les autres",
                    categoryId : 13,
                },
                {
                    id:243,
                    completed:false,
                    text : "Je sais écouter et je ne coupe pas la parole",
                    categoryId : 14,
                },
                {
                    id:244,
                    completed:false,
                    text : "Je mène jusqu'au bout ce que j'ai décidé de faire",
                    categoryId : 14,
                },
                {
                    id:245,
                    completed:false,
                    text : "Je n'ai pas peur d'exprimer mes sentiments",
                    categoryId : 14,
                },
                {
                    id:246,
                    completed:false,
                    text : "Il ne faut pas dévoiler trop vite ses intentions",
                    categoryId : 13,
                },
                {
                    id:247,
                    completed:false,
                    text : "Je sais comment profiter du système: je suis très débrouillard",
                    categoryId : 13,
                },
                {
                    id:248,
                    completed:false,
                    text : "J'ai du mal à maitriser mon temps de parole",
                    categoryId : 12,
                },
                {
                    id:249,
                    completed:false,
                    text : "Je sais manier l'ironie mordante",
                    categoryId : 12,
                },
                {
                    id:250,
                    completed:false,
                    text : "Je suis serviable et facile à vivre; les autres ont tendance à m'exploiter",
                    categoryId : 11,
                },
                {
                    id:251,
                    completed:false,
                    text : "J'aime mieux observer que participer",
                    categoryId : 11,
                },
                {
                    id:252,
                    completed:false,
                    text : "Je préfère être dans les coulisses qu'au premier rang",
                    categoryId : 11,
                },
                {
                    id:253,
                    completed:false,
                    text : "Je pense que la manipulation est à terme une pratique inefficace",
                    categoryId : 14,
                },
                {
                    id:254,
                    completed:false,
                    text : "Mentir est parfois nécessaire pour arriver à ses fins",
                    categoryId : 13,
                },
                {
                    id:255,
                    completed:false,
                    text : "Mes paroles choquent souvent les gens",
                    categoryId : 12,
                },
                {
                    id:256,
                    completed:false,
                    text : "Je préfère être loup plutôt qu'agneau",
                    categoryId : 12,
                },
                {
                    id:257,
                    completed:false,
                    text : "Manipuler les autres est le seul moyen pour obtenir ce que l'on veut",
                    categoryId : 13,
                },
                {
                    id:258,
                    completed:false,
                    text : "Je sais protester avec efficacité, sans agressivité excessive",
                    categoryId : 14,
                },
                {
                    id:259,
                    completed:false,
                    text : "Je laisse souvent un travail en cours sans le terminer",
                    categoryId : 11,
                },
                {
                    id:260,
                    completed:false,
                    text : "Je n'aime pas me faire mal voir",
                    categoryId : 11,
                },
            ],
            }

        this.handleAddPoint = this.handleAddPoint.bind(this)
    }
    
    handleAddPoint = (data) => {
        console.log("data questionnaire",data)
        /*
        data = {question, value }
        */
        let questions = this.state.questions
        let categories = this.state.categories

        const qIndex = questions.findIndex(element => element.id === parseInt(data.question.id))
        console.log("qIndex",qIndex)
        if(qIndex >-1)
        {
                questions[qIndex].completed = true
                const cIndex = categories.findIndex(element => element.id === parseInt(data.question.categoryId))
                console.log("cIndex",cIndex)
                if(cIndex>-1)
                {
                    categories[cIndex].value += data.value
                }
                
        }
        this.setState({
            questions,
            categories
        })
    }
    
    render() {
       


        return (
            <Context.Provider value={this.state}  >
                <div className="survey">
                    <Header questionnaire={this.state}/>
                    <Questions handleclick={this.handleAddPoint} />
                    <Answer questions={this.state.questions} categories={this.state.categories} />

                </div>
        </Context.Provider> 
        )
    }
}
