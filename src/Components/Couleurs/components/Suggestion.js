import React, { Component } from 'react'
import {arrayMove,sortableContainer,sortableElement} from 'react-sortable-hoc'
import _ from 'lodash'
import 'font-awesome/css/font-awesome.min.css'
import styled from 'styled-components' 


const CheckMessage = styled.p `

${props => props.checked ? 'transition : width 400ms ease-in; animation: hiddentext 200ms forwards; width: 0' : 'width:100%'};
color: #002F47;
overflow :hidden;

`
 
const CheckIcon = styled.li `

color : ${props => props.checked ? '#009640' : '#C2C2C2'};

`




const SortableItem = sortableElement(({value}) => 
<li>{value.title}</li>
)

const SortableContainer = sortableContainer(({children}) => {
    return <ul>{children}</ul>
})

const CreateNumberList = (number) =>{
        
    const options = []
    for(let i=1;i<=parseInt(number) ;i++)
    {
    options.push(<li key={i}>{i}</li>)
    }
    return options
}


export class Suggestion extends Component {
    constructor(props){
        super(props)

        this.state = {
            possibilites: this.props.data.possibilites,
            pointlist:[7,5,3,1],
            isCompleted: false,
            newlist: [],
            oldlist : [],
            numberlist:CreateNumberList(this.props.data.possibilites.length),
            checked: false
        }

        this.onSortEnd = this.onSortEnd.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    onSortEnd = ({oldIndex,newIndex}) => {

        const oldlist = this.state.possibilites
        let newlist = arrayMove(this.state.possibilites,oldIndex,newIndex)
        const isChecked = this.state.checked

        //console.log("old list", oldlist)
        //console.log("new list", newlist)
       
       //Sending Reset Suggestion to NOT COMPLETED
      /*  const data = {
            suggestionId : this.props.data.id,
            checked: false
        }

        this.props.handleaddpoint(data) */

           this.setState({
            checked: isChecked ? false : false,
            possibilites : newlist,
            oldlist : oldlist
        })

    }

    handleClick = (e) =>{
        
        let checked = !this.state.checked
        let newlist = this.state.possibilites 
        let oldlist = _.cloneDeep(this.state.oldlist)

        if(oldlist.length <1)
            oldlist = _.cloneDeep(newlist)

      //  console.log("newlist" , newlist)
      //  console.log("oldlist" , oldlist)
           
        for(let i=0;i<newlist.length;i++)
            {
                newlist[i].points = parseInt(this.state.pointlist[i])            
            }
        
           // console.log("list with values", newlist)

            //CALCUL ET RENVOI DE LA VARIATION PAR COULEUR ASSOCIEES
            for(let i=0;i<this.state.pointlist.length;i++)
            {
                const id = oldlist[i].id
                const oldpoint = oldlist[i].points
                const newpoint = newlist.find(item => item.id === id).points
                let counter = 0
                counter -= parseInt(oldpoint)
                counter += parseInt(newpoint)


                //console.log("oldpoint",oldpoint)
                //console.log("newpoint",newpoint)
                //console.log("counter",counter)

                const data = {
                    value : counter,
                    checked: checked,
                    suggestionId: this.props.data.id,
                    classementId: 0,
                    feature : oldlist[i].feature,
                }
                this.props.handleaddpoint(data)
                
            }


        this.setState({
            checked : checked, 
            oldlist: newlist
        }) 

    }
   
    render() {
        const text = this.props.data.text


        return (
            <div className="suggestion">
            <p className="suggestion-title">{text}</p>
            <div className="suggestion-body" >
            <div className="suggestion-numbers" >
                  <ul>
                      {this.state.numberlist}
                  </ul>
              </div>
            <div className="suggestion-choices">   
                <SortableContainer onSortEnd={this.onSortEnd}  helperClass="suggestion-choices-helper">
                {this.state.possibilites.map((suggestion,index) => (
                        <SortableItem key={`item-${suggestion.id}`} index={index} item={suggestion.id} value={suggestion} />
                ))}
            </SortableContainer>
            </div>
            </div>
            <div className="suggestion-button">
            <CheckIcon checked={this.state.checked} className="fa fa-4x fa-check check-styled" onClick={this.handleClick} />
            <CheckMessage checked={this.state.checked}>Valider vos 4 réponses</CheckMessage>
            </div>
          </div>
        )
    }
}

export default Suggestion
