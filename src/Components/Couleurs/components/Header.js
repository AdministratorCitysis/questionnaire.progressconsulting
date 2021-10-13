import React, { Component } from 'react'
import logo from '../includes/logo.svg'

export default class Header extends Component {

        state={
            title:"Questionnaire des personnalités",
            description:'Merci de répondre à ces différentes questions en pensant à des situations où vous êtes "vous-même"\n(sans contraintes familliales ou professionnelles)',
        }
    

    render(){
        return(
                <div className="header">
                        <div className="logo">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="questionnaire-description">
                            {this.state.description.split('\n').map((item,i) => <p key={i}>{item}</p>)}
                        </div>
                        <div className="questionnaire-title">
                            <p>{this.state.title}</p>
                        </div>   
                </div>
        )
    }
}