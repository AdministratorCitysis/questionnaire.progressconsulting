import React, { Component } from 'react'
import Question from './Question'

export default class Questions extends Component {
    
    constructor(props)
    {
        super(props)

        this.state={
            questions:[
                {
                    id:1,
                    text:"Ne plus être interrompu",
                    value:0
                },
                {
                    id:2,
                    text:"Avoir un meilleur équilibre entre vos activités “trèfle”",
                    value:0
                },
                {
                    id:3,
                    text:"Exécuter vos tâches selon votre rythme biologique et vos niveaux d’énergie",
                    value:0
                },
                {
                    id:4,
                    text:"Déléguer ce qui est moins important pour vous",
                    value:0
                },
                {
                    id:5,
                    text:"Mettre les pressions de l’urgence à leur juste place et vous focaliser sur les choses importantes",
                    value:0
                },
            ],
            total:"",
            inputText:""

        }

        this.handleChange = this.handleChange.bind(this)
        this.handleAddPoint = this.handleAddPoint.bind(this)
        this.handleAddQuestion = this.handleAddQuestion.bind(this)
    }
    
    componentDidUpdate(prevProps,prevState){
        if(prevState !== this.state)
        {
            let counter = this.state.questions.reduce((prevValue, currentValue) => prevValue + currentValue.value,0);
            return this.props.handlegettotal(counter)
        }
    }

    handleAddQuestion = () => {

        console.log("Je suis dans le handleAdQuesiton")

        let item = {
            id : new Date().valueOf(),
            text: this.state.value,
            value:0
        }
        this.setState(state => {
            const list = [...state.questions,item];

            return console.log(list)
            
        })
    }

    handleChange= (e) => {
        this.setState({inputText:e.target.value})
    }

    handleAddPoint = (data) => {
        this.setState(state => 
            state.questions.filter(question => question.id === data.id).map(question =>{
                            if(isNaN(parseInt(data.value))) 
                                return question.value = 0
                            else 
                                return question.value = parseInt(data.value) 
                    })
            )
            return true
    }

    handleClick = (e) => {
        const text = this.state.inputText

        if(text)
        {
            let list = this.state.questions
            const lastid = list[list.length-1].id
            const newquestion = {
                id: lastid+1,
                text: text,
                value:0
            }
            const newlist = list.concat(newquestion)
            this.setState({questions : newlist,inputText: "" })
        }
        
    }

    render() {

        return (
            <div className="questions">
                <table className="questions-table" >
                    <tbody>
                    {this.state.questions.map((q,i) => (
                        <Question key={i} data={q} handleaddoint={this.handleAddPoint}/>
                    ))}
                    <tr className="question">
                <td className="question-text">
                    <div className="question-input-text">
                    <input type="text" placeholder="Autre..." onChange={this.handleChange} value={this.state.inputText} />
                    </div>
                </td>
                <td className="question-input">
                    <button className="add-button" onClick={this.handleClick} >Add</button>
                </td>
                </tr>
                    </tbody>
                </table>
                
            </div>
        )
    }
}
