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
                title: "PERSONA PROFIEL",
                description : "Welk woord in elk van de volgende groepen van drie karaktertrekken, beschrijft u het best?",
                instruction : "Antwoord op een eerlijke manier, niet volgens wat sociaal wenselijk is.  Denk ook niet te lang na over de antwoorden, zodat het vanuit de ‘buik’ komt.",
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
                                name:"Efficiënt",
                                value : 2,
                            },
                            {
                                id:32,
                                name:"Dominant",
                                value : 3,
                            },
                            {
                                id:33,
                                name:"Hulpvaardig",
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
                                name:"In staat om zich te doen gelden",
                                value : 3,
                            },
                            {
                                id:35,
                                name:"Rustig",
                                value : 2,
                            },
                            {
                                id:36,
                                name:"tevreden",
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
                                name:"Zwijgzaam",
                                value : 1,
                            },
                            {
                                id:38,
                                name:"Denkt graag eerst goed na",
                                value : 2,
                            },
                            {
                                id:39,
                                name:"Sociaal",
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
                                name:"Joviaal",
                                value : 3,
                            },
                            {
                                id:311,
                                name:"Vriendelijk",
                                value : 2,
                            },
                            {
                                id:312,
                                name:"Neemt zijn/haar verantwoordelijkheid",
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
                                name:"Attent",
                                value : 3,
                            },
                            {
                                id:314,
                                name:"Onderhandelt graag",
                                value : 2,
                            },
                            {
                                id:315,
                                name:"Neemt initiatief",
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
                                name:"Gevoelig",
                                value : 1,
                            },
                            {
                                id:317,
                                name:"Onbuigzaam",
                                value : 3,
                            },
                            {
                                id:318,
                                name:"Bereid tot medewerking",
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
                                name:"Koppig",
                                value : 1,
                            },
                            {
                                id:320,
                                name:"Behoedzaam",
                                value : 2,
                            },
                            {
                                id:321,
                                name:"Extravert",
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
                                name:"Enthousiast",
                                value : 3,
                            },
                            {
                                id:323,
                                name:"Terughoudend",
                                value : 1,
                            },
                            {
                                id:324,
                                name:"Bedachtzaam",
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
                                name:"Eigenzinnig",
                                value : 3,
                            },
                            {
                                id:326,
                                name:"Actief",
                                value : 2,
                            },
                            {
                                id:327,
                                name:"Zeer nauwkeurig",
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
                                name:"Strijdlustig",
                                value : 3,
                            },
                            {
                                id:329,
                                name:"Evenwichtig",
                                value : 2,
                            },
                            {
                                id:330,
                                name:"Inschikkelijk",
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
                                name:"Vrolijk",
                                value : 3,
                            },
                            {
                                id:332,
                                name:"Wil anderen behagen",
                                value : 2,
                            },
                            {
                                id:333,
                                name:"Wilskrachtig",
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
                                name:"Houdt zich aan wat overeengekomen werd",
                                value : 1,
                            },
                            {
                                id:335,
                                name:"Energiek",
                                value : 3,
                            },
                            {
                                id:336,
                                name:"Diplomatisch",
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
                                name:"Gaat gemakkelijk in discussie",
                                value : 3,
                            },
                            {
                                id:338,
                                name:"Nonchalant",
                                value : 2,
                            },
                            {
                                id:339,
                                name:"Past zich gemakkelijk aan",
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
                                name:"Redelijk meegaand",
                                value : 2,
                            },
                            {
                                id:341,
                                name:"Volgzaam - Doet wat men hem/haar vraagt",
                                value : 1,
                            },
                            {
                                id:342,
                                name:"Sturend",
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
                                name:"Georganiseerd",
                                value : 2,
                            },
                            {
                                id:344,
                                name:"Precies",
                                value : 1,
                            },
                            {
                                id:345,
                                name:"Origineel",
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
                                name:"Populair",
                                value : 3,
                            },
                            {
                                id:347,
                                name:"Gedisciplineerd",
                                value : 1,
                            },
                            {
                                id:348,
                                name:"Belezen",
                                value : 2,
                            }
                        ],
                    },
                ],
                answers:[
                    //Y > 16
                    [
                        //X > 16 ==> Jaune
                        {
                            id:1,
                            text:"Geel",
                            color:'#EDE813',
                            primary:"ERKENNING , een referentie zijn",
                            secondary:["Je bent extravert en mensgericht. Je bent enthousiast en je bent gepassioneerd door nieuwe dingen. Je werkt graag samen met anderen en geeft je motivatie aan hen door. Je onderhoudt je netwerk. Je leeft door andermans ogen, je houdt van complimentjes en zorgt voor je uiterlijk. Je hebt de neiging om je taken niet af te maken zodra er een spannend nieuw onderwerp aan de horizon verschijnt."],
                        },
                        //X == 16 ==> Résultat
                        {
                            id:2,
                            text:"Relatie",
                            color: "#FFFFFF",
                            primary:"Jouw resultaat is niet vastgelegd op de horizontale as",
                            secondary:["Toch kan men hieruit eerder een focus op de relationele kant afleiden. De prioriteit is eerder de mens, de groep, de relatie met anderen."],
                        },
                        //X > 16 ==> Vert
                        {
                            id:3,
                            text:"Groen",
                            color:'#009640',
                            primary:"HARMONIE, om aanvaard te zijn",
                            secondary:["Je bent in de eerste plaats op mensen en relaties gericht, en eerder introvert. Je spreekt zacht en warm. Je houdt helemaal niet van conflict of directe kritiek die je kan kwetsen. Je gedraagt je rustig en gematigd. Je kunt echter heftig reageren ondanks dat je de neiging hebt om je emoties te verinnerlijken en in te dammen."],
                           
                        },
                    ],
                    //Y == 16
                    [
                        //X > 16
                        {
                            id:4,
                            text:"Extravert",
                            color: "#FFFFFF",
                            primary:"Jouw resultaat is niet vastgelegd op de verticale as",
                            secondary:["Toch kan men hieruit eerder een focus op terugkerende gevoelens, meningen of redeneringen afleiden"],
                        },
                        //X == 16
                        {
                            id:5,
                            text:"Onbepaald",
                            color: "#FFFFFF",
                            primary:"Jouw resultaat is niet vastgelegd op de verticale, noch de horizontale as",
                            secondary:["Je kunt het opnieuw proberen door een aantal van de antwoorden waarover je misschien geaarzeld hebt, te vervangen."],
                       
                        },
                        //X < 16
                        {
                            id:6,
                            text:"Introvert",
                            color: "#FFFFFF",
                            primary:"Jouw resultaat is niet vastgelegd op de verticale as",
                            secondary:["Toch kan men hieruit een minder zichtbare energie afleiden. Gevoelens, meningen en opinies worden eerder verinnerlijkt."],
                        }
                    ],
                    //Y > 16
                    [
                        //X > 16
                        {
                            id:7,
                            text:"Rood",
                            color:'#E30613',
                            primary:"DOELTREFFENDHEID, kunnen beslissen",
                            secondary:["Je bent actie- en resultaatgericht, en vrij extravert. Je hebt een totaalvisie en doet niet aan detailkwesties. Je wordt gemotiveerd door uitdagingen en komt direct ter zake. Je praat snel en luid. Je bent niet bang om fouten te maken, je neemt snel beslissingen, zelfs met heel weinig kaarten in de hand en hebt geen moeite om eventuele fouten te herkennen."],
                        },
                        //X == 16
                        {
                            id:8,
                            text:"Resultaat",
                            color: "#FFFFFF",
                            primary:"Jouw resultaat is niet vastgelegd op de horizontale as",
                            secondary:["Toch kan men hieruit een focus op taken die moeten afgewerkt worden afleiden, op doelstellingen en op resultaten"],
                        },
                        //X < 16
                        {
                            id:9,
                            text:"Blauw",
                            color:'#045576',
                            primary:"VEILIGHEID, gerustgesteld worden",
                            secondary:["Je bent introvert, taakgericht. Je bent gewetensvol en werkt graag in een rustige omgeving. Je bent een rustig persoon, met oog voor gebreken en tegenstrijdigheden. Je hebt structuur en precisie nodig. Je haat het om fouten te maken. Het feit dat die mogelijkheid erin zit, is al genoeg om je te verlammen. Je moet alle kaarten in je hand hebben om te beslissen, op een methodische manier. Je respecteert de regels en procedures omdat ze betrouwbaarheid garanderen."],
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
