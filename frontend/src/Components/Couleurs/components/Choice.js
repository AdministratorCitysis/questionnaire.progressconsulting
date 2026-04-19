import React, { Component } from 'react'
import angleupicon from '../includes/Rectangle-angledown.svg'


const Select = {
    width: "127px",
    height: "52px",
    fontFamily: "Maven Pro Regular",
    fontSize: "29px",
    border : "3px solid  #F39325",
    borderRadius : "11px",
    background : "url(" + angleupicon + ") no-repeat right ",
    margin: "10px 10px",
    paddingLeft: "4%",
    color:"#9AA2A6"

}

    const CreateOptions = (number) =>{
       
        let nb = parseInt(number) 
        const options = []
        for(let i=0;i<=nb;i++)
        {
        options.push(<option key={i} value={i}>{i}</option>)
        }
        return options
    }

export default class Choice extends Component {
    
    constructor(props){
        super(props)

        this.state={
            choice :this.props.choice,
            maxvalue:this.props.maximum,
            value:0,
            iscompleted: false,
            options:CreateOptions(this.props.maxpoint)
        }
    }

    handleChange = (e) => {

        
        let value = e.target.value
        //let completed = value > 0 ? (true) : (false)
        let data = {
            choiceId: this.props.choice.id,
            propositionId : 0,
            propositionCompleted:false,
            categoryId:0,
            value:0,
            feature: this.props.choice.feature
        }
        const prevValue = this.state.value
        
        data.value -= parseInt(prevValue) 
        data.value +=parseInt(value) 


    this.setState({
        //iscompleted : completed,
        iscompleted : true,
        value:value
    })
        this.props.handleaddpoint(data)

    }

    

    render() {
        const options = this.state.options

        return <div className="choix">
                    <p>{this.state.choice.title}</p>
                    <select style={Select} onChange={this.handleChange}>
                        <option value="0">...</option>
                        {options}
                    </select>
            </div>
    }
}