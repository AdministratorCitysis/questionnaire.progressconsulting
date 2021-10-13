import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import ReactToPrint from 'react-to-print'
import ToPrint from '../../ToPrint'


const Result = styled.div  `
width : 90%;
${props => props.completed ? 'color: white; background-color : #2AA1A9;' : 'color : #002F47 ; background-color: white;'}

`

const ResultText = styled.p `
${props => props.completed ? 'color: white; background-color : #2AA1A9;' : ''}
`

/*const Bouton = styled.button`
transition : visibility 0s 1s, opacity 1s linear;
${props => props.shown ? ' visibility : hidden; opacity : 0;' : 'visibility : visible; opacity : 1;'}
`*/
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

            const isCompleted = this.props.categorie.completed
            //const isCompleted = true
            const rep = this.props.answers
            const cat = this.props.categorie
            let result,printbutton
            let message;
            let text = this.state.message


            if(isCompleted)
            {
                printbutton =   <ReactToPrint
                trigger={() => <div className="download-button"><p>Sauvegarder</p></div>}
                content={() => this.printRef.current} />   

                for(let i=0;i<rep.length;i++)
                {  
                    if(parseInt(cat.value) <= parseInt(rep[i].maxvalue)) {
                        text =  rep[i].text
                        break
                    }  
                }

                message =       <Fragment>
                <div className="answer-value">
                    <ResultText className="answer-value-text"  completed={isCompleted}>Votre résultat est de :<span>&nbsp;</span></ResultText> 
                    <ResultText className="answer-value-value"  completed={isCompleted}>{cat.value}</ResultText>
                </div>
                <Result className="answer-text" completed={isCompleted}>
                    {text}
                </Result>
                </Fragment>

            }
            else {
                message = <Result className="answer-text">
                                    {text}
                            </Result>
            }

            if(this.state.btn.checked)
           { result =  <Fragment>
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