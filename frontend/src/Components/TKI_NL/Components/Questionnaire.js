import React, { Component } from 'react'
import Header from './Header'
import Context from './Context'
import Questions from './Questions'
import Answer from './Answer'

export default class Questionnaire extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             title: "TKI Conflictbeheersing",
             instruction : "In veel gevallen zijn de verklaringen niet echt kenmerkend voor uw gedrag, dus kies de reactie die u het meest waarschijnlijk zou hebben.",
             description : "Stel je voor dat je je in situaties bevindt waarin je aspiraties en verlangens verschillen van die van iemand anders.\nHoe reageert u meestal?\nControleer voor elk tweetal de verklaring die uw eigen houding in dergelijke situaties het beste beschrijft.",
             completed: false,
             categories:[
                {
                    id:11,
                    text: ["Wedijveren"],
                    value:0,
                },
                {
                    id:12,
                    text:["Samenwerken"],
                    value:0,
                },
                {
                    id:13,
                    text:["Compromis"],
                    value:0,
                },
                {
                    id:14,
                    text:["Uit de weg gaan"],
                    value:0,
                },
                {
                    id:15,
                    text:["Toegeven"],
                    value:0,
                },
            ],
             questions : [
                {
                    id:21,
                    completed:false,
                    choices : [
                        {
                            id:31,
                            name:"Ik laat het soms aan anderen over om het probleem op te lossen",
                            categoryId:14,
                        },
                        {
                            id:32,
                            name:"In plaats van onze meningsverschillen te bespreken, probeer ik de punten waar we het over eens zijn te benadrukken...",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:22,
                    completed:false,
                    choices : [
                        {
                            id:33,
                            name:"Ik probeer een compromis te vinden",
                            categoryId:13,
                        },
                        {
                            id:34,
                            name:"Ik probeer al onze zorgen aan te pakken, de zijne en de mijne...",
                            categoryId:12,
                        },
                    ],
                },
                {
                    id:23,
                    completed:false,
                    choices : [
                        {
                            id:35,
                            name:"Ik streef mijn doelen over het algemeen vastberaden na",
                            categoryId:11,
                        },
                        {
                            id:36,
                            name:"Ik probeer de ander gerust te stellen en onze relatie te behouden",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:24,
                    completed:false,
                    choices : [
                        {
                            id:37,
                            name:"Ik probeer een compromis te vinden",
                            categoryId:13,
                        },
                        {
                            id:38,
                            name:"Soms offer ik mijn eigen verlangens op tegenover die van de andere...",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:25,
                    completed:false,
                    choices : [
                        {
                            id:39,
                            name:"Ik zoek systematisch de hulp van de ander om een oplossing te vinden...",
                            categoryId:12,
                        },
                        {
                            id:310,
                            name:"Ik probeer te doen wat ik kan om onnodige spanning te vermijden...",
                            categoryId:14,
                        },
                    ],
                },
                {
                    id:26,
                    completed:false,
                    choices : [
                        {
                            id:311,
                            name:"Ik probeer te voorkomen dat ik problemen veroorzaak...",
                            categoryId:14,
                        },
                        {
                            id:312,
                            name:"Ik probeer mijn punt door te duwen",
                            categoryId:11,
                        },
                    ],
                },
                {
                    id:27,
                    completed:false,
                    choices : [
                        {
                            id:313,
                            name:"Ik probeer het probleem te verdringen om mezelf een afkoelingsperiode te geven...",
                            categoryId:14,
                        },
                        {
                            id:314,
                            name:"Ik geef op sommige punten toe in ruil voor andere concessies",
                            categoryId:13,
                        },
                    ],
                },
                {
                    id:28,
                    completed:false,
                    choices : [
                        {
                            id:315,
                            name:"Ik streef mijn doelen over het algemeen vastberaden na",
                            categoryId:11,
                        },
                        {
                            id:316,
                            name:"Ik probeer onmiddellijk alle vragen te stellen die zich kunnen voordoen...",
                            categoryId:12,
                        },
                    ],
                },
                {
                    id:29,
                    completed:false,
                    choices : [
                        {
                            id:317,
                            name:"Ik vind het niet altijd de moeite waard om me zorgen te maken over de verschillen...",
                            categoryId:14,
                        },
                        {
                            id:318,
                            name:"Ik werk hard om mijn doel te bereiken",
                            categoryId:11,
                        },
                    ],
                },
                {
                    id:210,
                    completed:false,
                    choices : [
                        {
                            id:319,
                            name:"Ik streef mijn doelen vastberaden na",
                            categoryId:11,
                        },
                        {
                            id:320,
                            name:"Ik probeer een compromis te vinden",
                            categoryId:13,
                        },
                    ],
                },
                {
                    id:211,
                    completed:false,
                    choices : [
                        {
                            id:321,
                            name:"Ik probeer onmiddellijk alle vragen te stellen die zich kunnen voordoen",
                            categoryId:12,
                        },
                        {
                            id:322,
                            name:"Ik probeer de ander gerust te stellen en onze relatie te behouden",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:212,
                    completed:false,
                    choices : [
                        {
                            id:323,
                            name:"Ik vermijd soms controversiële standpunten",
                            categoryId:13,
                        },
                        {
                            id:324,
                            name:"Ik zal concessies doen als de andere dat doet",
                            categoryId:14,
                        },
                    ],
                },
                {
                    id:213,
                    completed:false,
                    choices : [
                        {
                            id:325,
                            name:"Ik stel een middenweg voor",
                            categoryId:13,
                        },
                        {
                            id:326,
                            name:"Ik sta erop om mijn ideeën duidelijk te maken",
                            categoryId:11,
                        },
                    ],
                },
                {
                    id:214,
                    completed:false,
                    choices : [
                        {
                            id:327,
                            name:"Ik deel mijn ideeën met de andere en ik vraag naar de zijne/hare",
                            categoryId:12,
                        },
                        {
                            id:328,
                            name:"Ik probeer hem/haar de logica en de voordelen van mijn positie te laten zien",
                            categoryId:11,
                        },
                    ],
                },
                {
                    id:215,
                    completed:false,
                    choices : [
                        {
                            id:329,
                            name:"Ik probeer de ander gerust te stellen en onze relatie te behouden",
                            categoryId:15,
                        },
                        {
                            id:330,
                            name:"Ik probeer te doen wat ik kan om spanning te vermijden",
                            categoryId:14,
                        },
                    ],
                },
                {
                    id:216,
                    completed:false,
                    choices : [
                        {
                            id:331,
                            name:"Ik probeer de andere niet te kwetsen",
                            categoryId:15,
                        },
                        {
                            id:332,
                            name:"Ik probeer de andere persoon te overtuigen van de verdiensten van mijn positie",
                            categoryId:11,
                        },
                    ],
                },
                {
                    id:217,
                    completed:false,
                    choices : [
                        {
                            id:333,
                            name:"Ik streef mijn doelen over het algemeen vastberaden na",
                            categoryId:11,
                        },
                        {
                            id:334,
                            name:"Ik probeer te doen wat ik kan om onnodige spanning te vermijden",
                            categoryId:14,
                        },
                    ],
                },
                {
                    id:218,
                    completed:false,
                    choices : [
                        {
                            id:335,
                            name:"Ik kan de andere zijn standpunt laten houden, als dat hem plezier doet",
                            categoryId:15,
                        },
                        {
                            id:336,
                            name:"Ik zal concessies doen als de andere dat ook doet",
                            categoryId:13,
                        },
                    ],
                },
                {
                    id:219,
                    completed:false,
                    choices : [
                        {
                            id:337,
                            name:"Ik probeer onmiddellijk alle vragen te stellen die zich kunnen voordoen",
                            categoryId:12,
                        },
                        {
                            id:338,
                            name:"Ik probeer het probleem te ontlopen om mezelf een afkoelingsperiode te geven",
                            categoryId:14,
                        },
                    ],
                },
                {
                    id:220,
                    completed:false,
                    choices : [
                        {
                            id:339,
                            name:"Ik zoek een onmiddellijke oplossing voor onze geschillen",
                            categoryId:12,
                        },
                        {
                            id:340,
                            name:"Ik probeer een balans te vinden en wat te geven en te nemen",
                            categoryId:13,
                        },
                    ],
                },
                {
                    id:221,
                    completed:false,
                    choices : [
                        {
                            id:341,
                            name:"Bij het naderen van de onderhandelingen probeer ik rekening te houden met de aspiraties van de andere partij.",
                            categoryId:15,
                        },
                        {
                            id:342,
                            name:"Ik neig nog meestal naar een eenvoudige discussie over het probleem",
                            categoryId:12,
                        },
                    ],
                },
                {
                    id:222,
                    completed:false,
                    choices : [
                        {
                            id:343,
                            name:"Ik probeer een middenweg te vinden tussen de zijne en de mijne...",
                            categoryId:13,
                        },
                        {
                            id:344,
                            name:"Ik laat mijn wensen uitkomen",
                            categoryId:11,
                        },
                    ],
                },
                {
                    id:223,
                    completed:false,
                    choices : [
                        {
                            id:345,
                            name:"Ik probeer vaak al onze aspiraties te bevredigen...",
                            categoryId:12,
                        },
                        {
                            id:346,
                            name:"Ik laat mijn wensen uitkomen",
                            categoryId:14,
                        },
                    ],
                },
                {
                    id:224,
                    completed:false,
                    choices : [
                        {
                            id:347,
                            name:"Als de andere persoon de dingen heel erg ter harte neemt, probeer ik aan hun verlangens tegemoet te komen",
                            categoryId:15,
                        },
                        {
                            id:348,
                            name:"Ik probeer hem/haar tot een compromis te laten komen",
                            categoryId:13,
                        },
                    ],
                },
                {
                    id:225,
                    completed:false,
                    choices : [
                        {
                            id:349,
                            name:"Ik probeer om hem/haar de logica en de voordelen van mijn standpunt aan te tonen",
                            categoryId:11,
                        },
                        {
                            id:350,
                            name:"Bij het aangaan van de onderhandelingen, probeer ik rekening te houden met de aspiraties van de andere partij",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:226,
                    completed:false,
                    choices : [
                        {
                            id:351,
                            name:"Ik stel een middenweg voor",
                            categoryId:13,
                        },
                        {
                            id:352,
                            name:"Ik probeer bijna altijd al aan al onze aspiraties te voldoen",
                            categoryId:12,
                        },
                    ],
                },
                {
                    id:227,
                    completed:false,
                    choices : [
                        {
                            id:353,
                            name:"Ik vermijd soms controversiële standpunten",
                            categoryId:14,
                        },
                        {
                            id:354,
                            name:"Als het de andere gelukkig maakt, kan ik hem zijn posities laten behouden",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:228,
                    completed:false,
                    choices : [
                        {
                            id:355,
                            name:"Ik streef mijn doelen over het algemeen vastberaden na",
                            categoryId:11,
                        },
                        {
                            id:356,
                            name:"Ik zoek meestal elkaars hulp om een oplossing te vinden",
                            categoryId:12,
                        },
                    ],
                },
                {
                    id:229,
                    completed:false,
                    choices : [
                        {
                            id:357,
                            name:"Ik stel een middenweg voor",
                            categoryId:13,
                        },
                        {
                            id:358,
                            name:"Ik vind het niet altijd de moeite waard om me zorgen te maken over de verschillen",
                            categoryId:14,
                        },
                    ],
                },
                {
                    id:230,
                    completed:false,
                    choices : [
                        {
                            id:359,
                            name:"Ik probeer de andere niet te kwetsen",
                            categoryId:15,
                        },
                        {
                            id:360,
                            name:"Ik deel mijn visie op het probleem altijd met de andere persoon zodat we het kunnen oplossen",
                            categoryId:12,
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
                    <Header />
                    <Questions handleclick={this.handleAddPoint} />
                    <Answer questions={this.state.questions} categories={this.state.categories} />
                </div>
        </Context.Provider> 
        )
    }
}
