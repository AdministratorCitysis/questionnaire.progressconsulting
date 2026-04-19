import React, { Component, Fragment} from 'react'
import styled from 'styled-components'
import Context from './Context'
import ReactToPrint from 'react-to-print'
import ToPrint from '../../ToPrint'

const Stick = styled.div`
min-height:5px;
height: ${props => props.height}px;
background-color: ${props => props.color};
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


    class Answer extends Component {

       constructor(props) {
           super(props)
           this.printRef = React.createRef();
           this.state = {
                message: "Please complete all the questions to know your score",
                btn : {
                    checked : false,
                    text : "Validate",
                }
           }
           this.handleClick = this.handleClick.bind(this)
       }
       
       handleClick = (e) => {
        let btn = this.state.btn
        btn.checked = !btn.checked
        btn.checked ? btn.text = "Hide result" : btn.text = "Validate"
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
                            trigger={() => <p>Save</p>}
                            content={() => this.printRef.current} />   

                            message =       
                            <div className="result">
                                <div className="result-graph">
                                    <div className="result-title">Answers
                                    </div>
                                    <div className="result-data">
                                            <div className='result-data-column'>
                                                { categories.map((element,index) => {
                                                    return  <ResultStick key={index} count={70/categories.length}>  
                                                                <Stick height={element.value*15} color="#002F47"><p>{element.value}</p></Stick>
                                                            </ResultStick>
                                                            })}
                                            </div>
                                            <div className='result-data-column'>
                                                { categories.map((element,index) => {
                                                    return  <ResultStick key={index} count={70/categories.length}>  
                                                                {element.text.map((text,index) => {return  <StickValue key={index} color="#002F47">{text}</StickValue>})}
                                                            </ResultStick>
                                                            })}
                                            </div>
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
                            { result =  <Fragment> 
                                <ToPrint ref={this.printRef} title={data.title}>
                                    {message}
                                </ToPrint>
                                <div className="download-button">
                                    {printbutton}
                                </div>
                            </Fragment>  }
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