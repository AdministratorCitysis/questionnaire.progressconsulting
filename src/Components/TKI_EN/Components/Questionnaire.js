import React, { Component } from 'react'
import Header from './Header'
import Context from './Context'
import Questions from './Questions'
import Answer from './Answer'

export default class Questionnaire extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             title: "TKI Conflict resolution",
             instruction : "In many cases, the statements do not really characterize your behaviour, so please choose the reaction you would be most likely to have.",
             description : "Imagine that you find yourself in situations where your aspirations and desires differ from those of someone else.\nHow do you usually react?\nFor each pair, check the statement that best describes your own attitude in such situations.",
             completed: false,
             categories:[
                {
                    id:11,
                    text: ["Competition"],
                    value:0,
                },
                {
                    id:12,
                    text:["Collaboration"],
                    value:0,
                },
                {
                    id:13,
                    text:["Compromise"],
                    value:0,
                },
                {
                    id:14,
                    text:["Avoiding"],
                    value:0,
                },
                {
                    id:15,
                    text:["Giving in"],
                    value:0,
                },
            ],
             questions : [
                {
                    id:21,
                    completed:false,
                    choices : [
                        {
                            id:31,
                            name:"I sometimes leave it to others to solve the problem.",
                            categoryId:14,
                        },
                        {
                            id:32,
                            name:"Rather than discussing our disagreements, I try to highlight the points on which we agree.",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:22,
                    completed:false,
                    choices : [
                        {
                            id:33,
                            name:"I try to find a compromise solution",
                            categoryId:13,
                        },
                        {
                            id:34,
                            name:"I try to address all of our concerns, his and mine.",
                            categoryId:12,
                        },
                    ],
                },
                {
                    id:23,
                    completed:false,
                    choices : [
                        {
                            id:35,
                            name:"I generally pursue my goals with determination",
                            categoryId:11,
                        },
                        {
                            id:36,
                            name:"I seek to reassure the other and preserve our relationship.",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:24,
                    completed:false,
                    choices : [
                        {
                            id:37,
                            name:"I try to find a compromise solution",
                            categoryId:13,
                        },
                        {
                            id:38,
                            name:"I sometimes sacrifice my own desires for those of the other person.",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:25,
                    completed:false,
                    choices : [
                        {
                            id:39,
                            name:"I systematically seek the help of the other to find a solution.",
                            categoryId:12,
                        },
                        {
                            id:310,
                            name:"I try to do what I can to avoid unnecessary tension.",
                            categoryId:14,
                        },
                    ],
                },
                {
                    id:26,
                    completed:false,
                    choices : [
                        {
                            id:311,
                            name:"I try to avoid causing any inconvenience for myself",
                            categoryId:14,
                        },
                        {
                            id:312,
                            name:"I try to get my position across",
                            categoryId:11,
                        },
                    ],
                },
                {
                    id:27,
                    completed:false,
                    choices : [
                        {
                            id:313,
                            name:"I try to put off the problem to give myself some time to think about it.",
                            categoryId:14,
                        },
                        {
                            id:314,
                            name:"I give in on some points in exchange for other concessions",
                            categoryId:13,
                        },
                    ],
                },
                {
                    id:28,
                    completed:false,
                    choices : [
                        {
                            id:315,
                            name:"I generally pursue my goals with determination",
                            categoryId:11,
                        },
                        {
                            id:316,
                            name:"I try to immediately raise any questions that may arise.",
                            categoryId:12,
                        },
                    ],
                },
                {
                    id:29,
                    completed:false,
                    choices : [
                        {
                            id:317,
                            name:"I find that it is not always worthwhile to worry about the differences",
                            categoryId:14,
                        },
                        {
                            id:318,
                            name:"I make efforts to achieve my goal",
                            categoryId:11,
                        },
                    ],
                },
                {
                    id:210,
                    completed:false,
                    choices : [
                        {
                            id:319,
                            name:"I pursue my goals with determination",
                            categoryId:11,
                        },
                        {
                            id:320,
                            name:"I try to find a compromise solution",
                            categoryId:13,
                        },
                    ],
                },
                {
                    id:211,
                    completed:false,
                    choices : [
                        {
                            id:321,
                            name:"I try to immediately ask any questions that may arise.",
                            categoryId:12,
                        },
                        {
                            id:322,
                            name:"I seek to reassure the other and preserve our relationship.",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:212,
                    completed:false,
                    choices : [
                        {
                            id:323,
                            name:"I sometimes avoid controversial positions",
                            categoryId:13,
                        },
                        {
                            id:324,
                            name:"I make concessions if the other makes concessions.",
                            categoryId:14,
                        },
                    ],
                },
                {
                    id:213,
                    completed:false,
                    choices : [
                        {
                            id:325,
                            name:"I propose a common ground",
                            categoryId:13,
                        },
                        {
                            id:326,
                            name:"I insist on getting my ideas across",
                            categoryId:11,
                        },
                    ],
                },
                {
                    id:214,
                    completed:false,
                    choices : [
                        {
                            id:327,
                            name:"I share my ideas with the other person and ask for his/her ideas.",
                            categoryId:12,
                        },
                        {
                            id:328,
                            name:"I try to show him/her the logic, and the advantages of my position.",
                            categoryId:11,
                        },
                    ],
                },
                {
                    id:215,
                    completed:false,
                    choices : [
                        {
                            id:329,
                            name:"I seek to reassure the other and preserve our relationship.",
                            categoryId:15,
                        },
                        {
                            id:330,
                            name:"I try to do what I can to avoid tension.",
                            categoryId:14,
                        },
                    ],
                },
                {
                    id:216,
                    completed:false,
                    choices : [
                        {
                            id:331,
                            name:"I try not to hurt the other one.",
                            categoryId:15,
                        },
                        {
                            id:332,
                            name:"I try to convince the other person of the merits of my position.",
                            categoryId:11,
                        },
                    ],
                },
                {
                    id:217,
                    completed:false,
                    choices : [
                        {
                            id:333,
                            name:"I generally pursue my goals with determination",
                            categoryId:11,
                        },
                        {
                            id:334,
                            name:"I try to do what I can to avoid unnecessary tension.",
                            categoryId:14,
                        },
                    ],
                },
                {
                    id:218,
                    completed:false,
                    choices : [
                        {
                            id:335,
                            name:"I can let the other person maintain his or her point of view, if it pleases him or her.",
                            categoryId:15,
                        },
                        {
                            id:336,
                            name:"I make concessions if the other makes concessions.",
                            categoryId:13,
                        },
                    ],
                },
                {
                    id:219,
                    completed:false,
                    choices : [
                        {
                            id:337,
                            name:"I try to immediately ask any questions that may arise.",
                            categoryId:12,
                        },
                        {
                            id:338,
                            name:"I try to put off the problem to give myself some time to think about it.",
                            categoryId:14,
                        },
                    ],
                },
                {
                    id:220,
                    completed:false,
                    choices : [
                        {
                            id:339,
                            name:"I seek to resolve our differences immediately",
                            categoryId:12,
                        },
                        {
                            id:340,
                            name:"I try to strike a balance and get mutual concessions.",
                            categoryId:13,
                        },
                    ],
                },
                {
                    id:221,
                    completed:false,
                    choices : [
                        {
                            id:341,
                            name:"In approaching the negotiations, I try to take into consideration the aspirations of the other party.",
                            categoryId:15,
                        },
                        {
                            id:342,
                            name:"I always lean towards a direct discussion of the problem.",
                            categoryId:12,
                        },
                    ],
                },
                {
                    id:222,
                    completed:false,
                    choices : [
                        {
                            id:343,
                            name:"I try to find an intermediate position between his and mine",
                            categoryId:13,
                        },
                        {
                            id:344,
                            name:"I assert my desires",
                            categoryId:11,
                        },
                    ],
                },
                {
                    id:223,
                    completed:false,
                    choices : [
                        {
                            id:345,
                            name:"I very often try to satisfy all our aspirations.",
                            categoryId:12,
                        },
                        {
                            id:346,
                            name:"I assert my desires",
                            categoryId:14,
                        },
                    ],
                },
                {
                    id:224,
                    completed:false,
                    choices : [
                        {
                            id:347,
                            name:"If the other person takes things very dearly to heart, I try to satisfy his or her aspirations.",
                            categoryId:15,
                        },
                        {
                            id:348,
                            name:"I try to bring him/her to a compromise.",
                            categoryId:13,
                        },
                    ],
                },
                {
                    id:225,
                    completed:false,
                    choices : [
                        {
                            id:349,
                            name:"I try to show him/her the logic and advantages of my position.",
                            categoryId:11,
                        },
                        {
                            id:350,
                            name:"In approaching the negotiations, I try to take into consideration the aspirations of the other party.",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:226,
                    completed:false,
                    choices : [
                        {
                            id:351,
                            name:"I propose a common ground",
                            categoryId:13,
                        },
                        {
                            id:352,
                            name:"I almost always try to satisfy all our aspirations",
                            categoryId:12,
                        },
                    ],
                },
                {
                    id:227,
                    completed:false,
                    choices : [
                        {
                            id:353,
                            name:"I sometimes avoid controversial positions",
                            categoryId:14,
                        },
                        {
                            id:354,
                            name:"If it pleases the other one, I can let him/her maintain his/her positions.",
                            categoryId:15,
                        },
                    ],
                },
                {
                    id:228,
                    completed:false,
                    choices : [
                        {
                            id:355,
                            name:"I generally pursue my goals with determination",
                            categoryId:11,
                        },
                        {
                            id:356,
                            name:"I usually seek the help of the other to find a solution.",
                            categoryId:12,
                        },
                    ],
                },
                {
                    id:229,
                    completed:false,
                    choices : [
                        {
                            id:357,
                            name:"I propose a common ground",
                            categoryId:13,
                        },
                        {
                            id:358,
                            name:"I find that it is not always worthwhile to worry about the differences",
                            categoryId:14,
                        },
                    ],
                },
                {
                    id:230,
                    completed:false,
                    choices : [
                        {
                            id:359,
                            name:"I try not to hurt the other one.",
                            categoryId:15,
                        },
                        {
                            id:360,
                            name:"I always share my vision of the problem with the other person so that we can solve it.",
                            categoryId:12,
                        },
                    ],
                },
            ],
            }

        this.handleAddPoint = this.handleAddPoint.bind(this)
    }
    
    handleAddPoint = (data) => {
        console.log("data questionnaire",data)
        /*
        data = {questionId , categoryId, oldCategoryId }
        */
        let questions = this.state.questions
        let categories = this.state.categories
        categories.map(element => console.log("categoryID",element.id))
        const qIndex = questions.findIndex(element => element.id === parseInt(data.questionId))
        console.log("qIndex",qIndex)
        if(qIndex >=0)
        {
                questions[qIndex].completed = true
                const cIndex = categories.findIndex(element => element.id === parseInt(data.categoryId))
                console.log("cIndex",cIndex)
                categories[cIndex].value += 1
                const oldcIndex = categories.findIndex(element => element.id === parseInt(data.oldCategoryId))
                if(oldcIndex >=0)
                categories[oldcIndex].value -= 1
        }
        this.setState({
            questions,
            categories
        })
    }
    
    render() {
        return (
            <Context.Provider value={this.state} >
                <div className="survey">
                    <Header questionnaire={this.state}/>
                    <Questions handleclick={this.handleAddPoint} />
                    <Answer questions={this.state.questions} categories={this.state.categories} />
                </div>
        </Context.Provider> 
        )
    }
}
