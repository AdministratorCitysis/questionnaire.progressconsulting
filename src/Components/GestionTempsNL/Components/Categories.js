import React, { Component, Fragment } from 'react'
import Categorie from './Categorie'
import Answer from './Answer'

class Categories extends Component{

    SetQuestionCompleted = (question) => {
        this.props.setquestioncompleted(question)
    }

    GetCategorieValue = data => {
        this.props.setcategorievalue(data)
    }

    render(){

        const data = this.props.data
        const categories = this.props.data.categories

        return(
            <div className="categories">
                {categories.map((cat,index) => (
                    <Fragment key={index}>
                        <Categorie  categorie={cat} data={data} getcategorievalue={this.GetCategorieValue} setquestioncompleted={this.SetQuestionCompleted} />
                        <Answer categorie={cat} answers={data.reponses } questionnaire={data}/>
                    </Fragment>
                ))}
                
                </div>
        )
    }
}
export default Categories