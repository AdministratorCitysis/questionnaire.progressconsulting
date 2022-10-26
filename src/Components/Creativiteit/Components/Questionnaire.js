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
                title: "Vragenlijst over de creatieve stijlen*",
                description : "In hoeverre is elk van de volgende uitspraken op jou van toepassing?",
                asterix: "Gebaseerd op de benadering van Ned Herrmann's breinvoorkeur.",
                completed: false,
                questions:[
                    {
                        id:1,
                        text:"Je kunt goed ideeën combineren en synthetiseren",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:2,
                        text:"Houdt van logische spelletjes",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:3,
                        text:"Je probeert jezelf onder controle te houden om de creatieve oefening niet te beïnvloeden",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:4,
                        text:"Het geheim van een goede creatieve sessie is vaak de kwaliteit van het luisteren",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:5,
                        text:"Je bent verwonderd over creatievelingen en artiesten",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:6,
                        text:"Je denkt dat: creatief zijn betekent veel ideeën genereren om verschillende gebeurtenissen aan te pakken",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:7,
                        text:"Ideeën hebben ligt binnen ieders bereik! Wat telt is hoe je ze implementeert",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:8,
                        text:"Hoe je je voelt in de omgang met anderen helpt je keuzes te maken",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:9,
                        text:"Je kijkt graag naar het grote geheel en verliest je niet in de details",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:10,
                        text:"Nadenken alvorens te handelen",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:11,
                        text:"Je houdt van de uitvoering van nieuwe ideeën binnen een bepaald tijdsbestek",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:12,
                        text:"Je vindt dat achtergrondmuziek of -geluid je helpt om creatief te zijn",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:13,
                        text:"Je bent vertrouwd met abstract en conceptueel denken",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:14,
                        text:"Je gaat met gemak om met getallen",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:15,
                        text:"Er wordt vaak een beroep gedaan op jouw organisatorische vaardigheden",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:16,
                        text:"Het plezier om samen ideeën uit te wisselen primeert soms op het resultaat van de gegenereerde ideeën",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:17,
                        text:"Je verzamelt graag overal je inspiratiebronnen en bent nieuwsgierig naar alles",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:18,
                        text:"Vertrouwd met technische concepten",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:19,
                        text:"Je bent nieuwsgierig naar de verschillende stadia van het creatieve proces",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:20,
                        text:"Het is goed om af en toe overdreven idealistische ideeën te hebben",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:21,
                        text:"Een succesvolle creatieve sessie is bijna als een spel",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:22,
                        text:"Creativiteit moet ook een relevante oplossing bieden voor het onderhavige probleem!",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:23,
                        text:"Je vindt het leuk om alle ideeën op te sommen zonder ze te beoordelen: je moet voorzichtig zijn in het begin",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:24,
                        text:"Jouw enthousiasme schijnt aanstekelijk te zijn",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:25,
                        text:"Je houdt van gedurfde persoonlijkheden",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:26,
                        text:'Samenhangend kunnen redeneren',
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:27,
                        text:'Je houdt van erkende en bewezen creatieve technieken',
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:28,
                        text:"Creatief zijn betekent vaak observeren en zien wat anderen niet zien",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:29,
                        text:"Met creativiteit kan je je de toekomst voorstellen, je houdt van visionaire projecten",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:30,
                        text:"Het is goed om samen creatief te zijn om kritisch denken te ontwikkelen",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:31,
                        text:"Bij een creatieve oefening moet je je niet teveel laten leiden door je emoties",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:32,
                        text:"Je bent een sterke promotor van collectieve intelligentie",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:33,
                        text:"Je lanceert je ideeën graag spontaan: de eerste ideeën zijn vaak de beste",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:34,
                        text:"Je hebt een paar boeken van creativiteitsdeskundigen gelezen om je te inspireren",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:35,
                        text:"Je herinnert graag aan de regels van best practice voordat je aan een creatieve sessie begint",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:36,
                        text:"Je bent niet graag alleen creatief bezig en brainstormt liever in een groep",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:37,
                        text:"Je denkt vaak in beelden en metaforen",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:38,
                        text:"Het helpt je om de dingen sequentieel te bekijken",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:39,
                        text:"Een creatieve sessie moet goed georganiseerd zijn",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:40,
                        text:"Je test je ideeën graag met iemand die je vertrouwt",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                ],
                choices: [
                    {id:1,
                    number:"0",
                    text:"Dat is niet zo voor mi",
                    value:0},
                    {id:2,
                    number:"1",
                    text:"Misschien doe ik dat wel eens",
                    value:1},
                    {id:3,
                    number:"2",
                    text:"Dat doe ik toch wel eens af en toe",
                    value:2},
                    {id:4,
                    number:"3",
                    text:"Dat doe ik vaak",
                    value:3},
                    {id:5,
                    number:"4",
                    text:"Dit ben ik totaal ten voeten uit",
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
                        text:["Interpersoonlijk","communicator"], 
                        color : "#008ED6",
                        description:"Het geheim van een goede creatieve sessie is vaak de kwaliteit van het luisteren. Hoe je je voelt in de omgang met anderen helpt je keuzes te maken. Je vindt dat een achtergrond van geluid of muziek je helpt om creatief te zijn. Het plezier van het samen uitwisselen komt soms vóór het resultaat van de gegenereerde ideeën. Het is goed om af en toe al te idealistische ideeën te hebben. Men zegt dat jouw enthousiasme aanstekelijk werkt. Creatief zijn betekent vaak observeren en zien wat anderen niet zien. Je bent een sterke promotor van collectieve intelligentie. Je bent niet graag alleen creatief bezig en brainstormt liever in groepsverband. Je test je ideeën graag met iemand die je vertrouwt",
                        value:0
                    },
                    {
                        id:2,
                        text:["Pragmatisch","Pionier"],
                        color : "#0076B2",
                        description:"Houdt van logische spelletjes. Creatief zijn betekent veel ideeën genereren om verschillende situaties aan te pakken. Nadenken alvorens te handelen. Getallen met het grootste gemak verwerken. Vertrouwd met technische concepten. Creativiteit moet ook een relevante oplossing bieden voor het gestelde probleem! Samenhangend kunnen redeneren. Het is goed om samen creatief te zijn om kritisch denken te ontwikkelen. Je hebt een aantal boeken van creativiteitsdeskundigen gelezen om je te inspireren. Willen streven naar expertise. De dingen achtereenvolgens beschouwen. Aandacht voor de ontwikkeling van creatieve vaardigheden",
                        value:0
                    },
                    {
                        id:3,
                        text:["Fantasierijk","Visionair"],
                        color : "#005F8E",
                        description:"Je bent goed in het combineren en synthetiseren van ideeën. Je staat versteld van ontwerpers en kunstenaars. Je ziet graag het grote geheel en verliest je niet in de details. Je bent vertrouwd met abstract en conceptueel denken. Je haalt je inspiratie graag overal vandaan en bent nieuwsgierig naar alles. Een succesvolle creatieve sessie is bijna als een spel. Je waardeert gedurfde persoonlijkheden. Met creativiteit kunt u zich de toekomst voorstellen, u houdt van visionaire projecten. Je lanceert je ideeën graag spontaan: de eerste ideeën zijn vaak de beste. Je gelooft dat je intuïtie een goede raadgever is. Je denkt vaak in beelden en metaforen. Je experimenteert graag",
                        value:0
                    },
                    {
                        id:4,
                        text:["Gedetailleerd","Onderzoeker"],
                        color : "#00476B",
                        description:"Je probeert jezelf onder bedwang te houden om de creatieve oefening niet te beïnvloeden. Ideeën hebben ligt binnen ieders bereik! Wat telt is hoe je ze implementeert. Je voert nieuwe ideeën graag uit volgens een nauwkeurig tijdsbestek. Er wordt vaak een beroep gedaan op jouw organisatorische vaardigheden. Je bent nieuwsgierig naar de verschillende stadia van het creatieve proces. Je vindt het leuk om alle ideeën op te sommen zonder ze te beoordelen: je moet voorzichtig zijn in het begin. Je houdt van erkende en bewezen creatieve technieken. Bij een creatieve oefening moet je je niet teveel laten leiden door je emoties. Een creatieve sessie moet goed georganiseerd zijn. Je herinnert graag aan de regels van best practice voordat je aan een creatieve sessie begint",
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
