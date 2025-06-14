import React, { Component,Fragment} from 'react'
import styled from 'styled-components'
import Context from './Context'
import ReactToPrint from 'react-to-print'
import ToPrint from '../../ToPrint'

const Stick = styled.div`
min-height:35px;
height: ${props => props.height}px;
width: 75%;
background-color: ${props => props.color};
font-family : "Maven Pro Regular";
font-size : 30px;
align-self: center;
display :flex;
flex-flow : row wrap;
justify-content : center;
align-items : center;
color : #F0F2FF;

:hover {
    color : white;    
}

`;

const ResultStick = styled.div`
padding-top: 10px;
width: ${props => props.count}%;
display : flex;
flex-direction: column;
align-item: center;
justify-content: center;
`;

const StickValue = styled.div `
color : ${props => props.color};
font-family:"Maven Pro Regular";
font-size: 20px;
text-align:center;

@media(max-width: 714px){
display :none;
}
@media  print {
    display : inline-block;
    font-size: 10px;
}
`;

const StickValueMobile = styled.div `
display : none;

@media(max-width: 714px){
    display: flex;
    flex-flow : row wrap;
    justify-content: center;
    align-items: center;
    width  : 100%;
    min-height : 40px;
    margin-top: 20px;
    color : ${props => props.color};
    font-family:"Maven Pro Regular";
    font-size: 30px;
    text-align:center;
    }
@media print {
    display : none;
}
`;


    class Answer extends Component {

       constructor(props) {
           super(props)
           this.printRef = React.createRef();
           this.state = {
                message: "Veuillez compléter l'ensemble des questions pour connaître votre score",
                stickValue: "",
                stickColor: "green",
                btn : {
                    checked : false,
                    text : "Valider",
                }
           }
           this.handleClick = this.handleClick.bind(this)
       }

       handleOver = (element) => {
        let value
        element.text === "" ? (value = "") : (value = element.text.join(' '))
        this.setState({  stickValue : value ,
                            stickColor : "#002F47", 
                        })
    }

       handleClick = (e) => {
        let btn = this.state.btn
        btn.checked = !btn.checked
        btn.checked ? btn.text = "Cacher le résultat" : btn.text = "Valider"
        this.setState(btn)
   }

       
        render(){

            return (
            <Context.Consumer>
                {
                    data =>
                    {
                        let completed = []
                        data.Classements.every(q => completed.push(q.completed))
                        data.Questionnaire[0].questions.every(q => completed.push(q.completed))
                        const isCompleted = completed.every(i => i === true)
                        //const isCompleted = true
                      
                        let message , result,printbutton;

                        //Calcul du ou des plus gros score
                        //const scores = categories.map( c => c.value)
                        //const max = Math.max(...scores)
                        //const maxIndex = categories.findIndex(cat => cat.value === max)
                        //const answer = categories[maxIndex]

                        if(isCompleted)
                        {
                            const categories = data.categories
                            //Regroupement de chaque proposition de chaque suggestion
                            let possibilites = []
                            const suggestions = data.Classements[0].suggestions
                            suggestions.forEach(suggestion => {
                            suggestion.possibilites.forEach(possibilite => possibilites.push(possibilite))
                            });
                            //console.log("possibilites", possibilites)
                            //Addition des points de chaque question à leur catégories associées
                            const questionnaire = data.Questionnaire[0]
                           
                            categories.map(cat => 
                                cat.value = (
                                    questionnaire.questions.filter(question => question.categoryId === cat.id)
                                    .reduce((acc,cur) => ({value: acc.value + cur.value})).value
                                    +
                                    possibilites.filter(possibilite => possibilite.categoryId === cat.id)
                                    .reduce((acc,cur) =>  ({value: acc.value + cur.value})).value    
                                    
                            ))

                            printbutton =   <ReactToPrint
                            trigger={() => <p>Sauvegarder</p>}
                            content={() => this.printRef.current} />   

                            message =       
                            <div className="result">
                                <div className="result-graph">
                                    <div className="result-title">Résultats
                                    </div>
                                    <div className="result-data">
                                            <div className='result-data-column'>
                                                { categories.map((element,index) => {
                                                    return  <ResultStick key={index} count={70/categories.length}>  
                                                                <Stick height={element.value*5} color={element.color}onMouseOver={()=> this.handleOver(element)}><p>{element.value}</p></Stick>
                                                                </ResultStick>
                                                            })
                                                }
                                            </div>
                                            <div className='result-data-column'>
                                                { categories.map((element,index) => {
                                                    return      <ResultStick key={index} count={70/categories.length}>  
                                                                    {element.text.map((text,index) =>
                                                                        {return  <StickValue key={index} color="#002F47">{text}</StickValue>})
                                                                    }
                                                                </ResultStick>
                                                            })
                                                }
                                            </div>
                                            <StickValueMobile color={this.state.stickColor}>{this.state.stickValue}</StickValueMobile>
                                        </div>
                                </div>
                            </div>
                        }
                        else {
                                message =   <div className="answer">
                                            <div className="answer-text">
                                                {this.state.message}
                                            </div>
                                </div>
                            }

                        if(this.state.btn.checked)
                        { result =<Fragment>
                            <ToPrint ref={this.printRef} title={data.title}>
                                  {message}
                            </ToPrint>
                            <div className="download-button">
                                {printbutton}
                            </div>
                        </Fragment>  
                    }
                            else result = null
                        
                        return(
                            <div className="answer-div">
                            {result}
                            <button className="add-button" onClick={this.handleClick} shown={this.state.btn.checked}>{this.state.btn.text}</button>
                        </div>
                        )  
                    }
                }
            </Context.Consumer>
            )
            
            


            

           
        }

    
}
export default Answer