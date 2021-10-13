import React, { Component } from 'react'
import styled from 'styled-components'
import ReactToPrint from 'react-to-print'
import ToPrint from '../../ToPrint'

const Answer = styled.div  `
width  : 90%;
${props => props.completed ? 'color: white; background-color : #2AA1A9;' : ''}
`
const ResultText = styled.p `
font-family: "Maven Pro Regular";
    font-size: 30px;
${props => props.completed ? 'color: white; background-color : #2AA1A9;' : 'color : #002F47; background-color: transparent'}
`

export default class Result extends Component {
    
    constructor(props){
        super(props)
        this.printRef = React.createRef();
        this.state = {
            titre : "Activité Gain Minutes",
            value: 0,
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

    componentDidMount(){
        this.setState({value: this.props.value})
    }

    componentDidUpdate(prevProps,prevState) {
        if(prevProps.value !== this.props.value)
            this.setState({value:this.props.value})
    }


    
    render() {
        let message , printbutton
        let isCompleted = false
        let value = this.state.value
        let text  
       
       
        if(value > 0)
        {
            isCompleted = true
        }
        if(value >=60)
        {
            let num = value
            let hrs = (num/60)
            let rhrs = Math.floor(hrs)
            let min = (hrs - rhrs)*60
            let rmin = Math.round(min)

        text = <ResultText completed={isCompleted}>
                    Score: {rhrs} heures et {rmin} minutes
                </ResultText>
        }
        else text = <ResultText completed={isCompleted}>Score: {value} minutes</ResultText>
        
       
        if(this.state.btn.checked)
        { message =  <Answer className="answer" completed={isCompleted}>
         {text}
         </Answer>
         printbutton =   <ReactToPrint
         trigger={() => <div className="download-button"><p>Sauvegarder</p></div>}
         content={() => this.printRef.current} />    
        }
         else message = null
    

        return (
            <div className="answer-div">
                 <ToPrint ref={this.printRef} title={this.state.titre}>
                    {message}
                 </ToPrint>
                {printbutton}
                <button className="add-button" onClick={this.handleClick} shown={this.state.btn.checked}>{this.state.btn.text}</button>
            </div>
        )
    }
}
