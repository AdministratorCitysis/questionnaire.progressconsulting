import React, { Component,Fragment} from 'react'
import styled from 'styled-components'
import Context from './Context'
import ReactToPrint from 'react-to-print'
import ToPrint from '../../ToPrint'

const Stick = styled.div`
min-height:35px;
height: ${props => props.height}px;
background-color: ${props => props.color};
font-family : "Maven Pro Regular";
font-size : 30px;
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
                message: "Vul alle vragen in om uw score te kennen",
                stickValue: "",
                stickColor: "green",
                btn : {
                    checked : false,
                    text : "Bevestigen",
                }
           }
           this.handleClick = this.handleClick.bind(this)
       }
       handleOver = (element) => {
            let value
            element.text === "" ? (value = "") : (value = element.text.join(' '))
            this.setState({  stickValue : value ,
                                stickColor : "#002F47"
                            })
        }

       handleClick = (e) => {
        let btn = this.state.btn
        btn.checked = !btn.checked
        btn.checked ? btn.text = "Verberg het resultaat" : btn.text = "Besvestigen"
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
                        let message , result,printbutton;

                        //Calcul du ou des plus gros score
                        //const scores = categories.map( c => c.value)
                        //const max = Math.max(...scores)
                        //const maxIndex = categories.findIndex(cat => cat.value === max)
                        //const answer = categories[maxIndex]

                        if(isCompleted)
                        {
                            printbutton =   <ReactToPrint
                            trigger={() => <div className="download-button"><p>Opslaan</p></div>}
                            content={() => this.printRef.current} />   

                            message =       
                            <div className="result">
                                <div className="result-graph">
                                    <div className="result-title">Resultaten
                                    </div>
                                        <div className="result-data">
                                            { categories.map((element,index) => {
                                                return <ResultStick key={index} count={70/categories.length}>  
                                                    <Stick height={element.value*5} color="#002F47" onMouseOver={()=> this.handleOver(element)}><p>{element.value}</p></Stick>
                                                    {element.text.map((text,index) => {return  <StickValue key={index} color="#002F47">{text}</StickValue>})}
                                                    <StickValue color="#002F47">{element.value}</StickValue>
                                                </ResultStick>
                                                        })}
                                            <StickValueMobile color={this.state.stickColor}>{this.state.stickValue}</StickValueMobile>
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
                        { result =<Fragment>
                            <ToPrint ref={this.printRef} title={data.title}>
                                  {message}
                            </ToPrint>
                            {printbutton}
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