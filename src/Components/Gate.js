import React, { Component } from 'react'
import Background from '../includes/GateBackground.png'
import logo from '../includes/logo.svg'
var sectionStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

export default class Gate extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             username: "formateur@progressconsulting.be",
             password: "upmanagement",
            inputusername: "",
            inputpwd: "",
            message: ""
        }

    }

    handleChange = () => {
        this.setState({message : ""})
    }
    
    handleClick = () =>
    {
        this.setState({message : "Mauvais identifiant"})
    }
    
    render() {
        
        
        return (
            <div className="gate" style={ sectionStyle }>
                <div className="login">
                    <div className="logo" style={{width:"60%", marginTop:"10px",marginBottom:"10px"}}>
                        <img src={logo} alt=""/>
                    </div>
                    <div>
                    <input type="text" placeholder="E-Mail" name="username" required onChange={this.handleChange} />
                    <input type="password" placeholder="Mot de passe" name="pwd" required  onChange={this.handleChange}/>
                    </div>
                    <button type="submit" onClick={this.handleClick}>CONNEXION</button>
                    <p className="message-alert">{this.state.message}</p>
                    </div>
                </div>
        )
    }
}
