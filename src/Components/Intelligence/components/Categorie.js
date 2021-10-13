import React, {Component} from 'react'
import Questions from './Questions'
import Answer from './Answer'

class Categorie extends Component { 

        GetCategorieValue = value => {
            let data = {
                value,
                id: this.props.categorie.id
            }
            this.props.getcategorievalue(data)
        }

        SetQuestionCompleted = (id) =>{
            let data = {
                catId : this.props.categorie.id,
                questionId: id
            }
            this.props.setquestioncompleted(data)
        }

    render(){
        const data = this.props.data;
        const titre = this.props.categorie.name;
        const questions = this.props.categorie.questions

        return(
            <div className="categorie">
                <div className="questions">
                <div className="questions-description">
                <p>{titre}</p>
                </div>   
                <Questions questions={questions} data={data} setmessage={this.GetCategorieValue} setquestioncompleted={this.SetQuestionCompleted}/> 
                </div>
                <Answer categorie={this.props.categorie} answers={data.answers}/>
            </div>
        )
    }


   
}
export default Categorie