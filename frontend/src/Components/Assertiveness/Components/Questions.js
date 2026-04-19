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
                    
               <div className="questions">
                   <table className="questions-table">
                        <tbody>
                            {value.questions.map((question,index) =>
                                <Question key={index} index={index} question={question} handleclick={this.handleClick}/>
                            )}
                        </tbody>
                   </table>
                  
               </div>
                }
            </Context.Consumer>


          
        )
    }
}
