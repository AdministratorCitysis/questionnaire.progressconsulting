import React, { Component } from 'react'
import Context from './Context'
import Question from './Question'

export default class Questions extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (data) => {
        this.props.handleclick(data)
    }
    
   
    render() {

        return (
            <Context.Consumer>
                {
                    value =>
                    
               <div className="boxes">
                   {value.questions.map( (question,index) =>
                        <div key={index} className="box-100">
                            <Question question={question} index={index} handleclick={this.handleClick}/>
                        </div>
                   )}
               </div>
                }
            </Context.Consumer>


          
        )
    }
}
