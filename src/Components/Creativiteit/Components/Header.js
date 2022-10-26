import React, { Component } from 'react'
import logo from '../../../includes/logo.svg'

export default class Header extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             title : this.props.questionnaire.title,
             choices : this.props.questionnaire.choices
        }
    }
    
render(){
    return(
        <div className="head">
            <div className="header">
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="choices-list">
                        <ul>
                            {this.state.choices.map((answer,index) =>(
                                <li className="choice-li" key={index} ><p className="choice-number">{answer.number}</p><p className="choice-text">{answer.text}</p></li>
                            ))}
                        </ul>
                    </div>
            </div>
            <div className="survey-title">
                <p>{this.state.title}</p>
            </div>   
        </div>                            
    )
}
}