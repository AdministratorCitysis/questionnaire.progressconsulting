import React, {Component, Fragment} from 'react'
import Questions from './Questions' 

const setTitle = (title) => {
    if(title.length === 0 || !title.trim())
        return <Fragment />
    else
        return   (<div className="categorie-title">
        <p>{title}</p>
    </div>  )
    }

class Categorie extends Component { 

    constructor(props) {
        super(props)
    
        this.state = {
            title: setTitle(this.props.categorie.name),
        }

        this.GetCategorieValue = this.GetCategorieValue.bind(this)
        this.SetQuestionCompleted = this.SetQuestionCompleted.bind(this)
    }
    

        GetCategorieValue = value => {
            let data = {
                value,
                id: this.props.categorie.id
            }
            this.props.getcategorievalue(data)
        }

        SetQuestionCompleted = (id) =>{
            this.props.setquestioncompleted(id)
        }

    render(){
        const data = this.props.data;
        const descritption = this.props.categorie.description;
        const instruction = this.props.categorie.instruction;
        const questions = this.props.categorie.questions

        //console.log("categorie", this.props.categorie)

        return(
            <div className="categorie">
                <div className="categorie-description">
                <p>{descritption}</p>
                </div>
                <div className="messageBox">
                    <p className="message-info">{instruction}</p>
                </div>
                <div className="questions" >
                {this.state.title}
                <Questions questions={questions} data={data} setmessage={this.GetCategorieValue} setquestioncompleted={this.SetQuestionCompleted}/> 
                </div>
            </div>
        )
    }


   
}
export default Categorie