import React, { Component } from 'react'
import Logo from '../includes/logo.svg'

export default class ToPrint extends Component {
    render() {
        return (
            <div className="ToPrint">
                <div className="hidden">
                 <div className="logo" style={{width : "100%"}}>
                            <img src={Logo} alt="" style={{width : "50%"}}/>
                </div>
                <div className="darkblue fs40 bold w100 text-middle p20">
                    <p>{this.props.questionnaire.titre}</p>
                </div>
                {this.props.questionnaire.categories.map((categorie,index) => <div key={index} className="p10">
                    <div className="derkblue fs30 bold w100 text-middle" >
                        {categorie.name}
                    </div>
                    <div className="answer-div">
                    <div className="answer">
                                <p className="answer-text">{categorie.message}</p>
                            </div>
                    </div>
                </div>)}
                </div>
                
            </div>
        )
    }
}
