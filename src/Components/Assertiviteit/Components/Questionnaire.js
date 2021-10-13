import React, { Component } from 'react'
import Header from './Header'
import Context from './Context'
import Questions from './Questions'
import Answer from './Answer'


export default class Questionnaire extends Component {
    
    constructor(props) {
        super(props)
       
        this.state = {
             title: "Assertiviteit",
             instruction : "Beantwoord alle uitspraken om uw resultaat te kennen.",
             description : ["Je antwoordt spontaan door te klikken op Juist of Onjuist bij de uitspraken.","Eerder Juist indien je meestal op die manier handelt.","Eerder onjuist indien je slechts zelden op deze manier handelt."],
             categories:[
                {
                    id:11,
                    text: ["Sub-assertieve houding / onderdanig"],
                    value:0,
                },
                {
                    id:12,
                    text:["Aanvallende houding / agressief"],
                    value:0,
                },
                {
                    id:13,
                    text:["Manipulatieve houding"],
                    value:0,
                },
                {
                    id:14,
                    text:["Assertieve houding"],
                    value:0,
                },
            ],
            questions : [
                {
                    id:21,
                    completed:false,
                    text : "Ik zeg vaak ja als ik eigenlijk nee wil zeggen.",
                    categoryId : 11,
                },
                {
                    id:22,
                    completed:false,
                    text : "Ik verdedig mijn rechten zonder deze van anderen over het hoofd te zien.",
                    categoryId : 14,
                },
                {
                    id:23,
                    completed:false,
                    text : "Ik verberg liever wat ik denk als ik de groep niet ken.",
                    categoryId : 13,
                },
                {
                    id:24,
                    completed:false,
                    text : "Ik ben nogal autoritair en beslist.",
                    categoryId : 12,
                },
                {
                    id:25,
                    completed:false,
                    text : "Ik werk liever met tussenpersonen dan rechtstreeks.",
                    categoryId : 13,
                },
                {
                    id:26,
                    completed:false,
                    text : "Ik deins er niet voor terug kritiek te uiten en de mensen te zeggen wat ik denk.",
                    categoryId : 12,
                },
                {
                    id:27,
                    completed:false,
                    text : "Ik durf niet weigeren wat men mij vraagt.",
                    categoryId : 11,
                },
                {
                    id:28,
                    completed:false,
                    text : 'Ik ben niet bang om mijn opinie te geven ten opzichte van "vijandige"gesprekspartners.',
                    categoryId : 14,
                },
                {
                    id:29,
                    completed:false,
                    text : 'Bij een heftige discussie verkies ik mij op de achtergrond te houden en toe te kijken hoe het verloopt.',
                    categoryId : 13,
                },
                {
                    id:210,
                    completed:false,
                    text : 'Ik ben vaak "tegendraads".',
                    categoryId : 12,
                },
                {
                    id:211,
                    completed:false,
                    text : "Het valt mij moeilijk om naar anderen te luisteren.",
                    categoryId : 12,
                },
                {
                    id:212,
                    completed:false,
                    text : 'Bij een bijeenkomst met vrienden regel ik het zo dat ik vooraf over "roddels"beschik.',
                    categoryId : 13,
                },
                {
                    id:213,
                    completed:false,
                    text : "Ik schenk anderen vertrouwen en domineer ze niet.",
                    categoryId : 14,
                },
                {
                    id:214,
                    completed:false,
                    text : "Ik ben schuchter en ik ben geblokkeerd als men mij aanspreekt.",
                    categoryId : 11,
                },
                {
                    id:215,
                    completed:false,
                    text : "Ik ben erg spraakzaam en ik onderbreek anderen zonder het zelf te beseffen.",
                    categoryId : 12,
                },
                {
                    id:216,
                    completed:false,
                    text : "Als men het niet met me eens is, zoek ik een realistisch compromis op basis van wederzijdse overeenstemmingen.",
                    categoryId : 14,
                },
                {
                    id:217,
                    completed:false,
                    text : "Ik verkies om met open kaarten te spelen.",
                    categoryId : 14,
                },
                {
                    id:218,
                    completed:false,
                    text : "Ik heb de neiging om beslissingen te nemen.",
                    categoryId : 11,
                },
                {
                    id:219,
                    completed:false,
                    text : "Ik volg een raadgeving op.",
                    categoryId : 11,
                },
                {
                    id:220,
                    completed:false,
                    text : "Over het algemeen laat ik zien hoe ik ben zonder mijn gevoelens te verbergen.",
                    categoryId : 14,
                },
                {
                    id:221,
                    completed:false,
                    text : "Ik word zelden van mijn stuk gebracht.",
                    categoryId : 12,
                },
                {
                    id:222,
                    completed:false,
                    text : "Ik trek profijt uit de ruzies van  anderen.",
                    categoryId : 13,
                },
                {
                    id:223,
                    completed:false,
                    text : "Ik ben in staat mezelf te zijn  en tevens aanvaard te blijven.",
                    categoryId : 14,
                },
                {
                    id:224,
                    completed:false,
                    text : 'Als ik niet akkoord ga, durf ik het te zeggen, men luistert naar mij.',
                    categoryId : 14,
                },
                {
                    id:225,
                    completed:false,
                    text : "Ik draag er zorg voor anderen niet lastig te vallen.",
                    categoryId : 11,
                },
                {
                    id:226,
                    completed:false,
                    text : "Ik kan moeilijk een standpunt innemen en kiezen.",
                    categoryId : 11,
                },
                {
                    id:227,
                    completed:false,
                    text : "Ik hou er niet van alleen te staan met mijn opinie.",
                    categoryId : 11,
                },
                {
                    id:228,
                    completed:false,
                    text : "Ik ben niet bang om risicovolle uitdagingen aan te gaan.",
                    categoryId : 12,
                },
                {
                    id:229,
                    completed:false,
                    text : "Conflicten uitlokken is efficiënter dan spanningen verminderen.",
                    categoryId : 13,
                },
                {
                    id:230,
                    completed:false,
                    text : "Ik ben open om anderen zelfvertrouwen te geven.",
                    categoryId : 13,
                },
                {
                    id:231,
                    completed:false,
                    text : "Ik kan luisteren en onderbreek anderen niet.",
                    categoryId : 14,
                },
                {
                    id:232,
                    completed:false,
                    text : "Ik ben niet bang om te verwoorden wat ik voel.",
                    categoryId : 14,
                },
                {
                    id:233,
                    completed:false,
                    text : "Ik kan mensen bij mijn ideeën betrekken en ze er tevens toe overhalen.",
                    categoryId : 13,
                },
                {
                    id:234,
                    completed:false,
                    text : "Ik heb het moeilijk om mijn spreektijd te beperken.",
                    categoryId : 12,
                },
                {
                    id:235,
                    completed:false,
                    text : "Ik kan, als het moet, ironisch zijn.",
                    categoryId : 12,
                },
                {
                    id:236,
                    completed:false,
                    text : "Ik verkies observeren boven deelnemen.",
                    categoryId : 11,
                },
                {
                    id:237,
                    completed:false,
                    text : "Ik hou me vaak op de achtergrond.",
                    categoryId : 11,
                },
                {
                    id:238,
                    completed:false,
                    text : "Ik maak mijn bedoelingen niet te snel bekend.",
                    categoryId : 13,
                },
                {
                    id:239,
                    completed:false,
                    text : "Ik schok mensen door wat ik zeg.",
                    categoryId : 12,
                },
                {
                    id:240,
                    completed:false,
                    text : "Ik speel met de anderen om te bekomen wat ik wil.",
                    categoryId : 13,
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
