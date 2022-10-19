import React, { Component } from 'react'
import Header from './Header'
import Categories from './Categories'

export default class Questionnaire extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            questionnaire :
                {
                    titre: "Tijdsbeheer",
                    answers: [
                        {id:1,
                        number:"--",
                        text:"Volledig ONWAAR",
                        value:-2},
                        {id:2,
                        number:"-",
                        text:"Enigszins ONWAAR",
                        value:-1},
                        {id:3,
                        number:"+",
                        text:"Enigszins WAAR",
                        value:+1},
                        {id:4,
                        number:"++",
                        text:"Helemaal WAAR",
                        value:+2}
    
                    ],
                    reponses : [
                        {
                        maxvalue:0,
                        text:"Je heb veel moeite met je tijdsbeheer. Het is aan jou om te analyseren wat te wijten is aan je werkomgeving en wat aan jezelf te wijten is.",
                        },
                        {
                        maxvalue:60,
                        text:"Je tijdsbeheer is gemiddeld. Je moet je hierin verder ontwikkelen.",
                        },
                        {
                        maxvalue:90,
                        text:"Je ga actief en positief om met je tijd. Goed gedaan! Maar misschien kan je het nog beter... en ga vooral niet op je lauweren rusten, want op dit gebied is niets vanzelfsprekend en gaat alles heel snel achteruit.",
                        },
                    ],
                    categories : [
                        {
                            id:1,
                            name : " ",
                            description: "Antwoord oprecht, spontaan voor uzelf, door een kruisje te zetten in het vakje dat het best overeenstemt met uw gevoel bij elke voorgestelde stelling", 
                            completed:false,
                            value:'',
                            message:"Vul alle vragen in om uw score te kennen",
                            questions : [
                                {
                                id:1,
                                text:"Wanneer ik op mijn werkplek aankom, weet ik welke de eerste 3 uit te voeren taken zijn",  
                                value:'',
                                completed:false
                            },
                                {
                                id:2,
                                text:"Ik vergeet mijn afspraken niet af te zeggen",  
                                value:'',
                                completed:false
                            },
                                {
                                id:3,
                                text:"De analyse van de manier waarop ik mijn tijd beheer heeft me ertoe gebracht een aantal van mijn gedragingen te veranderen",  
                                value:'',
                                completed:false
                            },
                                {
                                id:4,
                                text:"Ik besteed voldoende tijd aan mijn vrije tijd en gezinsleven",  
                                value:'' ,
                                completed:false   
                            },
                                {
                                id:5,
                                text:"Ik heb mijn eigen methodes om tijd te besparen",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:6,
                                text:"In een vergadering of in een professioneel gesprek, vergeet ik de tijdsvariabele niet",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:7,
                                text:"Ik heb tijd om mezelf te informeren en te trainen",    
                                value:'',
                                completed:false
                            },    
                            {
                                id:8,
                                text:"Ik slaag erin me buiten mijn werkuren los te koppelen van mijn professionele beslommeringen",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:9,
                                text:"Ik ken mijn verlangens en motivaties",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:10,
                                text:"Ik kan me concentreren op belangrijke taken zonder onderbroken te worden",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:11,
                                text:"Ik weet waar mijn tijd naartoe gaat",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:12,
                                text:"Ik denk elke dag een paar minuten na over hoe ik mijn prioriteiten kan organiseren",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:13,
                                text:"Ik praat met mijn collega's over hoe ieder van hen zijn tijd indeelt",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:14,
                                text:"Ik krijg genoeg slaap",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:15,
                                text:"Ik houd rekening met mijn persoonlijke ritmes bij het organiseren van mijn werk",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:16,
                                text:"Ik stel persoonlijke en professionele doelen op korte en middellange termijn",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:17,
                                text:"Ik doorbreek van tijd tot tijd mijn gewoontes en routines",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:18,
                                text:"Ik zorg ervoor om stress te beperken",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:19,
                                text:"Ik maak altijd af wat ik van plan was te doen",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:20,
                                text:"Ik maak tijd voor mezelf, om te doen wat ik leuk vind",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:21,
                                text:"Ik onderhandel over bepaalde prioriteiten met mijn baas",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:22,
                                text:"Ik heb weinig onverwachte gebeurtenissen gedurende de dag",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:23,
                                text:"Ik ken te allen tijde alle taken en activiteiten die ik moet uitvoeren",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:24,
                                text:"Ik ken mijn zwakheden en ik hou er rekening mee",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:25,
                                text:"Ik ken de werkgebieden waar ik veel tijd doorbreng en die waar ik juist weinig tijd doorbreng",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:26,
                                text:"Ik ken mijn tijdrovers",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:27,
                                text:"Ik kan wat belangrijk is onderscheiden van wat bijzaak is",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:28,
                                text:"Ik voel me meestal fit",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:29,
                                text:"Ik weet hoe ik nee moet zeggen en bepaalde verzoeken moet weigeren",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:30,
                                text:"Ik weet van tevoren hoeveel tijd een activiteit me kost",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:31,
                                text:"Ik wissel af tussen mijn verschillende activiteiten en tussen reflectie en actie",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:32,
                                text:"Ik gebruik één agenda voor mijn eigen en persoonlijke activiteiten",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:33,
                                text:"Ik behandel nooit meerdere dingen tegelijk",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:34,
                                text:"Het gebeurt zelden dat ik onder druk en deadline werk",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:35,
                                text:"Ongeacht het type afspraak of vergadering, ik vind altijd tijd om het voor te bereiden",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:36,
                                text:"Ik kom steeds op tijd voor afspraken",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:37,
                                text:"Ik ben niet altijd beschikbaar",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:38,
                                text:"Ik weet hoe ik moet uitstellen wat niet de prioriteit van het moment is",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:39,
                                text:"Ik heb methoden ontwikkeld om mijn reistijd en verplaatsingen te beperken of te gebruiken",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:40,
                                text:"Ik aarzel niet om een onnodig lange vergadering af te breken",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:41,
                                text:"Ik filter steeds mijn telefoongesprekken",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:42,
                                text:"Ik heb voldoende tijd voor mijn professionele lectuur",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:43,
                                text:"Ik heb mijn archiveringssysteem aangepast aan mijn functie",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:44,
                                text:"Ik actualiseer regelmatig mijn doelstellingen en werkmethoden",  
                                value:'',
                                completed:false    
                            },
                                {
                                id:45,
                                text:"Ik heb tijd om anderen te informeren en op te leiden",  
                                value:'',
                                completed:false    
                            },
                                
                            ],
                            
                        },
                    ],  
                },
        }
    }

  

    SetQuestionCompleted=(question)=>{
        let newcategorie = this.state.questionnaire.categories[0]
        let newquestions = newcategorie.questions
        const questionIndex = newquestions.findIndex(element => element.id === question.id)
        newquestions[questionIndex].completed = true
        newquestions[questionIndex].value = question.value
        newcategorie.questions = newquestions
        newcategorie.completed = newquestions.every(question => question.completed === true)
        let newquestionnaire = this.state.questionnaire
        newquestionnaire.categories[0] = newcategorie
        this.setState({questionnaire:newquestionnaire})
        //const answer = this.state.questionnaire.answers.find(element => element.value === parseInt(newquestions[questionIndex].value))
    }

    SetCategorieValue = (data) => {
        this.setState(state => 
            state.questionnaire.categories.map(
            cat => {if(cat.id === data.id)
                        {
                            cat.value = parseInt(data.value)
                        }
                        return true
                    }
            
        ))
    }
    
    render() {

        return (
            <div className="survey" >
                <Header questionnaire={this.state.questionnaire} />
               <Categories data={this.state.questionnaire} setcategorievalue={this.SetCategorieValue} setquestioncompleted={this.SetQuestionCompleted} />
            </div>
        )
    }
}
