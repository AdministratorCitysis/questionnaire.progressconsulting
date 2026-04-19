import React, { Component,Fragment} from 'react'
import styled from 'styled-components'
import Context from './Context'
import ReactToPrint from 'react-to-print'
import ToPrint from '../../ToPrint'
/*
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

`;*/

const HorizontalCell = styled.tr `
height : 20px;
width : 100%;
padding : 10px;
font-family : "Maven Pro Bold";
font-size : 15px;
display :flex;
flex-flow : row nowrap;
justify-content : flex-start;
align-items : center;
color : black;
`
const HorizontalStick = styled.td `
float: left;
width: calc(( 90% / ${props =>props.scale} ) * ${props => props.value});
height: 25px;
background-color: ${props => props.color};
color: white;
display :flex;
flex-flow : row nowrap;
justify-content : center;
align-items : center;
`

const HorizontalScale = styled.td `
width:90%;
float:left;
height:25px;
font-size:25px;
color: #9AA2A6;
display :flex;
flex-flow : row nowrap;
justify-content : space-between;
align-items : center;
`
const Legend = styled.div `
width:90%;
margin:auto;
display: flex;
flex-flow: row wrap;
justify-content : flex-start;
align-items : center;
`
/*
const ResultStick = styled.div`
padding-top: 10px;
width: ${props => props.count}%;

`;

const StickValue = styled.div `
color : ${props => props.color};
font-family:"Maven Pro Regular";
font-size: 20px;
text-align:center;

@media (max-width: 714px) {
font-size: 15px; 
}

@media  print {
    display : inline-block;
}
`;
*/
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
                message: "Vul alle vragen in om uw score te kennen",
                stickValue: "",
                stickColor: "green",
                btn : {
                    checked : false,
                    text : "Bevestigen",
                }
           }
           this.handleClick = this.handleClick.bind(this)
       }

       handleOver = (element) => {
        let value
        element.text === "" ? (value = "") : (value = element.text.join(' '))
        this.setState({  stickValue : value ,
                            stickColor : "#002F47", 
                        })
    }

       handleClick = (e) => {
        let btn = this.state.btn
        btn.checked = !btn.checked
        btn.checked ? btn.text = "Verberg het resultaat" : btn.text = "Besvestigen"
        this.setState(btn)
   }

       
        render(){

            return (
            <Context.Consumer>
                {
                    data =>
                    {
                        const isCompleted = data.questions.every(element => element.completed === true)
                        //const isCompleted = true

                        let message , result,printbutton

                        if(isCompleted)
                        {
                            const categories = data.categories

                            printbutton =   <ReactToPrint
                            trigger={() => <div className="download-button"><p>Opslaan</p></div>}
                            content={() => this.printRef.current} />   

                            message =       
                            <div className="result">
                                <div className="result-graph">
                                    <div className="result-title">Resultaten</div>
                                        <div className="result-data">
                                        <div className="histogram">
                                                    <table className="horizontal-histogram">
                                                        <tbody>
                                                            {categories.map((category,index) => {
                                                                /*return <ResultStick key={index} count={70/categories.length}>  
                                                                    <Stick height={element.value*30} color="#002F47"onMouseOver={()=> this.handleOver(element)}><p>{element.value}</p></Stick>
                                                                    {element.text.map((text,index) => {return  <StickValue key={index} color="#002F47">{text}</StickValue>})}
                                                                </ResultStick>*/
                                                                return <HorizontalCell key={index} value={category.value} onMouseOver={()=> this.handleOver(category)}>
                                                                        <td className="index-td">{index+1}</td>
                                                            <HorizontalStick value={category.value} scale={10} color="#002F47" ><p>{category.value}</p></HorizontalStick>
                                                                </HorizontalCell>
                                                            })}
                                                            <HorizontalCell>
                                                            <td className="index-td"></td>
                                                            <HorizontalScale>
                                                                <p>0</p>
                                                                <p>10</p>
                                                            </HorizontalScale>
                                                            </HorizontalCell>
                                                        </tbody>
                                                    </table>
                                                    <Legend>
                                                        {categories.map((category,index) => {
                                                            return <div key={index} className="flex-row nowrap p10">
                                                                    <p className="fs20 lightblue p-l-r-5">{index+1}</p>
                                                                  {category.text.map((text,index2) => {return <p key={index2} className="fs20 darkblue">{text}</p>})}
                                                                </div>
                                                        })}
                                                    </Legend>
                                                </div>
                                                 <StickValueMobile color={this.state.stickColor}>{this.state.stickValue}</StickValueMobile>
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
                        { result =<Fragment>
                            <ToPrint ref={this.printRef} title={data.title}>
                                  {message}
                            </ToPrint>
                            {printbutton}
                        </Fragment>  
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
            </Context.Consumer>
            )
            
            


            

           
        }

    
}
export default Answer