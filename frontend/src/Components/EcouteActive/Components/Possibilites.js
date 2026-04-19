import React, { Fragment } from 'react'


const Possibilites = (props) => {

        const answers = props.data.answers
        const question = props.question


        const handleChange = (e) =>{
            props.handlegetvalue(e.target.value)

        }

        const handleOver =(text) =>{
            props.handletext(text)
        }

        return(
            <td className="possibilites-radio">
                {answers.map((answer,index) => (
                    <Fragment key={index}>
                <input type="radio" id={question.text+answer.id} name={question.text} value={answer.value} onChange={handleChange}/>
                <label className="possibilite-label" htmlFor={question.text+answer.id} onMouseOver={()=> handleOver(answer.text)} onMouseLeave={()=> handleOver("")} >{answer.number}</label>
                    </Fragment>
                ))}
            </td>               
        )
    

}
export default Possibilites