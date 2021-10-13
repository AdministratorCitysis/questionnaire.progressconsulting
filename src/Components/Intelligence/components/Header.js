import React from 'react'
import logo from '../includes/logo.svg'

const Header = (props) => {
//console.log(props.questionnaire.answers)

const titre = props.questionnaire.titre
const answers = props.questionnaire.answers

    

    return(
        <div className="head">
            <div className="header">
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="choices-list">
                        <ul>
                            {answers.map((answer,index) =>(
                                <li className="choice-li" key={index} ><p className="choice-number">{answer.number}</p><p className="choice-text">{answer.text}</p></li>
                            ))}
                        </ul>
                    </div>
            </div>
            <div className="survey-title">
                <p>{titre}</p>
            </div>   
        </div>                            
    )
}
export default Header