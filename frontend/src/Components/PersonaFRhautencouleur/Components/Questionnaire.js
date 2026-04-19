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
                title: "Profil PERSONA",
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
                        //X > 16 & Y < X       ==> Jaune & Rouge
                        {
                            id:11,
                            text:"Jaune et Rouge",
                            color:'#EDE813',
                            primary:"Votre couleur dominante est le jaune et votre couleur secondaire probablement le rouge",
                            secondary:["Vous êtes extraverti et orienté résultat."," Vous aimez l’action, la rapidité, le contact…","Vous êtes exigeant et attendez des résultats rapides…","Prendre la parole en public pour donner votre avis n’est pas un problème.","L’argumentation, voire la confrontation des idées est un mode de fonctionnement naturel…","Pour vous convaincre, il faut des arguments concrets et vous parler droit au but…","Votre valeur ajoutée principale : faire avancer les choses…"],
                        
                        },
                        //X < 16 & X == Y      ==> Jaune
                        {
                            id:1,
                            text:"Jaune",
                            color:'#EDE813',
                            primary:"Votre couleur dominante est le jaune",
                            secondary:["Vous êtes extraverti et orienté vers les personnes.","Vous montrez de l'enthousiasme et vous passionnez très vite pour les nouveautés.","Vous aimez travailler avec les autres et leur transmettre votre motivation.","Vous entretenez votre réseau. Vous vivez à travers le regard des autres, vous aimez les compliments et soignez votre apparence.","Vous avez tendance à ne pas finir vos tâches dès qu'un nouveau sujet passionnant se profile à l'horizon."],
                        },
                        //X < 16 & Y > X       ==> Jaune & Vert
                        {
                            id:12,
                            text:"Jaune et Vert",
                            color:'#EDE813',
                            primary:"Votre couleur dominante est le jaune et votre couleur secondaire est probablement le vert.",
                            secondary:["Vous êtes à l’aise dans les situations sociales.","Rentrer en contact, échanger, partager vos émotions avec les autres n’est pas un problème.","Empathique, dynamique, vous mettez l’ambiance et créez la relation en accordant de l’importance à vos interlocuteurs.","Positif, vous donnez du feedback encourageant aux autres.","Votre valeur ajoutée principale : développer l’esprit d’équipe et créer un climat relationnel positif.","Vous êtes aussi très attentif à la forme de votre communication."],
                        },
                        //X == 16              ==> Relation
                        {
                            id:2,
                            text:"Relation",
                            color: "#FFFFFF",
                            primary:"Votre résultat n'est pas défini sur l'axe horizontal",
                            secondary:["On peut néanmoins en déduire une attention vers le côté relationnel.","La priorité est plutôt l'humain, les personnes, la relation aux autres."],
                        },
                        //X < 16 & Y > 32-X    ==> Vert & Jaune
                        {
                            id:13,
                            text:"Vert et Jaune",
                            color:'#009640',
                            primary:"Votre couleur dominante est le vert et votre couleur secondaire probablement le jaune.",
                            secondary:["Votre premier besoin est l’harmonie et développer des relations profondes avec les autres.","Néanmoins, vous êtes plutôt à l’aise en public et vous trouvez facilement votre place dans les dynamiques collectives.","Prendre la parole en réunion, notamment pour échanger sur les aspects relationnels, l’humain et les valeurs est important pour vous.","Vous aimez partager vos idées et votre réseau personnel est fait de personnes que vous appréciez particulièrement.","Par contre vous savez vous mettre en retrait et écouter quand le groupe s’exprime.","Une de vos difficultés majeures est de vous affirmer directement."],
                           
                        },
                        //X < 16 & Y == X      ==> Vert
                        {
                            id:3,
                            text:"Vert",
                            color:'#009640',
                            primary:"Votre couleur dominante est le vert",
                            secondary:["Vous êtes orienté vers les personnes et les relations, et plutôt introverti.","Vous parlez doucement et chaleureusement.","Vous ne supportez pas les conflits, ni les critiques directes, qui peuvent vous blesser.","Vous agissez de façon calme et modérée.","Vous pouvez toutefois réagir violemment car vous avez tendance à intérioriser et à contenir vos émotions."],
                           
                        },
                        //X < 16 & Y < 32-X    ==> Vert & Bleu
                        {
                            id:14,
                            text:"Vert et Bleu",
                            color:'#009640',
                            primary:"Votre couleur dominante est le vert et votre couleur secondaire probablement le bleu.",
                            secondary:["Calme, à l’écoute, empathique, votre style discret mais attentionné vous vaut d’être une « ressource » ou un confident pour les autres.","Serviable et introverti, vous apportez des solutions de fond en respectant/intégrant les avis des autres.","Vous posez des questions et observez les situations.","Votre discrétion est souvent appréciée.","Votre principale valeur ajoutée : l’aide que vous apportez aux autres, associée à une fiabilité certaine.","Vous aimez prendre le temps de la réflexion avant de décider et vous vous basez sur l’avis des autres mais aussi sur des éléments factuels de décision."],
                           
                        },
                    ],
                    //Y == 16
                    [
                        //X > 16               ==> Extraverti
                        {
                            id:4,
                            text:"Extraverti",
                            color: "#FFFFFF",
                            primary:"Votre résultat n'est pas défini sur l'axe vertical",
                            secondary:["On peut néanmoins en déduire une attention aux sentiments, opinions ou raisonnements récurrents."],
                        },
                        //X == 16              ==> Indéfini
                        {
                            id:5,
                            text:"Indéfini",
                            color: "#FFFFFF",
                            primary:"Votre résultat n'est pas défini sur l'axe vertical et horizontal",
                            secondary:["Vous pouvez réessayer en remplaçant certaines réponses sur lesquelles vous avez peut-être hésité."],
                       
                        },
                        //X < 16               ==> Introverti
                        {
                            id:6,
                            text:"Introverti",
                            color: "#FFFFFF",
                            primary:"Votre résultat n'est pas défini sur l'axe vertical",
                            secondary:["On peut néanmoins en déduire une énergie moins visible.","Les sentiments, les opinions sont plus intériorisées."],
                        }
                    ],
                    //Y < 16
                    [
                        //X > 16 & Y > 32-x     ==> Rouge & Jaune
                        {
                            id:18,
                            text:"Rouge et Jaune",
                            color:'#E30613',
                            primary:"Votre couleur dominante est le rouge et votre couleur secondaire probablement le jaune",
                            secondary:["Vous êtes orienté Résultat et vous êtes attentifs à embarquer les autres parties prenantes vers cet objectif.","L’efficacité est votre premier moteur.","Habituellement orienté tâches et faits concrets, vous n’avez pas de difficultés pour créer votre réseau, partager dans la bonne humeur vos idées et vous ouvrir aux autres.","Le projet qui se traduit rapidement en éléments visibles est votre moteur.","Et votre mantra est : « agissons ! »"],
                        },
                        //X > 16 & Y == 32-X    ==> Rouge
                        {
                            id:7,
                            text:"Rouge",
                            color:'#E30613',
                            primary:"Votre couleur dominante est le rouge",
                            secondary:["Vous êtes orienté vers l'action et les résultats, et plutôt extraverti.","Vous possédez une vision d'ensemble et ne vous embarrassez pas des détails.","Vous êtes motivé par les challenges et allez droit au but.","Vous parlez vite et fort.","Vous n'avez pas peur de vous tromper, vous prenez vos décisions rapidement, même avec très peu de cartes en main et n’avez aucun souci à reconnaître vos éventuelles erreurs."],
                        },
                        //X > 16 & Y < 32-X     ==> Rouge & Bleu
                        {
                            id:17,
                            text:"Rouge et Bleu",
                            color:'#E30613',
                            primary:"Votre couleur dominante est le rouge et votre couleur secondaire probablement le bleu. ",
                            secondary:["Votre premier moteur est l’efficacité.","Vous œuvrez avec une forme de discrétion à atteindre les résultats escomptés.","Vous aimez plutôt travailler en solitaire, et vous faites remarquer calmement les problèmes de terrain.","On apprécie chez vous votre sang-froid et votre efficience naturelle.","Votre fiabilité est un autre de vos atouts.","Vous êtes celui ou celle qui organisez les projets et les planifiez.","On se tourne souvent vers vous pour cela car c’est un rôle que vous aimez occuper."],
                        },
                        //X == 16               ==> Résultat
                        {
                            id:8,
                            text:"Résultat",
                            color: "#FFFFFF",
                            primary:"Votre résultat n'est pas défini sur l'axe horizontal",
                            secondary:["On peut néanmoins en déduire l'attention portée aux tâches à réaliser, aux objectifs et aux résultats."],
                        },
                        //X < 16 & Y < X        ==> Bleu & Rouge
                        {
                            id:16,
                            text:"Bleu et Rouge",
                            color:'#045576',
                            primary:"Votre couleur dominante est le bleu et votre couleur secondaire probablement le rouge.",
                            secondary:["Vous êtes calme, factuel et rationnel.","Vous intervenez régulièrement pour mettre en évidence les dysfonctionnements autour de vous.","Vous observez la réalité et y jetez un coup d’œil analytique et rationnel.","Votre valeur ajoutée principale : la mise en évidence de certains risques que les autres ne voient pas.","Vous pouvez parfois être très « carré » dans vos approches et avoir du mal à changer de point de vue.","Votre approche décisionnelle est définitivement basée sur une approche concrète et factuelle."],
                        },
                        //X < 16 & Y == X       ==> Bleu
                        {
                            id:9,
                            text:"Bleu",
                            color:'#045576',
                            primary:"Votre couleur dominante est le bleu",
                            secondary:["Vous êtes introverti, orienté vers les tâches.","Vous êtes consciencieux et aimez travailler au calme.","Vous êtes une personne posée, attentive aux failles et incohérences.","Vous avez besoin de structure et de précision.","Vous détestez vous tromper, et cette simple éventualité suffit à vous paralyser.","Vous avez besoin d'avoir toutes les cartes en main pour décider, de façon méthodique.","Vous respectez les règles et les procédures car elles sont garantes de fiabilité."],
                        },
                        //X < 16 & Y > X        ==> Bleu & Vert
                        {
                            id:15,
                            text:"Bleu et Vert",
                            color:'#045576',
                            primary:"Votre couleur dominante est le bleu et votre couleur secondaire probablement le vert.",
                            secondary:["Vous êtes plutôt discret et pouvez parfois sembler peu sûr de vous.","Vous aimez la rigueur et la fiabilité.","Même si vous préférez travailler seul, vous avez développé autour de vous un réseau de personnes avec lesquelles vous entretenez des relations d’une certaine profondeur.","Vous êtes attentif aux autres et pouvez, si le degré d’intimité est là, exprimer facilement ce que vous ressentez.","Vous aimez les personnes qui ont de l’expertise et c’est avec elles que vous gérez vos projets !","Introvertis, vous prenez du temps pour vous positionner."],
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
