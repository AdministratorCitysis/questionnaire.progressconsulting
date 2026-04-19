import React, {Component, Fragment } from 'react'
import Context from './Context'


class Possibilites extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            question: this.props.question,
        }
    }
    

        handleChange = (e) =>{

            const question = this.state.question
            if(question.reverted === true)
            {
                const values = this.props.choices.values.slice().reverse()
                question.value = values[parseInt(this.props.choices.list.findIndex(item => item.id === parseInt(e.target.value)))]
            }
            else
            {
                const values = this.props.choices.values.slice()
                question.value = values[parseInt(this.props.choices.list.findIndex(item => item.id === parseInt(e.target.value)))]
            }
            question.completed = true
            this.props.handlevalue(question)
            
        }

        handleOver = (text) =>{
            this.props.handletext(text)
        }

        render(){

            const question = this.props.question

            return(
                <Context.Consumer>
                    {
                    data => 
                    {
                        const choices = data.choices.list                       
                        return (
                        <td className="possibilites-radio">

                            { choices.map((choice,index) => (
                                <Fragment key={index}>
                            <input type="radio" id={question.text+choice.id} name={question.text} value={choice.id} onChange={this.handleChange}/>
                            <label className="possibilite-label" htmlFor={question.text+choice.id} onMouseOver={()=> this.handleOver(choice.text)} onMouseLeave={()=> this.handleOver("")} >{choice.number}</label>
                                </Fragment>
                            ))}
                        </td>      
                    )}
                    }         
                </Context.Consumer>
            )
        }
    

}
export default Possibilites