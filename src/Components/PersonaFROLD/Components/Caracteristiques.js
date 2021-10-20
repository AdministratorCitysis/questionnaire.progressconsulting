import React, { Component } from 'react'

export default class Caracteristiques extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            value:0
             
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick = (e) => {
        let newvalue = 0 
        newvalue -= parseInt(this.state.value) 
        newvalue += parseInt(e.target.value)
        let data = {
            caracteristiqueId : e.target.id,
            questionId : this.props.question.id,
            value : newvalue,
            categoryId : this.props.question.categoryId
        }
       // console.log("handleClick", data)

        this.props.handleclick(data)

        this.setState({value:e.target.value})
    }
  
    render() {

        const question = this.props.question
        const caracteristiques = question.choices
       
        return (
            <div className="checklist">
                {
                    caracteristiques.map((caracteristique,index) =>
                    <div key={index} className="checklistItem">
                        <input type="radio" id={caracteristique.id} name={question.id} value={caracteristique.value}  onClick={this.handleClick}/>
                        <label className="checkbox-label" htmlFor={caracteristique.id} />
                        <p>{caracteristique.name}</p>
                    </div>
                    )
                }
            </div>
        )
    }
}
