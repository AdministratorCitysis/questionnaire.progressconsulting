import React, { Component, Fragment} from 'react'
import styled from 'styled-components'
import Context from './Context'
import ReactToPrint from 'react-to-print'
import ToPrint from '../../ToPrint'

const Stick = styled.div`
min-height:35px;
height: ${props => props.height}px;
background-color: ${props => props.color};
font-family : "Maven Pro Regular";
font-size : 30px;
display :flex;
flex-flow : row wrap;
justify-content : center;
align-items : center;
color : #F0F2FF;

:hover {
    color : white;    
}

`;

const ResultStick = styled.div`
padding-top: 10px;
width: ${props => props.count}%;

`;

const StickValue = styled.div `
color : ${props => props.color};
font-family:"Maven Pro Regular";
font-size: 20px;
text-align:center;

@media(max-width: 714px){
display :none;
}
@media  print {
    display : inline-block;
}
`;

const StickValueMobile = styled.div `
display : none;

@media(max-width: 714px){
    display: flex;
    flex-flow : row wrap;
    justify-content: center;
    align-items: center;
    width  : 100%;
    min-height : 40px;
    margin-top: 20px;
    color : ${props => props.color};
    font-family:"Maven Pro Regular";
    font-size: 30px;
    text-align:center;
    }
@media print {
    display : none;
}
`;

    class Answer extends Component {

       constructor(props) {
           super(props)
           this.printRef = React.createRef();
           this.state = {
                message: "Veuillez compléter l'ensemble des questions pour connaître votre score",
                stickValue: "",
                stickColor: "green",
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

       handleOver = (element) => {

        
            let value
           element.text === "" ? (value = "") : (value = element.text.join(' '))
           this.setState({  stickValue : value ,
                            stickColor : element.color 
                        })
       }
       

       
        render(){

            return (
            <Context.Consumer>
                {
                    data =>
                    {
                        const isCompleted = data.completed
                        //const isCompleted = true
                        const categories = data.categories
                        let message , result, printbutton;

                        //Calcul du ou des plus gros score
                        /*const scores = categories.map( c => c.value)
                        const max = Math.max(...scores)
                        const answers = categories.filter(cat => cat.value === max ) */
                        //console.log(answers)
                        if(isCompleted)
                        {
                            printbutton =   <ReactToPrint
                            trigger={() => <div className="download-button"><p>Sauvegarder</p></div>}
                            content={() => this.printRef.current} />   

                            message =       
                            <div className="result">
                                <div className="result-graph">
                                    <div className="result-title">Vos couleurs préférentielles</div>
                                        <div className="result-data">
                                            { categories.map((element,index) => {
                                                return <ResultStick key={index} count={70/categories.length}>  
                                                    <Stick height={element.value*5} color={element.color} onMouseOver={()=> this.handleOver(element)}><p>{element.value}</p></Stick>
                                                    <StickValue color={element.color}>{element.text.map((element,index) => <p key={index}>{element}</p>)}<p>{element.value}</p></StickValue>
                                                    </ResultStick>
                                            })}
                                            <StickValueMobile color={this.state.stickColor}>{this.state.stickValue}</StickValueMobile>
                                        </div>
                                </div>
                                <div className="result-div-xl">
                                    <div className="result-title">
                                       <p>Feedback</p>
                                    </div>
                                    <div className="result-points">
                                        {
                                            categories.map((answer,index) =>
                                        <Fragment key={index}>
                                            <h3>{answer.text.join(' ')}</h3>
                                            <p>{answer.description}</p>
                                        </Fragment>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        }
                        else {
                                message =   <div className="answer">
                                            <div className="answer-text">
                                                {this.state.message}
                                            </div>
                                </div>
                            }

                            if(this.state.btn.checked)
                        { result = <div>
                               <ToPrint ref={this.printRef} title={data.title}>
                            {message}
                            </ToPrint>
                            {printbutton}
                            </div> }
                             else result = null
                        
                        return(
                            <div className="answer-div">
                            {result}
                            <button className="add-button" onClick={this.handleClick} shown={this.state.btn.checked}>{this.state.btn.text}</button>
                        </div>
                        )  
                    }
                }
            </Context.Consumer>
            )
            
            


            

           
        }

    
}
export default Answer