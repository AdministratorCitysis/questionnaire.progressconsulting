import React, { Component } from 'react'
import logo from '../includes/logo.svg'
import {Link} from 'react-router-dom'
import {ReactComponent as PortalIcon} from '../includes/Portail-icon.svg'

export default class Home extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
             user: "formateur@progressconsulting.be",
             pwd:"upmanagement"
        }
    }


    

    render() {


        return (
            <div className="App">
            <div className="head">
                <div className="header">
                        <div className="logo">
                            <img src={logo} alt=""/>
                        </div>
                </div>
                <div className="survey-title" style={{width : "100%"}}>
                <p>Découvrez nos différents formulaires</p>
            </div> 
            </div>
            <div className="Links">
                <Link className="Link" to="/couleurs"><PortalIcon /> <p>Questionnaire des Couleurs</p></Link>
                <Link className="Link" to="/timing"><PortalIcon /><p>Gestion temps de travail</p></Link> 
                <Link className="Link" to="/gestion">   <PortalIcon /><p>Gestion du temps </p></Link>    
                <Link className="Link" to="/delegation"> <PortalIcon /><p >Approche de la délégation </p></Link>
                <Link className="Link" to="/delegation-en"> <PortalIcon /><p >Approche de la délégation (EN) </p></Link>
                <Link className="Link" to="/delegation-nl"> <PortalIcon /><p >Approche de la délégation (NL) </p></Link>
                <Link className="Link" to="/drivers"> <PortalIcon /><p>Questionnaire des drivers</p></Link>
                <Link className="Link" to="/intelligence">  <PortalIcon /><p>Questionnaire sur l'intelligence émotionnelle</p></Link>
                <Link className="Link" to="/personaen">  <PortalIcon /><p>Persona survey (EN)</p></Link>
                <Link className="Link" to="/personafr">  <PortalIcon /><p>Questionnaire Persona (FR)</p></Link>
                <Link className="Link" to="/personanl">  <PortalIcon /><p>Vragenlijst Persona (NL)</p></Link>
                <Link className="Link" to="/creativite">  <PortalIcon /><p>Questionnaire Créativité</p></Link>
                <Link className="Link" to="/tki/fr">  <PortalIcon /><p>Questionnaire TKI</p></Link>
                <Link className="Link" to="/tki/en">  <PortalIcon /><p>TKI Form (EN)</p></Link>
                <Link className="Link" to="/tki/nl">  <PortalIcon /><p>TKI enquête (NL)</p></Link>
                <Link className="Link" to="/assertivite">  <PortalIcon /><p>Assertivité (FR)</p></Link>
                <Link className="Link" to="/assertiviteit">  <PortalIcon /><p>Assertiviteit (NL)</p></Link>
                <Link className="Link" to="/assertiveness">  <PortalIcon /><p>Assertiveness (EN)</p></Link>
                <Link className="Link" to="/leadership">  <PortalIcon /><p>Auto-diagnostic des styles de Leadership</p></Link>
                <Link className="Link" to="/ecouteactive">  <PortalIcon /><p>Questionnaire sur l'écoute active</p></Link>
                <Link className="Link" to="/lencioni">  <PortalIcon /><p>Questionnaire Lencioni</p></Link>
                <Link className="Link" to="/skillsoft">  <PortalIcon /><p>Skillsoft leadership</p></Link>
                <Link className="Link" to="/activitemanageriale">  <PortalIcon /><p>Questionnaire Activite Manageriale</p></Link>
                <Link className="Link" to="/managerialactivity">  <PortalIcon /><p>Managerial Activity</p></Link>
                <Link className="Link" to="/beslissings">  <PortalIcon /><p>Beslissings vragenlijst</p></Link>
                <Link className="Link" to="/sct/individuel">  <PortalIcon /><p>SCT - Individuel</p></Link>
                <Link className="Link" to="/sct/test/individuel">  <PortalIcon /><p>SCT - Individuel - Test</p></Link>
            </div>
            </div>
        )
    }
}
