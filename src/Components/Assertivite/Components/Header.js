import React, { Component } from 'react'
import Context from './Context'
import logo from '../../../includes/logo.svg'

export default class Header extends Component {
    
render(){
    return(

        <Context.Consumer>
            {
                data =>
                {
                return (
        <div className="head">
            <div className="header">
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
            </div>
            <div className="survey-title">
                <p>{data.title}</p>
            </div>  
             <div className="description-text">
                {data.description.map((text,index) => <p key={index}>{text}</p>) } 
                </div> 
            <div className="messageBox">
                    <p className="message-info"> {data.instruction} </p>    
                </div>  
        </div>                         
                    )
                }
            }
        </Context.Consumer>
    )
}
}