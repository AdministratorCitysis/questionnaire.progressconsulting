import React, { Component } from 'react'
import logo from '../includes/logo.svg'

export default class Header extends Component {

        state={
            title:"Questionnaire Individuel",
            description:"Bonjour,\n\nLe questionnaire que vous allez remplir a pour objectif de déterminer, dans la mesure du possible, quelles sont les «visions du monde» qui vous habitent en priorité.\nCes différentes visions du monde sont inspirées des travaux de Carl Graves, un psychologue américain connu pour son approche des différents systèmes de valeurs qui se sont succédés dans l'histoire de l'humanité.\n\nIl n'y a pas de systèmes de valeur et visions du monde meilleurs que d'autres. Tout dépend de l'environnement dans lequel la personne et l'organisation évolue.\nIl n'y a donc pas de bonnes ou mauvaises réponses.\n\nCe questionnaire va donner des résultats «bruts». Nous vous encourageons à les prendre avec du recul. L'intervention d'un spécialiste (coach, formateur, psychologue…) du modèle est essentiel pour interpréter les résultats.\nLes résultats du questionnaire seront traités dans la plus grande confidentialité.",
        }
    

    render(){
        return(
                <div className="header">
                        <div className="logo">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="questionnaire-title">
                            <p className="">{this.state.title}</p>
                        </div>   
                        <div className="questionnaire-description">
                            {this.state.description}
                        </div>
                </div>
        )
    }
}