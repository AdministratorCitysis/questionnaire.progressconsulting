import React, { Component } from 'react'
import Categorie from './Categorie'

class Categories extends Component{

    SetQuestionCompleted = (id) => {
        this.props.setquestioncompleted(id)
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
                    <Categorie key={index} categorie={cat} data={data} getcategorievalue={this.GetCategorieValue} setquestioncompleted={this.SetQuestionCompleted} />
                ))}
                </div>
        )
    }
}
export default Categories