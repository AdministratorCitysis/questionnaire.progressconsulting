import React, { Component } from 'react'
import Choices from './Choices'
import styled from 'styled-components'

const PropositionStyled = styled.div`

width: 360px;
border:4px solid #2AA1A9;
box-shadow: 0 0 22px rgba(0, 47, 71, 30%);
border-radius: 30px;
padding-top: 30px; 
padding-bottom: 30px; 
margin-top: 40px;

@media (max-width: 714px) {
    width: 100%;
}

`

export default class Proposition extends Component {
    
    constructor(props){
        super(props)

        this.state={
            proposition : this.props.proposition,
            maximum:this.props.maxpoint
        }
    }


    handleAddPoint = (data) =>{

        //ON VEUT RECUPERER LA VALEUR SAISIE, POUR LA SOUSTRAIRE AU MAXIMUM ET LA RENVOYER
        let maximum = this.state.maximum
        maximum -= data.value
        this.setState({maximum})
        data.propositionId = this.state.proposition.id
        if(maximum === 0) data.propositionCompleted = true
        //ON ENVOIE LA REPONSE AU QUESTIONNAIRE
        this.props.handleaddpoint(data)
    }

    

    render() {

        let maximum = this.state.maximum
        let maxInfo

        if(maximum === 0)
        {
            maxInfo = <p className="text-success" >Validé</p>
        }
        if(maximum < 0)
        {
        maxInfo = <p className="text-danger">{Math.abs(maximum)} points en trop</p>
        }

        return (
                <PropositionStyled>
                    <Choices choices={this.state.proposition.choices} maximum={this.state.maximum} maxpoint={this.props.maxpoint} handleaddpoint={this.handleAddPoint}/>
                   { maxInfo }
                </PropositionStyled>
        )
    }
}
