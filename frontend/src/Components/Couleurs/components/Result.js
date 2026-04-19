import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import ReactToPrint from 'react-to-print'
import ToPrint from '../../ToPrint'

const Stick = styled.div`
min-height:5px;
background: green;
height: ${props => props.height}px;
background-color: ${props => props.color};
`;

const ResultStick = styled.div`
padding-top: 10px;
width: ${props => props.count}%;
`;

const StickValue = styled.div `
color : ${props => props.color};
font-family:"Maven Pro Regular";
font-size: 20px;
text-align:center;
`;


export default class Result extends Component {
    
    constructor(props) {
        super(props)
        this.printRef = React.createRef();
        this.state = {
             reponses:[
                 {
                    alpha:1,
                    beta:2,
                    strongpoint:["Votre sens des relations","Votre dynamisme naturel","Votre optimisme","Votre enthousiasme","Votre sociabilité"],
                    developmentpoint:["Ecouter plus que parler","Etre orienté résultat et fait concrets","Prendre des décisions impopulaires mais nécessaires"]
                 },
                 {
                    alpha:3,
                    beta:1,
                    strongpoint:["Votre leadership naturel","Votre dynamisme","Votre esprit critique","Votre capacité à prendre en main les problèmes opérationnels","Votre proactivité"],
                    developmentpoint:["Laisser de la place aux autres","La forme de la communication, parfois trop directe","Prendre le temps de faire les choses pour plus de qualité"]
                 },
                 {
                    alpha:4,
                    beta:3,
                    strongpoint:["Votre sens critique","Votre orientation vers la qualité","Votre fiabilité","Votre efficacité sur le moyen terme","Votre côté factuel et objectif"],
                    developmentpoint:["Développer votre sociabilité","L'empathie","Donner plus de feedback positif"]
                 },
                 {
                    alpha:2,
                    beta:4,
                    strongpoint:["Votre disponibilité aux autres","Votre calme et votre sérénité","Votre empathie naturelle","Votre sens de la diplomatie","Votre capacité à rassurer votre entourage"],
                    developmentpoint:["Développer votre confiance en vous","Oser dire 'non'","Vous reconcentrer sur vos priorités et objectifs personnels"]
                 },
             ],
             btn : {
                checked : false,
                text : "Valider",
            }
        }
        this.handleClick = this.handleClick.bind(this)
        
    }

    handleClick = (e) => {
        let btn = this.state.btn
        btn.checked = !btn.checked
        btn.checked ? btn.text = "Cacher le résultat" : btn.text = "Valider"
        this.setState(btn)
   }
    
    
    render() {

        const colors = this.props.colors
        let points = colors.map(c => c.point)
        const max = Math.max(...points)
        const maxIndex = points.findIndex(pt => pt === max)
        points[maxIndex] = 0
        const secondmax = Math.max(...points)
        const secondmaxIndex = points.findIndex(pt => pt === secondmax)
        let result , message, printbutton
        const alpha = colors[maxIndex]
        const beta = colors[secondmaxIndex]
        const value = alpha.id  + beta.id
        const reponses = this.state.reponses
       
        //console.log("alpha",alpha)
        //console.log("beta",beta)
        //console.log("value",value)
       // /!\ PROVISOIRE, ICI ON ADDITIONE LES ID DES COULEURS ALPHA ET BETA. MUST DO : CONDITION POUR CHAQUE ALPHA, BETA
        let answer = reponses.find(element => (element.alpha+element.beta) === value) 
            
        if(!answer) 
            answer = {
                alpha: alpha,
                beta: beta,
            strongpoint : ["Réponse manquante","vous etes surhumain","Vous pouvez soulever des montagnes"],
            developmentpoint : ["Réponse manquante","Prenez du temps pour vous","Contactez votre maman"]
            }

        //console.log("answer",answer)
       


        if(this.props.iscompleted) 
        {
            printbutton =   <ReactToPrint
            trigger={() => <div className="download-button"><p>Sauvegarder</p></div>}
            content={() => this.printRef.current}
                                                        /> 

            result =  <div className="result">
            <div className="result-graph">
            <div className="result-title">Vos couleurs préférentielles</div>
           <div className="result-data">
            { this.props.colors.map((element,index) => {
                return <ResultStick key={index} count={70/this.props.colors.length}>  
                        <Stick height={element.point*5} color={element.color}></Stick>
                        <StickValue color={element.color}>{element.text} = {element.point}</StickValue>
                        </ResultStick>
                        })}
           </div>
            </div>
        <div className="result-div">
                        <div className="result-title">
                           Vous êtes {alpha.text}/{beta.text} ou {beta.text}/{alpha.text}
                        </div>
                        <div className="result-points">
                            <h3>Vos {answer.strongpoint.length} points forts</h3>
                            {answer.strongpoint.map((point,index) =>
                                <p key={index}>{point}</p>
                            )}
                            <h3>Vos {answer.developmentpoint.length} points de développement potentiels</h3>
                            {answer.developmentpoint.map((point,index) =>
                                <p key={index}>{point}</p>
                            )}
                        </div>
                            </div> 
        </div>
        }
        else
        {
            result =  <div className="result">
                        <div className="messageBox">
                        <p>Veuillez compléter l'ensemble des questions avant de pouvoir accéder à votre résultat</p>
                    </div>
                    </div>
        }

        if(this.state.btn.checked)
        { message =  <Fragment>
             <ToPrint ref={this.printRef} title={this.props.title}>
         {result}
             </ToPrint>
         {printbutton}
         </Fragment>}
         else result = null


        return (
            <div className="answer-div">
                {message}
                <button className="add-button" onClick={this.handleClick} shown={this.state.btn.checked}>{this.state.btn.text}</button>
            </div>
        )
       
    }
}


/*<div className="result-answer">
                <div className="result-title">Vous êtes {this.props.alpha.text}/{this.state.beta.text} ou {this.state.beta.text}/{this.state.alpha.text}  </div>
                <div className="result-points">
        
                </div>
            </div>*/