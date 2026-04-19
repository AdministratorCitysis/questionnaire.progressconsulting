import React, {Component, Fragment } from 'react'
import Context from './Context'


class Possibilites extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            question: this.props.question,
             prevValue:0
        }
    }
    

        handleChange = (e) =>{

            const question = this.state.question
            question.value = parseInt(e.target.value)
            if(!question.completed)
                question.completed = true
            this.props.handlevalue(question)
            console.log("value", question)
           this.setState({prevValue : e.target.value})
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
                        const choices = data.choices
                        const category = data.categories.find(cat => cat.id === question.categoryId)

                        if(category.values.length !== choices.length)
                            console.log("Impossible d'attribuer des valeurs aux boutons. Le nombre de choix est différents du nombre de valeurs à attribuer.")
                        else{
                            for(let i=0;i<choices.length;i++)
                            {
                                choices[i].value = category.values[i]
                            }
                        }
                       
                        return (
                        <td className="possibilites-radio">

                            { choices.map((choice,index) => (
                                <Fragment key={index}>
                            <input type="radio" id={question.text+choice.id} name={question.text} value={choice.value} onChange={this.handleChange}/>
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