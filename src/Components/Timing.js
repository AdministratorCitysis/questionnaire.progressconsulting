import React, { Component } from 'react'
//import './Timing/css/timing.css'
import Header from './Timing/components/Header'
import Questions from './Timing/components/Questions'
import Result from './Timing/components/Result'

export default class Timing extends Component {
    constructor(props){
        super(props)
    
        this.state={
          total:0
        }
    
        this.handleGetTotal = this.handleGetTotal.bind(this)
      }
    
      handleGetTotal= (total) => {
        this.setState({total})
      }
      
      componentDidMount() {
        window.scrollTo(0, 0)
      }
      
      render(){
        
        
        return (
          <div className="App">
            <div className="survey">
            <Header />
            <Questions  handlegettotal={this.handleGetTotal}/>
            <Result value={this.state.total}/>
            </div>
          </div>
        );
      }
      
}
