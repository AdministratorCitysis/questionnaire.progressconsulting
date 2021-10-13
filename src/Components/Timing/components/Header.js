import React from 'react'
import logo from '../includes/logo.svg'

const Header = (props) => {
//console.log(props.questionnaire.answers)

const titre = "Activité Gain Minutes"
const instruction = "Pour finir ce module, voici un petit exercice personnel:\nCombien de temps par jour estimez-vous que vous pourriez gagner grâce à ces techniques (en minutes)? "

    return(
        <div className="head">
            <div className="header">
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="questionnaire-description">
                        <p>{instruction}</p>
                    </div>
            </div>
            <div className="survey-title">
                <p>{titre}</p>
            </div>   
        </div>
    )
}
export default Header