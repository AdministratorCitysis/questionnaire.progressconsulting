import React, { Component } from 'react'
import Styled from 'styled-components'

const Possibilites = Styled.td `
    width: fit-content;
    min-width: 300px;
    min-height: 100px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items : center;

    @media (max-width: 965px) {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
      }
`
const BoolInput = Styled.input `
display:none;
`


const BoolCheckboxes = Styled.div `
    overflow : hidden;
    position : relative;
    width: 117px;
    height : 52px;
    border: 3px solid ${props => props.color};
    border-radius : 6px;
    font-size: 17px;
    font-family : "Maven Pro Medium";
    background-color : white;
    transition : border 0.2s;
    transition-delay : 0.3s;
`

const TrueDiv = Styled.div `
display : inline-block ;
position : relative;
top: 12%;
left: 5%;
width : 45px;
height : 40px;
border-radius: 6px;
background-color: ${props => props.colors.background};
//background-color: green;
cursor : pointer;
transition-timing-function : ease-in-out;
${props => props.colors.selected ? 'animation : dropDown 0.3s;' : 'animation : dropOut 0.3s; transition-delay : 0.3s; ' }
`
const FalseDiv = Styled.div `
display : inline-block;
position : relative;
top : 12%;
left : 15%;
width   : 45px;
height : 40px;
border-radius: 6px;
background-color: ${props => props.colors.background};
//background-color: red;
cursor : pointer;
transition-timing-function : ease-in-out;
${props => props.colors.selected ? 'animation : dropDown 0.3s;' : 'animation : dropOut 0.3s; transition-delay : 0.3s; ' }
`

const TrueLabel = Styled.label `
display : inline-block;
position : absolute;
top : 30%;
left : 10%;
z-index : 1;
cursor : pointer;
color : ${props => props.colors.color};
transition : color 0.3s;
transition-delay : 0.3s;
`

const FalseLabel = Styled.label`
display : inline-block;
position : absolute;
top : 30%;
right : 10%;
z-index : 1;
cursor : pointer;
color : ${props => props.colors.color};
transition : color 0.3s;
transition-delay : 0.3s;
`



export default class Question extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            oldValue : 0,
            boxesColor: "#2AA1A9",
            Truecolors : {
                background :"transparent",
                color : "#002F47",
                selected : false,
                 },
            Falsecolors :{
                background :"transparent",
                color : "#002F47",
                selected : false,
                 }
             
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (e) => {
        
        let value = 0
        value -= parseInt(this.state.oldValue)
        value += parseInt(e.target.value)
        const data = {
            value : parseInt(value),
            question: this.props.question
        }

        this.props.handleclick(data)
        
        if(e.target.value > 0)
            {
                const Truecolors = this.state.Truecolors
                const Falsecolors = this.state.Falsecolors
                Truecolors.color = "white"
                Truecolors.background = "#F39325"
                
                Falsecolors.color = "#002F47"
                Falsecolors.background = "transparent"
                Truecolors.selected = true
                Falsecolors.selected = false
                

                
                this.setState({
                    boxesColor : "#F39325",
                    Truecolors,
                    Falsecolors,
                    oldValue : e.target.value
                })
            }
        else 
        {
            const Truecolors = this.state.Truecolors
            const Falsecolors = this.state.Falsecolors
            Truecolors.color = "#002F47"
            Truecolors.background = "transparent"
            Falsecolors.color = "white"
            Falsecolors.background = "#DE0156"
            Truecolors.selected = false
            Falsecolors.selected = true
            this.setState({
                boxesColor : "#DE0156",
                Truecolors,
                Falsecolors,
                oldValue : e.target.value
            })
        }
    }
  
    render() {

        const question = this.props.question
        //const choices = question.choices
       
        return (
            <tr className="question">   
            <td className="question-number">{this.props.index+1} </td>
            <td className="question-text">{question.text}</td>
            <Possibilites>
                <BoolInput   type="radio" id={question.id+"true"} name={question.id} value="1" onClick={this.handleClick} />
                <BoolInput   type="radio" id={question.id+"false"} name={question.id} value="0" onClick={this.handleClick}/>
                <BoolCheckboxes color={this.state.boxesColor}>
                    <TrueDiv colors={this.state.Truecolors} />
                    <FalseDiv colors={this.state.Falsecolors} /> 
                    <TrueLabel colors={this.state.Truecolors} htmlFor={question.id+"true"} >True</TrueLabel>
                    <FalseLabel colors={this.state.Falsecolors} htmlFor={question.id+"false"} >False</FalseLabel>
                </BoolCheckboxes>
            </Possibilites>
        </tr>
        )
    }
}
