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
                title: "Vragenlijst 'drivers'",
                description : "Beantwoord de 50 vragen en druk het tabblad Histogram af",
                completed: false,
                questions:[
                    {
                        id:1,
                        text:"Het voelt alsof ik steeds tegen de klok vecht…",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:2,
                        text:"Ik denk dat de inspanning belangrijker is dan het resultaat.",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:3,
                        text:"Ik denk dat ik in het leven voor mezelf moet zorgen",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:4,
                        text:"Om een taak te beginnen, heb ik alle informatie nodig",
                        value:0,
                        categoryId:5,
                        completed:false,
                    },
                    {
                        id:5,
                        text:"Het is belangrijk dat anderen mij goed gezind zijn",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:6,
                        text:"Stress geeft me een boost",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:7,
                        text:"Ik ben altijd bang dat ik het niet aankan",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:8,
                        text:"Ik ben erg veeleisend voor mezelf en anderen",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:9,
                        text:"Om tevreden te zijn, moet ik uitblinken",
                        value:0,
                        categoryId:5,
                        completed:false,
                    },
                    {
                        id:10,
                        text:"Om geliefd te zijn, lever ik een beter dan gemiddelde dienst",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:11,
                        text:"Ik kan niet delegeren want anderen zijn te traag",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:12,
                        text:"Ik steek veel energie in dingen doen",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:13,
                        text:"Ik uit mijn emoties niet",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:14,
                        text:"Om effectief te zijn, moet mijn taak perfect zijn",
                        value:0,
                        categoryId:5,
                        completed:false,
                    },
                    {
                        id:15,
                        text:"Voor mijn baas ben ik beschikbaar, zelfs thuis",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:16,
                        text:"Ik praat snel",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:17,
                        text:"Ik heb een gevoel van onderdrukking en de angst om te exploderen als ik me laat gaan",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:18,
                        text:"Ik verricht graag nobele taken",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:19,
                        text:"Feiten, cijfers en logica - dat zijn de echte waarden",
                        value:0,
                        categoryId:5,
                        completed:false,
                    },
                    {
                        id:20,
                        text:"Je moet de mensen vertellen wat ze willen horen",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:21,
                        text:"Ik heb zin om mensen te onderbreken om hun zinnen af te maken",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:22,
                        text:"Ik voel me al lang verantwoordelijk voor wat er met anderen gebeurt",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:23,
                        text:"Intellectuele uitwisseling is waar ik me goed bij voel",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:24,
                        text:"Nauwkeurigheid ten koste van alles is de prijs van mijn imago",
                        value:0,
                        categoryId:5,
                        completed:false,
                    },
                    {
                        id:25,
                        text:"Ik weet graag dat een collega me nodig heeft",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:26,
                        text:'Ik zeg vaak "Laten we opschieten... ja... ja .... En dan?"',
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:27,
                        text:'Anderen zeggen vaak over mij dat ik loop te klagen',
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:28,
                        text:"Ik hou van dingen die logica gebruiken",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:29,
                        text:"Ik moet de indruk wekken dat ik alles weet",
                        value:0,
                        categoryId:5,
                        completed:false,
                    },
                    {
                        id:30,
                        text:"Je moet jezelf in vier kunnen delen",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:31,
                        text:"Ik loop meestal te ijsberen als ik ergens op wacht",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:32,
                        text:"Mensen komen naar me toe zonder dat ik het vraag, omdat ze me aardig vinden",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:33,
                        text:"Ik vind het moeilijk om te vertrouwen en me over te geven",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:34,
                        text:"Voor mij is een bezwaar een teken van mijn onbekwaamheid",
                        value:0,
                        categoryId:5,
                        completed:false,
                    },
                    {
                        id:35,
                        text:"Ik hou ervan om anderen te helpen",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:36,
                        text:"Ik tik vaak met mijn vingers of voeten",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:37,
                        text:"Ik creëer verwarrende situaties waarin ik me dom en machteloos voel",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:38,
                        text:"Het maakt me veel uit hoe anderen me beoordelen op wat ik doe",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:39,
                        text:"Ik ben ervan overtuigd dat ik de beste ben",
                        value:0,
                        categoryId:5,
                        completed:false,
                    },
                    {
                        id:40,
                        text:"Ik kan geen nee zeggen",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:41,
                        text:"Ik ga te snel, waardoor ik onzorgvuldige fouten maak",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:42,
                        text:"Zoveel moeite om al deze vragen te beantwoorden!",
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:43,
                        text:"Ik voel me veilig als ik niet emotioneel betrokken ben",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:44,
                        text:"Zolang een taak niet is voltooid zoals ik had verwacht, begin ik opnieuw",
                        value:0,
                        categoryId:5,
                        completed:false,
                    },
                    {
                        id:45,
                        text:"Ik speel graag de rol van vertrouwenspersoon",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:46,
                        text:"Ik kan niet stil blijven zitten en als het nodig is doe ik meerdere dingen tegelijk",
                        value:0,
                        categoryId:4,
                        completed:false,
                    },
                    {
                        id:47,
                        text:'Mijn moeder zei altijd tegen me: "Met een beetje meer moeite zou je..."',
                        value:0,
                        categoryId:3,
                        completed:false,
                    },
                    {
                        id:48,
                        text:"In een taak met meerdere personen hou ik er niet van als de timing en het doel niet gerespecteerd worden en dat er wordt uitgeweid",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:49,
                        text:"Ik verwacht dat mijn medewerkers precies doen wat ik ze opdraag",
                        value:0,
                        categoryId:5,
                        completed:false,
                    },
                    {
                        id:50,
                        text:"Bij het beantwoorden van deze vragen vraag ik me af of de antwoorden overeenkomen met wat van mij verwacht wordt",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                ],
                choices: [
                    {id:1,
                    number:"0",
                    text:"Dat is niet zo voor mij",
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
                    text:"Je hebt het moeilijk om je tijd te beheren. Het is aan jou om te analyseren wat het gevolg is van je werkomgeving en wat aan jezelf ligt.",
                    },
                    {
                    maxvalue:60,
                    text:"Gemiddeld tijdsbeheer. Je moet hierin nog verbeteren.",
                    },
                    {
                    maxvalue:90,
                    text:"Je beheert je tijd op een actieve en positieve manier. Goed bezig! Maar misschien kan het nog beter... en rust vooral niet op je lauweren, want op dit gebied is niets vanzelfsprekend en gaat alles heel snel achteruit.",
                    },
                ],
                categories:[
                    {
                        id:1,
                        text:"Wees sterk",
                        value:0
                    },
                    {
                        id:2,
                        text:"Doe plezier",
                        value:0
                    },
                    {
                        id:3,
                        text:"Doe inspanningen",
                        value:0
                    },
                    {
                        id:4,
                        text:"Wees snel",
                        value:0
                    },
                    {
                        id:5,
                        text:"Wees volmaakt",
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
