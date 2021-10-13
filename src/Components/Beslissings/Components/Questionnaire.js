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
                title: "Beslissingsvragenlijst",
                description : "Laat zien hoe vaak elk van de volgende zaken voor u van toepassing zijn, door het nummer dat u denkt dat bij u past, aan te duiden ",
                questions:[
                    {
                        id:1,
                        text:"Hou je van beslissingen nemen?",
                        value:0,
                        categoryId:1,
                        reverted: false,
                        completed:false,
                    },
                    {
                        id:2,
                        text:"Vertrouw je op je buikgevoel bij het nemen van beslissingen?",
                        value:0,
                        categoryId:2,
                        reverted: false,
                        completed:false,
                    },
                    {
                        id:3,
                        text:"Overleg je graag met anderen vooraleer je beslist?",
                        value:0,
                        categoryId:3,
                        reverted: true,
                        completed:false,
                    },
                    {
                        id:4,
                        text:"Blijf je bij je beslissingen, wat er ook gebeurt?",
                        value:0,
                        categoryId:2,
                        reverted:false,
                        completed:false,
                    },
                    {
                        id:5,
                        text:"Wanneer je 1 optie vindt die het maar net doet, laat je het dan bij die ene optie?",
                        value:0,
                        categoryId:4,
                        reverted: true,
                        completed:false,
                    },
                    {
                        id:6,
                        text:"Blijf je rustig als je heel snel beslissingen moet nemen?",
                        value:0,
                        categoryId:1,
                        reverted:false,
                        completed:false,
                    },
                    {
                        id:7,
                        text:"Heb je het gevoel dat je de dingen onder controle hebt?",
                        value:0,
                        categoryId:1,
                        reverted:false,
                        completed:false,
                    },
                    {
                        id:8,
                        text:"Hoe vaak wordt jouw beslissing bepaald door jouw idealen, ongeacht de praktische moeilijkheden?",
                        value:0,
                        categoryId:5,
                        reverted: false,
                        completed:false,
                    },
                    {
                        id:9,
                        text:"Neem je beslissingen zonder rekening te houden met alle mogelijke implicaties?",
                        value:0,
                        categoryId:6,
                        reverted:true,
                        completed:false,
                    },
                    {
                        id:10,
                        text:"Verander je van gedachten over dingen?",
                        value:0,
                        categoryId:7,
                        reverted:false,
                        completed:false,
                    },
                    {
                        id:11,
                        text:"Neem je de veilige optie als die er is?",
                        value:0,
                        categoryId:7,
                        reverted: false,
                        completed:false,
                    },
                    {
                        id:12,
                        text:"Vermijd je liever beslissingen te nemen als je dat kan?",
                        value:0,
                        categoryId:1,
                        reverted:true,
                        completed:false,
                    },
                    {
                        id:13,
                        text:"Plan je goed vooruit?",
                        value:0,
                        categoryId:6,
                        reverted:false,
                        completed:false,
                    },
                    {
                        id:14,
                        text:"Als je beslissingen neemt, geef je dan eerst de voorkeur aan de ene optie en switch je uiteindelijk naar de andere?",
                        value:0,
                        categoryId:7,
                        reverted:false,
                        completed:false,
                    },
                    {
                        id:15,
                        text:"Blijf je zoeken naar beter, zelfs als je een handelswijze hebt gevonden die zo goed als OK is?",
                        value:0,
                        categoryId:4,
                        reverted:false,
                        completed:false,
                    },
                    {
                        id:16,
                        text:"Vind je het moeilijk om helder te denken als je in alle haast iets moet beslissen?",
                        value:0,
                        categoryId:1,
                        reverted:true,
                        completed:false,
                    },
                    {
                        id:17,
                        text:"Ga je door met je eigen ideeën, zelfs als anderen daar anders over denken?",
                        value:0,
                        categoryId:3,
                        reverted: false,
                        completed:false,
                    },
                    {
                        id:18,
                        text:"Vermijd je advies in te winnen over een beslissing?",
                        value:0,
                        categoryId:3,
                        reverted:false,
                        completed:false,
                    },
                    {
                        id:19,
                        text:"Werk je alle ‘voor’ en ‘tegen’s uit vooraleer je een beslissing neemt?",
                        value:0,
                        categoryId:6,
                        reverted:false,
                        completed:false,
                    },
                    {
                        id:20,
                        text:"Hoe vaak zijn in jouw besluitvormingsproces praktische zaken belangrijker dan principes?",
                        value:0,
                        categoryId:5,
                        reverted: true,
                        completed:false,
                    },
                    {
                        id:21,
                        text:"Is jouw besluitvorming een weloverwogen logisch proces?",
                        value:0,
                        categoryId:6,
                        reverted:false,
                        completed:false,
                    },
                ],
                choices:{
                    values: [1.666666666666667,3.333333333333333,5,6.666666666666667,8.333333333333333,10],
                    list:[
                        {id:1,
                        number:"1",
                        text:"zeer zelden of nooit",
                        },
                        {id:2,
                        number:"2",
                        text:"zelden",
                        },
                        {id:3,
                        number:"3",
                        text:"niet zo vaak",
                        },
                        {id:4,
                        number:"4",
                        text:"redelijk vaak",
                        },
                        {id:5,
                        number:"5",
                        text:"vaak",
                        },
                        {id:6,
                        number:"6",
                        text:"zeer vaak of altijd",
                        },
                    ],
                },
                answers : [                   
                ],
                categories:[
                    {
                        id:1,
                        text:["Controle"],
                        value:0,
                    },
                    {
                        id:2,
                        text:["Instinctiviteit"],
                        value:0,
                    },
                    {
                        id:3,
                        text:["Sociale weerstand"],
                        value:0,
                    },
                    {
                        id:4,
                        text:["Optimaliseren"],
                        value:0,
                    },
                    {
                        id:5,
                        text:["Principeel"],
                        value:0,
                    },
                    {
                        id:6,
                        text:["Gedegenheid"],
                        value:0,
                    },
                    {
                        id:7,
                        text:["Twijfelen"],
                        value:0,
                    },
                ]



            }
       }

       this.handleValue = this.handleValue.bind(this)
   }
   
   handleValue = (props) => {
    let questionnaire = this.state.questionnaire
    let questions = questionnaire.questions
    const Index = questions.findIndex(question => question.id === props.id)
    questions[Index] = props
    questionnaire.questions = questions
    //Calcul categories values
    let categories = questionnaire.categories
    categories.map(cat => 
        cat.value = (
            questions.filter(question => question.categoryId === cat.id)
            .reduce((acc,cur) => ({value: acc.value + cur.value})).value
            /questions.filter(question => question.categoryId === cat.id).length).toFixed(2)
    )
    questionnaire.categories = categories
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
