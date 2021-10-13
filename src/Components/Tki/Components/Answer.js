import React, { Component, Fragment} from 'react'
import styled from 'styled-components'
import Context from './Context'
import ReactToPrint from 'react-to-print'
import ToPrint from '../../ToPrint'

const Stick = styled.div`
min-height:5px;
background: green;
height: ${props => props.height}px;
background-color: ${props => props.color};
`;

const ResultStick = styled.div`
padding-top: 10px;
width: ${props => props.count}%;
`;

const StickValue = styled.div `
color : ${props => props.color};
font-family:"Maven Pro Regular";
font-size: 20px;
text-align:center;
`;


    class Answer extends Component {

       constructor(props) {
           super(props)
           this.printRef = React.createRef();
           this.state = {
                message: "Veuillez compléter l'ensemble des questions pour connaître votre score",
                btn : {
                    checked : false,
                    text : "Valider",
                }
           }
           this.handleClick = this.handleClick.bind(this)
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
                        const isCompleted = data.questions.every(element => element.completed === true)
                        //const isCompleted = true
                        const categories = data.categories
                        let message, result, printbutton;

                        //Calcul du ou des plus gros score
                        //const scores = categories.map( c => c.value)
                        //const max = Math.max(...scores)
                        //const maxIndex = categories.findIndex(cat => cat.value === max)
                        //const answer = categories[maxIndex]

                        if(isCompleted)
                        {
                            printbutton =   <ReactToPrint
                            trigger={() => <div className="download-button"><p>Sauvegarder</p></div>}
                            content={() => this.printRef.current} />   

                            message =       
                            <div className="result">
                                <div className="result-graph">
                                    <div className="result-title">Résultats
                                    </div>
                                        <div className="result-data">
                                            { categories.map((element,index) => {
                                                return <ResultStick key={index} count={70/categories.length}>  
                                                    <Stick height={element.value*5} color="#002F47"></Stick>
                                                    {element.text.map((text,index) => {return  <StickValue key={index} color="#002F47">{text}</StickValue>})}
                                                    <StickValue color="#002F47">{element.value}</StickValue>
                                                </ResultStick>
                                                        })}
                                        </div>
                                </div>
                                {/*<div className="result-div">
                                    <div className="result-title">
                                                        {answer.text.map((element,index) => {return <p key={index}>{element + " "}</p>})}
                                    </div>
                                    <div className="result-points">
                                                        {answer.description.map((text,index) => {return <p key={index}>{text}</p>})}
                                    </div>
                                                    </div> */}
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
                    { result =<Fragment> <ToPrint ref={this.printRef} title={data.title}>{message}</ToPrint>{printbutton}</Fragment>  }
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