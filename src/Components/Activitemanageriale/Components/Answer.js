import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import ReactToPrint from 'react-to-print'
import ToPrint from '../../ToPrint'


const Result = styled.div  `
${props => props.shown ? '' : ''}
${props => props.completed ? 'color: white; background-color : #2AA1A9;' : 'color : #002F47 ; background-color: white;'}
`



    class Answer extends Component {

       constructor(props) {
           super(props)
           this.printRef = React.createRef();
           this.state = {
                message: "Veuillez répondre à toutes les questions pour connaître votre score",
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
            const rep = this.props.answers
            const cat = this.props.categorie
            let message, result, printbutton;
            let text = this.state.message


            console.log("Je suis dans render answer")

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

                message =      <Fragment>
                <div className="answer-value">
                    <p className="answer-value-text" >Votre résultat est de :<span>&nbsp;</span></p> 
                    <p className="answer-value-value" >{cat.value}</p>
                </div>
                <div className="answer-text" >
                    {text}
                </div>
                </Fragment>

            }
            else {
                message = <Result className="answer-text" completed={isCompleted}>
                {text}
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
            </Fragment> 
            }
             else result = null


            return(
                    <Result className="answer-div">
                        {result}
                        <button className="add-button" onClick={this.handleClick} shown={this.state.btn.checked}>{this.state.btn.text}</button>
                    </Result>
                )  
        }

    
}
export default Answer