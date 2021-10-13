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
                    <p>{this.props.title}</p>
                </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}
