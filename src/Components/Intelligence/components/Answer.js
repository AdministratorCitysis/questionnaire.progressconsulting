import React, { Component } from 'react'

    class Answer extends Component {

        constructor(props) {
            super(props)
            this.state = {
                btn : {
                    checked : false,
                    text : "Valider",
                }
            }
            this.handleClick = this.handleClick.bind(this)
        }

        handleClick = (e) => {
            let btn = this.state.btn
            btn.checked = !btn.checked
            btn.checked ? btn.text = "Cacher le résultat" : btn.text = "Valider"
            this.setState(btn)
       }

        render(){

            let result
            let message =   <div className="answer">
                                <p className="answer-text">{this.props.categorie.message}</p>
                            </div>

            if(this.state.btn.checked)
            { result =  
             message
            }
             else result = null

            return(
                <div className="answer-div">
                    {result}
                    <button className="add-button" onClick={this.handleClick} shown={this.state.btn.checked}>{this.state.btn.text}</button>
                </div>
                )  
        }

    
}
export default Answer