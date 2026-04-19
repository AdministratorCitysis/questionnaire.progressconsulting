import React, { Component } from 'react'

export default class Question extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            oldCategoryId: -1,
             
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick = (e) => {
        const data = {
           questionId : e.target.name,
           categoryId : e.target.value,
           oldCategoryId : this.state.oldCategoryId
       }
        console.log("handleClick Caracteristiques - categoryId", e.target.value)

        this.props.handleclick(data)

        this.setState({oldCategoryId:e.target.value})
    }
  
    render() {

        const question = this.props.question
        const choices = question.choices
       
        return (
            <div className="checklist">
                {
                    choices.map((choice,index) =>
                    <div key={index} className="checklistItem-50">
                        <input className="checkbox-radio" type="radio" id={choice.id} name={question.id} value={choice.categoryId}  onClick={this.handleClick}/>
                        <label className="checkbox-label-xl" htmlFor={choice.id} />
                        <p>{choice.name}</p>
                    </div>
                    )
                }
            </div>
        )
    }
}
