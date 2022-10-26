import React, { Component, Fragment} from 'react'
import styled from 'styled-components'
import Context from './Context'
import ReactToPrint from 'react-to-print'
import ToPrint from '../../ToPrint'

const Result = styled.div  `
width : 100%;
${props => props.completed ? 'color: white; background-color : #2AA1A9;' : 'color : #002F47 ; background-color: white;'}
`

const Stick = styled.div`
min-height:5px;
background: green;
height: ${props => props.height}px;
width: 75%;
background-color: ${props => props.color};
align-self: center;
margin-bottom: 1vh;
display: flex;
flex-direction: column;
justify-content: end;
align-item: center;
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
`;

const StickPoint = styled.div `
color : ${props => props.color};
font-family:"Maven Pro Regular";
font-size: 25px;
text-align:center;
font-weight: bold;
padding-bottom: 10px;
`;


    class Answer extends Component {

       constructor(props) {
           super(props)
           this.printRef = React.createRef();
           this.state = {
                message: "Vul alle vragen in om uw score te kennen",
                btn : {
                    checked : false,
                    text : "Valideren",
                }
           }
           this.handleClick = this.handleClick.bind(this)
       }
        
       handleClick = (e) => {
        let btn = this.state.btn
        btn.checked = !btn.checked
        btn.checked ? btn.text = "Het resultaat verbergen" : btn.text = "Valideren"
        this.setState(btn)
   }
       
        render(){
            return (
            <Context.Consumer>
                {
                    data =>
                    {
                        const isCompleted = data.completed
                        //const isCompleted = true
                        const categories = data.categories
                        let message, result,printbutton;

                        if(isCompleted)
                        {
                            printbutton =   <ReactToPrint
                            trigger={() => <p>Bewaren</p>}
                            content={() => this.printRef.current} />   

                            message =       
                            <div className="result">
                                <div className="result-graph">
                                    <div className="result-title">Resultaten
                                    </div>
                                        <div className="result-data">
                                            <div className='result-data-column'>
                                                { categories.map((element,index) => {
                                                        return  <ResultStick key={index} count={70/categories.length}>  
                                                                    <Stick height={element.value*10-element.value*2} color="#002F47">
                                                                        <StickPoint color="#FFFFFF">{element.value}</StickPoint>
                                                                    </Stick>
                                                                </ResultStick>
                                                                })
                                                }
                                            </div>
                                            <div className='result-data-column'>   
                                                { categories.map((element,index) => {
                                                    return  <ResultStick key={index} count={70/categories.length}>  
                                                                <StickValue color="#002F47">{element.text}</StickValue>
                                                            </ResultStick>
                                                            })
                                                }
                                            </div>
                                        </div>
                                </div>
                            </div>
                        }
                        else {
                                message =   <Result className="answer" completed={isCompleted}>
                                            <Result className="answer-text" completed={isCompleted}>
                                                {this.state.message}
                                            </Result>
                                </Result>
                            }

                            if(this.state.btn.checked)
                            { result = <Fragment>     
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