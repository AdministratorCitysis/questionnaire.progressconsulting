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
                title: "Hoe pakt u delegeren aan ?",
                description : "Bepaal uw aanpak van delegeren",
                questions:[
                    {
                        id:1,
                        text:"Men kan alles delegeren",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:2,
                        text:"Het is moeilijk om iemand te vinden aan wie men kan delegeren, want de meeste mensen nemen hun verantwoordelijkheid niet op",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:3,
                        text:"Delegeren is een deel van zijn macht en verantwoordelijkheden afstaan aan een medewerker",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:4,
                        text:"Het is niet meer dan billijk om de minst motiverende activiteiten met voorrang te delegeren",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:5,
                        text:"Delegeren veronderstelt een klimaat van vertrouwen tussen de chef en de medewerker",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:6,
                        text:"Elk delegeren houdt een controle in",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:7,
                        text:"Delegeren leidt vaak tot laksheid en tot verminderde verantwoordelijkheidszin",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:8,
                        text:"Delegeren is nooit definitief",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:9,
                        text:"Soms moet je weten hoe je delegeren oplegt aan onwillige medewerkers",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:10,
                        text:"Een medewerker kan een gedelegeerde taak weigeren aan te nemen",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:11,
                        text:"Delegeren houdt in dat dat een medewerker het recht heeft op fouten maken",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:12,
                        text:"Delegeren is meestal onnuttig, want waarom iemand anders iets laten doen waar jij goed in bent of wat jij veel sneller kan?",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:13,
                        text:"De begunstigde van een delegatie controleert zelf de taak en het resultaat",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:14,
                        text:"Het begrip controle is in strijd met de geest van de delegatieaanpak",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:15,
                        text:"De procedures en de frequentie van de controles worden bij de aanvang van het delegeren vastgesteld en aangekondigd",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:16,
                        text:"Delegeren laat aan de hiërarchische verantwoordelijke toe om zijn/haar tijd beter te beheren",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:17,
                        text:"De verantwoordelijke die teveel delegeert riskeert om op een dag vast te stellen … dat hij/zij niet veel meer te doen heeft",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                    {
                        id:18,
                        text:"In geval van ernstige onvoorziene omstandigheden in het kader van een delegatie stelt de medewerker de leidinggevende ervan op de hoogte ",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:19,
                        text:"Bij het delegeren dient de verantwoordelijke niet tussen te komen, tenzij bij de controleprocedures die vooraf voorzien werden of indien dit door de medewerker zelf gevraagd werd",
                        value:0,
                        categoryId:1,
                        completed:false,
                    },
                    {
                        id:20,
                        text:"Delegeren gebeurt in de praktijk vooral bij afwezigheid van een verantwoordelijke.",
                        value:0,
                        categoryId:2,
                        completed:false,
                    },
                ],
                choices: [
                    {id:1,
                    number:"--",
                    text:"Helemaal niet mee eens",
                    value:0},
                    {id:2,
                    number:"-",
                    text:"Niet mee eens",
                    value:0},
                    {id:3,
                    number:"+",
                    text:"Mee eens",
                    value:0},
                    {id:4,
                    number:"++",
                    text:"Helemaal mee eens",
                    value:0}
                ],
                answers : [
                    {
                    maxvalue:30,
                    text:"U hebt waarschijnlijk moeite met de delegatie en de groepssessie zou u moeten helpen om de dingen duidelijker te zien.",
                    },
                    {
                    maxvalue:60,
                    text:"U delegeert al regelmatig, maar er is waarschijnlijk nog vooruitgang mogelijk in deze tool zodat u uw teams kan motiveren en prioriteiten voor uzelf kan beheren.",
                    },
                    {
                    maxvalue:80,
                    text:"U bent een kampioen van de delegatie! We kijken uit naar het delen van uw ervaring tijdens de groepssessie.",
                    },
                ],
                categories:[
                    {
                        id:1,
                        text:"positive",
                        values:[1,2,3,4]
                    },
                    {
                        id:2,
                        text:"negative",
                        values:[4,3,2,1]
                    },
                ]



            }
       }

       this.handleValue = this.handleValue.bind(this)
   }
   
   handleValue = (props) => {
    const questionnaire = this.state.questionnaire
    const questions = questionnaire.questions
    const Index = questions.findIndex(question => question.id === props.id)
    questions[Index] = props
    questionnaire.questions = questions
    this.setState({questionnaire:questionnaire})

   }
   
    render() {
        return (
            <Context.Provider value={this.state.questionnaire} className="survey" >
                <Header questionnaire={this.state.questionnaire}/>
                <Questions questions={this.state.questionnaire.questions} description={this.state.questionnaire.description} handlevalue={this.handleValue} />
                <Answer questions={this.state.questionnaire.questions} answers={this.state.questionnaire.answers} title={this.state.questionnaire.title}/>
            </Context.Provider> 
        )
    }
}
