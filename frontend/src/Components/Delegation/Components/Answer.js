import React, { Component, Fragment} from 'react'
import styled from 'styled-components'
import ReactToPrint from 'react-to-print'
import ToPrint from '../../ToPrint'

const Result = styled.div  `
${props => props.completed ? 'color: white; background-color : #2AA1A9;' : 'color : #002F47 ; background-color: white;'};

`

const ResultText = styled.p `
${props => props.completed ? 'color: white; background-color : #2AA1A9;' : ''}
`
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
            
            const questions = this.props.questions
            const isCompleted = questions.every(questions => questions.completed ===true)
            const score = questions.reduce((acc,question) => acc + parseInt(question.value),0)
            let message,result,printbutton;


            if(isCompleted)
            {
                printbutton =   <ReactToPrint
                trigger={() => <div className="download-button"><p>Sauvegarder</p></div>}
                content={() => this.printRef.current} />   

                message =       <Fragment>
                                <div className="answer-value">
                                    <ResultText className="answer-value-text" completed={isCompleted}>Votre résultat est de : </ResultText>
                                    <ResultText className="answer-value-value" completed={isCompleted}>{  score }</ResultText>
                                </div>
                                <Result className="answer-text text-align-left" completed={isCompleted}>
                                    <p className="text-align-left">Si votre score est égale ou inférieur à:</p>
                                   {this.props.answers.map((ans,index) =>  
                                   <div className="p10">
                                   <p className="text-align-left p10">{ans.maxvalue} : {ans.text}</p>
                                   </div>
                                   )}
                                    
                                </Result>
                                </Fragment>

            }
            else {
                message = <Result className="answer-text">
                                {this.state.message}
                            </Result>
            }

            if(this.state.btn.checked)
            { result = <Fragment>
               <ToPrint ref={this.printRef} title={this.props.title}>
                <Result className="answer" completed={isCompleted} shown={this.state.btn.checked}>
                {message}
                </Result>
                </ToPrint>
                {printbutton}
            </Fragment> }
            else result = null

            return(
                <div className="answer-div">
                {result}
                <button className="add-button" onClick={this.handleClick} shown={this.state.btn.checked}>{this.state.btn.text}</button>
            </div>
                )  
        }

    
}
export default Answer