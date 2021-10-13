import React, { Component } from 'react'
import Header from './Header'
import Context from './Context'
import Questions from './Questions'
import Answer from './Answer'

export default class Questionnaire extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             title: "Auto-diagnostic des styles de Leadership",
             description : "L'objectif du questionnaire est de vous donner l'information sur la perception que vous avez de votre propre style de management. Cet exercice propose vingt situations professionnelles typiques qui impliquent un dirigeant et un ou plusieurs collaborateurs.",
             instruction : "Parmi chaque situation, cochez une solution dont vous pensez qu'elle est la plus proche du comportement qui serait le vôtre dans la situation donnée.",
             completed: false,
             categories:[
                {
                    id:11,
                    text: ["Comptétion"],
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
                    text:"Vous avez demandé à une de vos collaboratrices de rédiger un rapport sur l'achat d'un nouvel appareil pour votre division. Vous pensez qu'elle est capable de faire cette démarche et, qu'avec votre encouragement, elle pourra la réaliser à temps. Cependant, le rapport est en retard. Vous allez...",
                    choices : [
                        {
                            id:31,
                            name:"Lui dire que vous voulez obtenir ce rapport, lui expliquer ce qui doit y figurer et suivre quotidiennement sa progression",
                            categoryId:14,
                        },
                        {
                            id:32,
                            name:"Lui accorder plus de temps pour accomplir sa mission",
                            categoryId:15,
                        },
                        {
                            id:33,
                            name:"Lui dire ce que vous attendez, quand vous voulez que ce rapport soit prêt, mais lui accorder du temps pour discuter avec elle des raisons pour lesquelles ce rapport n'est pas terminé",
                            categoryId:14,
                        },
                        {
                            id:34,
                            name:"Lui parler et l'encourager à terminer ce rapport",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:22,
                    completed:false,
                    text:"Vous avez la direction d'un groupe de travail spécial qui travaille durement pour terminer un rapport, destiné à tous les départements de votre firme. Votre groupe se voit affecter un nouveau membre. Il a un rapport financier à rédiger pour sa division d'ici la fin de la semaine prochaine, mais il ne sait rien des exigences qui ont été posées à l'égard du groupe de travail ni comment le rapport doit être présenté. Il est à la fois nerveux et enthousiaste à l'idée d'en savoir plus sur son rôle dans le groupe. Il veut apprendre aussi vite que possible. Vous allez...",
                    choices : [
                        {
                            id:35,
                            name:"Lui expliquer exactement ce qu'on doit pouvoir trouver dans le rapport et vous faites ce qu'il faut pour le suivre pas à pas dans ses prestations.",
                            categoryId:14,
                        },
                        {
                            id:36,
                            name:"Lui demander si vous pouvez faire quelque chose pour l'aider et soutenir son enthousiasme en tant que nouveau membre du groupe de travail.",
                            categoryId:15,
                        },
                        {
                            id:37,
                            name:"Lui expliquer la charpente du rapport et tous les détails, et y intégrer les idées qu'il pourrait avoir.",
                            categoryId:14,
                        },
                        {
                            id:38,
                            name:"L'accueillir dans le groupe, lui permettre de faire connaissance avec les autres membres du groupe de travail qui peuvent l'aider à présenter son rapport financier.",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:23,
                    completed:false,
                    text:"Vous avez récemment eu quelques difficultés avec un de vos collaborateurs. Il est devenu lent et amorphe. Ce n'est que grâce à votre insistance et à votre appui constant que le travail a finalement été mené à bien. Vous fondant sur l'expérience que vous avez de lui, vous supposez qu'il manque d'expertise pour exécuter la mission hautement prioritaire que vous allez lui confier. Vous allez...",
                    choices : [
                        {
                            id:39,
                            name:"Continuer à le diriger et suivre à la trace l'avancement de son travail.",
                            categoryId:14,
                        },
                        {
                            id:310,
                            name:"Continuer à garder le contrôle direct de son travail et tenter de mieux diagnostiquer et comprendre ses attitudes et sentiments concernant les responsabilités qu'on lui a assignées.",
                            categoryId:15,
                        },
                        {
                            id:311,
                            name:"L'impliquer dans les problèmes qu'entraîne ce travail, lui offrir de l'aide et utiliser ses idées pour l'accomplissement du travail.",
                            categoryId:14,
                        },
                        {
                            id:312,
                            name:"Lui faire savoir qu'il s'agit d'un travail important et lui demander de vous contacter au cas où il aurait des questions ou des problèmes à ce propos.",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:24,
                    completed:false,
                    text:"Votre groupe travaille dans la plupart des cas de façon efficace sous votre direction et avec vos encouragements. Malgré vos instructions précises et votre soutien constants, sa performance a sensiblement diminué. Le groupe a besoin d'un surplus de connaissance et d'expérience afin d'améliorer ses prestations. Votre chef est inquiet. Vous allez...",
                    choices : [
                        {
                            id:313,
                            name:"Mettre l'accent sur le besoin de meilleures performances et demander au groupe de résoudre lui-même ses problèmes.",
                            categoryId:14,
                        },
                        {
                            id:314,
                            name:"Veiller au repsect des délais fixés et à la bonne qualité du travail, mais parler avec le groupe pour savoir ce qu'il suggère.",
                            categoryId:15,
                        },
                        {
                            id:315,
                            name:"Informer exactement le groupe de ce que vous attendez de lui, quand il est nécessaire que ce soit prêt et quelles seraient les suites d'un maintien des mauvaises performances, et surveiller régulièrement leur progression.",
                            categoryId:14,
                        },
                        {
                            id:316,
                            name:"Aider le groupe à déterminer ce qui doit être fait et l'encourager à prendre les initiatives nécessaires.",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:25,
                    completed:false,
                    text:"Du fait d'une limitation d'ordre budgétaire, votre division est obligée de consolider. Vous avez demandé à une collaboratrice très expérimentée de s'occuper personnellement de la consolidation. Cette personne a travaillé à toutes les facettes de votre division et a dans le passé toujours mis beaucoup de bonne volonté à aider. Bien qu'elle dispose selon vous de la capacité nécessaire à accomplir cette mission, elle semble être peu intéressée par le job. Vous allez...",
                    choices : [
                        {
                            id:317,
                            name:"Assurer vous-même la consolidation, tout en tenant compte de ses suggestions.",
                            categoryId:14,
                        },
                        {
                            id:318,
                            name:"Lui confier la mission et la laisser juge de la manière de la faire.",
                            categoryId:15,
                        },
                        {
                            id:319,
                            name:"Discuter avec elle de la situation et l'encourager à accepter cette mission, compte tenu de ses connaissances et de son expérience.",
                            categoryId:14,
                        },
                        {
                            id:320,
                            name:"Prendre la consolidation sur vos épaules et lui dire clairement ce qu'il y a à faire. Suivre de près son travail.",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:26,
                    completed:false,
                    text:"Une femme très productive et très efficace de votre équipe a demandé des conseils pour accomplir son travail. Elle travaille habituellement de façon indépendante et avec une grande efficacité. Elle connaît depuis peu quelques problèmes dans son travail : elle pense qu'elle n'est pas en mesure de les résoudre elle-même. Vous allez...",
                    choices : [
                        {
                            id:321,
                            name:"Analyser les problèmes et indiquer des méthodes pour les résoudre.",
                            categoryId:14,
                        },
                        {
                            id:322,
                            name:"Lui laisser le soin de trouver elle-même une solution adaptée.",
                            categoryId:15,
                        },
                        {
                            id:323,
                            name:"Discuter avec elle, puis déterminer et fixer la solution appropriée vous même, et faire en sorte qu'elle soit appliquée.",
                            categoryId:14,
                        },
                        {
                            id:324,
                            name:"Discuter avec elle des problèmes et lui apporter votre soutien dans la recherche de la solution appropriée.",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:27,
                    completed:false,
                    text:"Vous avez demandé à un de vos collaborateurs seniors de prendre la responsabilité d'une nouvelle mission. Dans ses autres responsabilités, il a - avec votre soutien - obtenu de bons résultats. Le travail que vous lui avez demandé d'accomplir est important pour l'avenir de votre groupe. Il est armé pour cette mission mais ne sait pas par où commencer car il lui manque l'expérience de ce type de travail. Vous allez...",
                    choices : [
                        {
                            id:377,
                            name:"Discuter avec lui du travail et souligner ses capacités à l'accomplir en mettant l'accent sur ses excellentes performances passées.",
                            categoryId:14,
                        },
                        {
                            id:378,
                            name:"Définir les activités indispensables à cette mission et se renseigner régulièrement sur la progression du travail.",
                            categoryId:15,
                        },
                        {
                            id:379,
                            name:"Lui confier la mission et lui laisser déterminer lui-même la façon, dont il veut aller de l'avant. Lui dire de vous contacter s'il rencontre des problèmes.",
                            categoryId:14,
                        },
                        {
                            id:380,
                            name:"Spécifier ce qu'il a à faire, et éventuellement faire usage des idées qu'il pourrait avoir.",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:28,
                    completed:false,
                    text:"Un de vos collaborateurs est mal à l'aise face au travail que vous lui avez confié récemment. Il est pourtant compétent, et vous savez qu'il a les capacités nécessaires pour mener efficacement à bien cette mission. Vous allez...",
                    choices : [
                        {
                            id:325,
                            name:"Tenir compte de ses soucis et lui faire savoir que vous avez pleine confiance dans ses capacités à accomplir cette mission.",
                            categoryId:14,
                        },
                        {
                            id:326,
                            name:"Structurer la mission de façon qu'elle soit claire, mais tenir comptes des suggestions positives qu'il pourrait faire.",
                            categoryId:15,
                        },
                        {
                            id:327,
                            name:"Lui expliquer de manière précise ce qu'il y a à faire et assure un contrôle quotidien de son travail.",
                            categoryId:14,
                        },
                        {
                            id:328,
                            name:"Lui laisser le soin de découvrir lui-même comment ce travail doit être accompli.",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:29,
                    completed:false,
                    text:"Vos collaborateurs vous ont demandé d'apporter une modification à leur mode de travail. Dans le passé, vous avez encouragé et soutenu leurs suggestions. Dans les circonstances actuelles, votre équipe est convaincue qu'un changement est nécessaires. Les membres de votre groupe sont très compétents et forme une bonne équipe. Vous allez...",
                    choices : [
                        {
                            id:329,
                            name:"Associer le groupe au développement d'un nouveau mode de travail et encourager les propositions et suggestions de tous les membres de l'équipe.",
                            categoryId:14,
                        },
                        {
                            id:330,
                            name:"Développer et introduire vous-même le nouveau schéma, mais y apporter les propositions de vos gens.",
                            categoryId:15,
                        },
                        {
                            id:331,
                            name:"Autoriser l'équipe à formuler elle-même le nouveau schéma et à le mettre en place.",
                            categoryId:14,
                        },
                        {
                            id:332,
                            name:"Développer vous-même le nouveau schéma et suivre de près sa mise en place.",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:210,
                    completed:false,
                    text:"Vous êtes arrivé une demi-heure en retard à une réunion avec votre groupe. Au moment où vous arrivez, la réunion n'a pas encore commencé. Il ressort d'une enquête que certains membres ont voulu entamer la réunion, mais que la plupart des membres du groupe étaient découragés par un manque d'esprit d'équipe. Cela vous étonne, car la progression du groupe sur le projet était bonne. Vous allez...",
                    choices : [
                        {
                            id:333,
                            name:"Redéfinir l'objectif de la réunion et laisser fonctionner l'équipe sans intervention de votre part pour autant qu'on ne vous appelle pas à l'aide.",
                            categoryId:14,
                        },
                        {
                            id:334,
                            name:"Prendre immédiatement le contrôle et guider le groupe vers la poursuite et l'accomplissement du projet.",
                            categoryId:15,
                        },
                        {
                            id:335,
                            name:"Diriger l'interaction entre les membres vers un accomplissement du projet et les encourager à discuter leurs problèmes et leurs sentiments.",
                            categoryId:14,
                        },
                        {
                            id:336,
                            name:"Demander au groupe de poursuivre la discussion du projet et lui apporter tout le soutien et l'encouragement possibles.",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:211,
                    completed:false,
                    text:"Un collaborateur du département a déjà accompli plusieurs choses et ce grâce à votre attitude peu directive, mais pleine de soutien et d'encouragements. Pour l'année qui vient, ce collaborateur de votre division aura les mêmes tâches et les mêmes responsabilités, et vous devez décider comment vous allez le suivre. Vous allez...",
                    choices : [
                        {
                            id:337,
                            name:"Le laisser fonctionner indépendamment et assurer son propre contrôle et sa propre motivation, sans trop de directivité ou de soutien.",
                            categoryId:14,
                        },
                        {
                            id:338,
                            name:"Mettre l'accent sur l'importance des objectifs à atteindre et diriger ses actions vers l'accomplissement de la mission assignée.",
                            categoryId:15,
                        },
                        {
                            id:339,
                            name:"Lui parler et fixer des buts et des objectifs à l'accomplissement de son travail, mais prendre ses suggestions en considération.",
                            categoryId:14,
                        },
                        {
                            id:340,
                            name:"L'impliquer dans la fixation d'objectifs et soutenir ses efforts.",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:212,
                    completed:false,
                    text:"Dans le passé, vous avez travaillé en collaboration étroite avec votre groupe, en dirigeant et en soutenant leurs efforts. La productivité est élevée et vos gens forment une bonne équipe. Connaissant leurs possibilités, vous pensez qu'ils peuvent désormais travailler plus indépendamment. Vous avez à présent centré votre énergie sur d'autres domaines, et vos gens ont continué à remporter de bons résultats. Vous devez maintenant leur demander d'accepter un surcroît de travail. Vous allez...",
                    choices : [
                        {
                            id:341,
                            name:"Leur assigner le travail, vous assure qu'ils savent clairement ce qu'ils doivent faire et garder un contrôle vigilant.",
                            categoryId:14,
                        },
                        {
                            id:342,
                            name:"Leur donner le travail. Leur dire à quel point vous êtes satisfait de leurs performances passées, et que vous êtes convaincu qu'ils vont également faire merveille dans cette tâche.",
                            categoryId:15,
                        },
                        {
                            id:343,
                            name:"Vous assurez qu'ils ont bien compris ce qu'il y a à faire et intégrer dans la mission toutes les bonnes suggestions qu'ils pourraient faire.",
                            categoryId:14,
                        },
                        {
                            id:344,
                            name:"Les laisser décider eux-mêmes comment ils vont accomplir la mission.",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:213,
                    completed:false,
                    text:"Vous avez récemment reçu un nouveau collaborateur supplémentaire pour un travail important. Bien qu'il soit inexpérimenté, il est enthousiaste et est convaincu qu'il peut accomplir le travail. Vous allez...",
                    choices : [
                        {
                            id:345,
                            name:"Le laisser déterminer quel est le contenu du job et comment il faut l'accomplir.",
                            categoryId:14,
                        },
                        {
                            id:346,
                            name:"Lui dire clairement quel est le contenu du job et ce que vous attendez de lui, et exercer un contrôle rapproché et régulier sur son travail.",
                            categoryId:15,
                        },
                        {
                            id:347,
                            name:"Lui expliquer ce que vous voulez lui faire faire, mais explorer s'il a des idées ou des suggestions.",
                            categoryId:14,
                        },
                        {
                            id:348,
                            name:"L'encourager et valoriser son enthousiasme, et lui demander comment il aborderait son job.",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:214,
                    completed:false,
                    text:"Votre chef a demandé d'augmenter de 10% la productivité de votre division. Vous savez que c'est possible mais que cela exigera une implication active de votre part. Pour vous libérer à cet effet, vous devez déléguer la mise en place d'un nouveau système de contrôle des coûts. La collaboratrice à laquelle vous pensez pouvoir confier cette tâche possède une expérience considérable des systèmes de contrôle des coûts, mais semble avoir confiance en elle pour fonctionner de manière autonome... Vous allez...",
                    choices : [
                        {
                            id:349,
                            name:"Lui demander d'accepter cette mission, l'encourager et soutenir ses efforts.",
                            categoryId:14,
                        },
                        {
                            id:350,
                            name:"Parler avec elle de la mission, expliquer comment vous désirez que le travail soit fait, mais rester à l'écouter de ses éventuelles suggestions.",
                            categoryId:15,
                        },
                        {
                            id:351,
                            name:"Lui confier la mission et la laisser déterminer elle-même comment elle va la mener à bien.",
                            categoryId:14,
                        },
                        {
                            id:352,
                            name:"Lui confier la mission et rédiger un mémo dans lequel sont expliquées en détail toutes les étapes à franchir pour réaliser le travail.",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:215,
                    completed:false,
                    text:"Une de vos collaboratrices a fait une suggestion portant sur un changement des méthodes de travail du groupe. Vous la trouvez logique. Dans le passé, elle a déjà eu l'occasion de faire des propositions et de les mettre en pratique avec vos encouragements et votre soutien. Vous avez confiance dans ses capacités. Vous allez...",
                    choices : [
                        {
                            id:353,
                            name:"Prendre la responsabilité de l'initiative et suivre activement cette collaboratrice lors de l'exécution du projet.",
                            categoryId:14,
                        },
                        {
                            id:354,
                            name:"Discuter avec elle de sa suggestion et la soutenir dans ses efforts pour implémenter le changement.",
                            categoryId:15,
                        },
                        {
                            id:355,
                            name:"Organiser vous-même la réalisation mais y englober ses idées.",
                            categoryId:14,
                        },
                        {
                            id:356,
                            name:"Lui confier la responsabilité de l'implémentation du changement sans vous y impliquer vous-même.",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:216,
                    completed:false,
                    text:"Du fait d'une maladie dans votre famille, vous avez été contraint de manquer les deux premières réunions d'un comité placé sour votre direction. Vous avez découvert, en assistant à la troisième réunion, que le comité fonctionne bien et remporte de bons scores dans la poursuite de ses objectifs. Vous n'êtes pas certain d'avoir votre place dans ce groupe et ne savez pas quel rôle vous avez à y jouer. Vous allez...",
                    choices : [
                        {
                            id:357,
                            name:"Assister à la réunion mais laisser le groupe poursuivre son travail comme il l'a fait au cours des deux premières réunions.",
                            categoryId:14,
                        },
                        {
                            id:358,
                            name:"Reprendre la direction du comité et commencer à diriger ses activités.",
                            categoryId:15,
                        },
                        {
                            id:359,
                            name:"Faire ce que vous pouvez pour que le comité se sente important et concerné et soutenir les efforts accomplis.",
                            categoryId:14,
                        },
                        {
                            id:360,
                            name:"Diriger les activités du groupe, mais y intégrer les suggestions des membres du groupe.",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:217,
                    completed:false,
                    text:"Votre équipe est très compétente et en mesure de bien travailler seule. Vous l'avez généralement laissée travailler indépendamment et avez délégué les responsabilités clés à des membres individuels. Leurs performances sont remarquables. Vous allez...",
                    choices : [
                        {
                            id:361,
                            name:"Apporter un soutien permanent et encourager les gens.",
                            categoryId:14,
                        },
                        {
                            id:362,
                            name:"Donner des indications et suivre de près leurs activités.",
                            categoryId:15,
                        },
                        {
                            id:363,
                            name:"Laisser le groupe continuer à travailler indépendamment.",
                            categoryId:14,
                        },
                        {
                            id:364,
                            name:"Diriger leurs efforts mais travailler en étroite collaboration avec eux pour être informé de leurs suggestions.",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:218,
                    completed:false,
                    text:"Vos chefs et vous-même avez décidé qu'il faut introduire une nouvelle procédure dans votre division de manière à permettre une amélioration à long terme de la performance. Dans le passé, lors de l'implémentation de nouvelles procédures, vos gens se montraient enthousiastes à l'idée d'en faire usage, mais n'avaient pas, au départ, les connaissances requises pour les mettre en pratique. Vous allez...",
                    choices : [
                        {
                            id:365,
                            name:"Diriger vous-même l'implémentation de le nouvelle procédure, mais y impliquer le groupe en discutant les autres solutions possibles.",
                            categoryId:14,
                        },
                        {
                            id:366,
                            name:"Reprendre les rênes du groupe au début de l'application de la nouvelle procédure.",
                            categoryId:15,
                        },
                        {
                            id:367,
                            name:"Mêler le groupe aux discussions concernant la nouvelle procédure et stimuler leur coopération et leur implication.",
                            categoryId:14,
                        },
                        {
                            id:368,
                            name:"Laisser formuler et implémenter la nouvelle procédure par le groupe lui-même.",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:219,
                    completed:false,
                    text:"Vous avez récemment été nommé chef de la division. Avec son patron précédent, la division a foncitonné de façon satisfaisante, avec beaucoup de soutien et d'encouragement. Après, que vous ayez repris la division, le groupe semble s'occuper plus d'actvités sociales que l'exécution de sa mission. A présent, les performances sont mauvaises. Vous allez...",
                    choices : [
                        {
                            id:369,
                            name:"Discuter avec le groupe de la faiblesse de leurs performances et les soutenir dans leurs efforts pour prendre des mesures en vue de les améliorer.",
                            categoryId:14,
                        },
                        {
                            id:370,
                            name:"Organiser et mener les mesures correctives nécessaires, tout en demandant l'apport et les suggestions du groupe.",
                            categoryId:15,
                        },
                        {
                            id:371,
                            name:"Faire état du problème et pousser les membres du groupe à prendre leurs propres responsabilités et à agir.",
                            categoryId:14,
                        },
                        {
                            id:372,
                            name:"Définir les tâches, les responsabilités et les résultats, et s'enquérir régulièrement de l'amélioration des performances.",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:220,
                    completed:false,
                    text:"Une de vos collaboratrices hésite à accepter une nouvelle mission. Elle a une expérience limitée dans le domaine où vous voulez la faire travailler. Elle a fourni du bon travail dans d'autres fonctions que vous lui avez confiées. Vous allez...",
                    choices : [
                        {
                            id:373,
                            name:"Lui expliquer ce qu'il y a à faire et comment elle doit le faire, mais aussi écouter ce qu'elle vous dit concernant la raison pour laquelle elle hésite à accepter ce nouveau challenge.",
                            categoryId:14,
                        },
                        {
                            id:374,
                            name:"Lui confier la nouvelle mission et lui faire déterminer elle-même la meilleure manière de l'accomplir.",
                            categoryId:15,
                        },
                        {
                            id:375,
                            name:"L'encourager à essayer d'accepter cette mission et faciliter ses efforts en résolvant ensemble les problèmes.",
                            categoryId:14,
                        },
                        {
                            id:376,
                            name:"Lui expliquer clairement ce qui doit être fait pour mener à bien la mission et exercer un contrôle régulier sur ses prestations.",
                            categoryId:15,
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
