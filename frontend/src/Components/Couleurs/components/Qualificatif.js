import React, { Component } from 'react'
import Propositions from './Propositions'

const ContextQ = React.createContext()

export default class Qualificatif extends Component {


    handleAddPoint=(data)=>{
        data.categoryId = this.props.data.id
        this.props.handleaddpoint(data)
    }

    render() {

        return (
            <ContextQ.Provider value={this.props.data} >
            <div className="qualificatif">
                <p className="qualificatif-title">{this.props.data.title}{this.props.data.instruction}</p>
                <div className="messageBox">
                <p className="message-info">Il est impératif d'assigner un total de {this.props.data.maxpoint} points dans une case pour la valider </p>
                </div>
                <p className="alert-info"></p>
                <Propositions maxpoint={this.props.data.maxpoint} propositions={this.props.data.propositions} handleaddpoint={this.handleAddPoint} />
            </div>
            </ContextQ.Provider>
        )
    }
}
