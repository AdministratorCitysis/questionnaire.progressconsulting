import React, { Component } from 'react'
import Context from './Context'
import ReactToPrint from 'react-to-print'
import ToPrint from '../../ToPrint'

export default class Answer extends Component {
    
    constructor(props) {
        super(props)
        this.printRef = React.createRef();
        this.state = {
             message: "Please complete all the questions",
             vectors:{
                 middle:16,
                 minX:24,
                 maxX:9,
                 minY:9,
                 maxY:24
             }, 
            btn : {
                checked : false,
                text : "Validate",
            }
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (e) => {
        let btn = this.state.btn
        btn.checked = !btn.checked
        btn.checked ? btn.text = "Hide the result" : btn.text = "Validate"
        this.setState(btn)
    }
    
    render(){
        return (
        <Context.Consumer>
            {
                data =>
                {
                    const answers = data.answers
                    const isCompleted = data.questions.every(question => question.completed === true)
                    //const isCompleted = true
                    const scoreX = data.categories[0].value
                    const scoreY = data.categories[1].value
                    let message ,result, printbutton

                    if(isCompleted)
                    {
                        printbutton =   <ReactToPrint
                        trigger={() => <div className="download-button"><p>Save</p></div>}
                        content={() => this.printRef.current} />   
                        //SCALE AND POSITIONS
                        const vectorsX = "206.5"
                        const vectorsY = "109.5"
                        const distanceX = "478"
                        const distanceY = "421"
                        const scaleX = parseInt(distanceX)/17 
                        const scaleY = parseInt(distanceY)/16.5
                        
                        //SETGRAPHIC
                        const pointX = parseInt(vectorsX) + (24.5 - parseInt(scoreX))*parseInt(scaleX)
                        const pointY = parseInt(vectorsY) + (24.5 - parseInt(scoreY))*parseInt(scaleY)
                        
                        //SET ANSWER
                        let xIndex
                        let yIndex

                        scoreY > 16 ? (yIndex = 0) : (scoreY === 16 ? (yIndex = 1): (yIndex =2))
                        scoreX > 16 ? (xIndex = 0) : (scoreX === 16 ? (xIndex = 1): (xIndex =2))

                        const answer = answers[yIndex][xIndex]
                        
                        //SET MESSAGEBOX
                        message =                  
                        <div className="result">
                            <div className="graphic-container">
                            <svg viewBox="0 0 890 640">
                            <defs>
                                {/*</defs><filter id="dropshadow" x="-40%" y="-40%" width="180%" height="180%" filterUnits="userSpaceOnUse">*/}
                                <filter id="dropshadow" x="0%" y="0%" width="100%" height="100%" filterUnits="userSpaceOnUse">
                                <feGaussianBlur in="SourceAlpha" stdDeviation="1"/> 
                                <feOffset dx="5" dy="5" result="offsetblur"/> 
                                <feOffset dx="-5" dy="-5" result="offsetblur"/>
                                <feMerge> 
                                    <feMergeNode/>
                                    <feMergeNode in="SourceGraphic"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                                </filter>
                            </defs>
                                        <g id="Relational">
                                            <text className="svg-text" transform="translate(384.5 89.5)">Relational</text>
                                        </g>
                                        <g id="Result">
                                            <text className="svg-text" transform="translate(407 560.5)">Result</text>
                                        </g>
                                        <g id="Extrovert">
                                            <text className="svg-text" transform="translate(64.5 330)">Extrovert</text>
                                        </g>
                                        <g id="Introverted">
                                            <text className="svg-text" transform="translate(704.5 330)">Introverted</text>
                                        </g>
                                        <path className="svg-vectors" transform="translate(206.5 109.5),scale(0.75)" d="M633.12,279.48l-22.06-10.22a4.08,4.08,0,0,0-1.69-.37,4,4,0,0,0-4,4v6.72H321.22V30.4h6.1A4,4,0,0,0,331,24.73L320.69,2.33a4,4,0,0,0-7.27,0l-10.27,22.4a4,4,0,0,0,3.64,5.67h7.43V279.61H30.06v-6.72a4.07,4.07,0,0,0-.37-1.68,4,4,0,0,0-5.31-1.95L2.32,279.48a4,4,0,0,0,0,7.26L24.38,297a3.93,3.93,0,0,0,1.68.38,4,4,0,0,0,4-4v-6.73H314.22V529.4h-7.43a4.14,4.14,0,0,0-1.67.36,4,4,0,0,0-2,5.31l10.27,22.4a4,4,0,0,0,7.27,0L331,535.07a4,4,0,0,0-3.63-5.67h-6.1V286.61H605.37v6.73a3.93,3.93,0,0,0,.38,1.68,4,4,0,0,0,5.31,1.94l22.06-10.22a4,4,0,0,0,0-7.26Z"  />
                                        <circle id="Ellipse_58-2" data-name="Ellipse 58-2" cx={parseInt(pointX)} cy={parseInt(pointY)} r="15" filter="url(#dropshadow)" fill={answer.color}/>
                            </svg>
                                
                            </div>
                            <div className="result-div">
                                <div className="result-title">
                                    <p>characteristics</p>
                                </div>
                                <div className="result-points">
                                    <h3>{answer.primary}</h3>
                                    {answer.secondary.map((text,index) => <p key={index}>{text}</p>)}
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
                    { result = <div className="w100"> <ToPrint ref={this.printRef} title={data.title}> {message} </ToPrint> {printbutton}</div> }
                    else result = null
                        
                    return(
                        <div className="flex-row wrap justify-content-center">
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
