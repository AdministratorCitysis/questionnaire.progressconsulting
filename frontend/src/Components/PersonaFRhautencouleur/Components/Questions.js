import React, { Component } from 'react'
import Context from './Context'
import Caracteristiques from './Caracteristiques'

export default class Questions extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.handleclick = this.handleclick.bind(this)
    }

    handleclick = (data) => {
        this.props.handleclick(data)
    }
    
   
    render() {

        const questions = this.props.questions

        return (
            <Context.Consumer>
                {
                    value =>
                    
               <div className="boxes">
                   {questions.map( (question,index) =>
                        <div key={index} className="box">
                            <Caracteristiques question={question} handleclick={this.handleclick}/>
                        </div>
                   )}
               </div>
                }
            </Context.Consumer>


          
        )
    }
}
