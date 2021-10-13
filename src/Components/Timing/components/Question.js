import React, { Component } from 'react'

export default class Question extends Component {
    
    constructor(props)
    {
        super(props)

        this.state={
            
        }

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        this.setState(this.props.data)
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.value !== this.state.value)
        {
            this.props.handleaddoint(this.state)
        }
    }

    handleChange = (e) => {
        
        this.setState({value:e.target.value})
    }

    handleOutfocus = (e) => {
        if(e.target.value === "")
            this.setState({value:0})
    }
    
    render() {

        //const [value,setValue] = React.useState(this.state.value);


        return (
            <tr className="question">
                <td className="question-text">
                    <p>{this.state.text}</p>
                </td>
                <td className="question-input">
                    <input type="text" value={this.state.value}  onChange={this.handleChange} onBlur={this.handleOutfocus} ></input>
                </td>
            </tr>
        )
    }
}
