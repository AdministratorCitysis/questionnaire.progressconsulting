import React from 'react'
import logo from '../includes/logo.svg'
import Context from './Context'

const Header = (props) => {

    return(
        <Context.Consumer>
           { value =>
             <div className="head">
             <div className="header">
                     <div className="logo">
                         <img src={logo} alt=""/>
                     </div>
             </div>
             <div className="survey-title">
                 <p>{value.title}</p>
             </div> 
                <div className="messageBox">
                    <p className="message-info"> {value.instruction} </p>    
                </div>  
             <div className="description-text">
                <p>{value.description}</p>
                
                </div>
         </div>
           }

        </Context.Consumer>
       
    )
}
export default Header