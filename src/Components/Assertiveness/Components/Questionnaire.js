import React, { Component } from 'react'
import Header from './Header'
import Context from './Context'
import Questions from './Questions'
import Answer from './Answer'


export default class Questionnaire extends Component {
    
    constructor(props) {
        super(props)
       
        this.state = {
             title: "Assertiveness",
             instruction : "Answer all the statements to know your result.",
             description : ["Answer spontaneously by clicking True or False.","True = if you think or react like this most of the time.","False = If you almost never think or react like this."],
             categories:[
                {
                    id:11,
                    text: ["Submissive attitude"],
                    value:0,
                },
                {
                    id:12,
                    text:["Aggressive attitude"],
                    value:0,
                },
                {
                    id:13,
                    text:["Manipulative attitude"],
                    value:0,
                },
                {
                    id:14,
                    text:["Assertive attitude"],
                    value:0,
                },
            ],
            questions : [
                {
                    id:21,
                    completed:false,
                    text : "I often say «yes» while I would like to say «no».",
                    categoryId : 11,
                },
                {
                    id:22,
                    completed:false,
                    text : "I defend my rights, without giving up the rights of others.",
                    categoryId : 14,
                },
                {
                    id:23,
                    completed:false,
                    text : "I choose to hide what I think or feel when I don’t know somebody very well.",
                    categoryId : 13,
                },
                {
                    id:24,
                    completed:false,
                    text : "I am rather authoritarian and determined.",
                    categoryId : 12,
                },
                {
                    id:25,
                    completed:false,
                    text : "It is mostly easier and more convenient to act through a ‘middle man’ than directly.",
                    categoryId : 13,
                },
                {
                    id:26,
                    completed:false,
                    text : "I am not scared to give criticism and to say to people what I really think.",
                    categoryId : 12,
                },
                {
                    id:27,
                    completed:false,
                    text : "I don’t dare to refuse certain tasks that are not really under my responsibility.",
                    categoryId : 11,
                },
                {
                    id:28,
                    completed:false,
                    text : "I am not scared to give my opinion, even if there are some rather hostile people around.",
                    categoryId : 14,
                },
                {
                    id:29,
                    completed:false,
                    text : 'When I am involved in a discussion, I’d rather put myself ‘in the back’ to see which direction the discussion will take.',
                    categoryId : 13,
                },
                {
                    id:210,
                    completed:false,
                    text : "People reproach me sometimes that I like to contradict them.",
                    categoryId : 12,
                },
                {
                    id:211,
                    completed:false,
                    text : "It is difficult for me to listen to others.",
                    categoryId : 12,
                },
                {
                    id:212,
                    completed:false,
                    text : "I always try to belong to the ‘insiders’, that has helped me a lot already.",
                    categoryId : 13,
                },
                {
                    id:213,
                    completed:false,
                    text : "Generally speaking, people consider me as being pretty practical and easy in communicating with others.",
                    categoryId : 13,
                },
                {
                    id:214,
                    completed:false,
                    text : "My relations with others are merely depending on trust than on domination or calculation.",
                    categoryId : 14,
                },
                {
                    id:215,
                    completed:false,
                    text : "I don’t like to ask assistance to a colleague; he could think that I am not capable of doing things.",
                    categoryId : 11,
                },
                {
                    id:216,
                    completed:false,
                    text : "I am shy and I feel disadvantaged (inhibited) when I have to do something unusual.",
                    categoryId : 11,
                },
                {
                    id:217,
                    completed:false,
                    text : "People say that I am short tempered; I get easily excited and people tend to laugh with that.",
                    categoryId : 11,
                },
                {
                    id:218,
                    completed:false,
                    text : "I feel very comfortable when I talk to someone one on one.",
                    categoryId : 14,
                },
                {
                    id:219,
                    completed:false,
                    text : "I am playing games quite often. How else can you reach your goals?",
                    categoryId : 13,
                },
                {
                    id:220,
                    completed:false,
                    text : "I like to talk and I sometimes tell people to quit talking, although I am not always aware of that (or I don’t realize it right away).",
                    categoryId : 12,
                },
                {
                    id:221,
                    completed:false,
                    text : "I am ambitious and I will do whatever has to be done to get where I want to get.",
                    categoryId : 12,
                },
                {
                    id:222,
                    completed:false,
                    text : "I mostly know whom you have to talk to and when: that is important to succeed in life.",
                    categoryId : 13,
                },
                {
                    id:223,
                    completed:false,
                    text : "If there is a disagreement, I’ll always strive for a realistic compromise, based on the common interest.",
                    categoryId : 14,
                },
                {
                    id:224,
                    completed:false,
                    text : 'I like to show you my cards.',
                    categoryId : 14,
                },
                {
                    id:225,
                    completed:false,
                    text : "I tend to postpone the things that I have to do, to a later day/time.",
                    categoryId : 11,
                },
                {
                    id:226,
                    completed:false,
                    text : "I often leave a task unaccomplished, without really finishing it.",
                    categoryId : 11,
                },
                {
                    id:227,
                    completed:false,
                    text : "I always act the way I am, without hiding my feelings.",
                    categoryId : 14,
                },
                {
                    id:228,
                    completed:false,
                    text : "A lot of things have to happen before you can intimidate me.",
                    categoryId : 12,
                },
                {
                    id:229,
                    completed:false,
                    text : "Scaring the others is often a good method to gain power.",
                    categoryId : 12,
                },
                {
                    id:230,
                    completed:false,
                    text : "If someone tries to make a fool of me, I will seek revenge when the opportunity arises.",
                    categoryId : 12,
                },
                {
                    id:231,
                    completed:false,
                    text : "A good way of criticizing someone is by reproaching him that he doesn’t follow his own rules. So in the end he has to agree with me.",
                    categoryId : 13,
                },
                {
                    id:232,
                    completed:false,
                    text : "I know how to ‘use’ the system : I always find a way out of things.",
                    categoryId : 13,
                },
                {
                    id:233,
                    completed:false,
                    text : "I can be myself and be socially accepted at the same time.",
                    categoryId : 14,
                },
                {
                    id:234,
                    completed:false,
                    text : "When I don’t agree with others, I don’t mind telling them that right away and I’ll make sure they’ll listen to me.",
                    categoryId : 14,
                },
                {
                    id:235,
                    completed:false,
                    text : "I always make sure that I don’t bother others.",
                    categoryId : 11,
                },
                {
                    id:236,
                    completed:false,
                    text : "I find it hard to choose a side and make choices.",
                    categoryId : 11,
                },
                {
                    id:237,
                    completed:false,
                    text : "When I am in a group, I don’t like to be the only one with a certain opinion. In that case I rather not talk.",
                    categoryId : 11,
                },
                {
                    id:238,
                    completed:false,
                    text : "I am not afraid of talking in public.",
                    categoryId : 14,
                },
                {
                    id:239,
                    completed:false,
                    text : "Life is a continuing road full of fights for power and struggles.",
                    categoryId : 12,
                },
                {
                    id:240,
                    completed:false,
                    text : "I am not afraid to start dangerous or adventurous challenges.",
                    categoryId : 12,
                },
                {
                    id:241,
                    completed:false,
                    text : "Creating conflicts can sometimes be more efficient than trying to reduce tensions.",
                    categoryId : 13,
                },
                {
                    id:242,
                    completed:false,
                    text : "Talking in a straight way is a good way of gaining trust.",
                    categoryId : 13,
                },
                {
                    id:243,
                    completed:false,
                    text : "I can listen and I don’t stop others from talking.",
                    categoryId : 14,
                },
                {
                    id:244,
                    completed:false,
                    text : "Whatever I decided, I will always bring it to a good end.",
                    categoryId : 14,
                },
                {
                    id:245,
                    completed:false,
                    text : "I am not scared to express my feelings the way I experience them.",
                    categoryId : 14,
                },
                {
                    id:246,
                    completed:false,
                    text : "I know how to get people to like me and win them for my ideas.",
                    categoryId : 13,
                },
                {
                    id:247,
                    completed:false,
                    text : "Flattering people is just a good method to get what you want to get.",
                    categoryId : 13,
                },
                {
                    id:248,
                    completed:false,
                    text : "I have problems reducing my speaking time.",
                    categoryId : 12,
                },
                {
                    id:249,
                    completed:false,
                    text : "I know how to handle strong irony.",
                    categoryId : 12,
                },
                {
                    id:250,
                    completed:false,
                    text : "I am helpful and easy going. Sometimes I even let people «use» me.",
                    categoryId : 11,
                },
                {
                    id:251,
                    completed:false,
                    text : "I rather observe than participate.",
                    categoryId : 11,
                },
                {
                    id:252,
                    completed:false,
                    text : "I rather stay in the background than coming to the foreground.",
                    categoryId : 11,
                },
                {
                    id:253,
                    completed:false,
                    text : "I don’t think manipulating is an efficient solution.",
                    categoryId : 14,
                },
                {
                    id:254,
                    completed:false,
                    text : "You don’t have to show too fast your aims, that is unthoughtful.",
                    categoryId : 13,
                },
                {
                    id:255,
                    completed:false,
                    text : "It seems that I sometimes shock people with the things that I say.",
                    categoryId : 12,
                },
                {
                    id:256,
                    completed:false,
                    text : "I would rather be a wolf than a lamb.",
                    categoryId : 12,
                },
                {
                    id:257,
                    completed:false,
                    text : "Manipulating others a little bit is often the only practical way of getting what you want to get.",
                    categoryId : 13,
                },
                {
                    id:258,
                    completed:false,
                    text : "I mostly know how to protest in an effective way, without being excessively aggressive.",
                    categoryId : 14,
                },
                {
                    id:259,
                    completed:false,
                    text : "I think that problems can only be solved if you look for the underlying reasons.",
                    categoryId : 11,
                },
                {
                    id:260,
                    completed:false,
                    text : "I don’t like it if people would think I am no good.",
                    categoryId : 11,
                },
            ],
            }

        this.handleAddPoint = this.handleAddPoint.bind(this)
    }
    
    handleAddPoint = (data) => {
        console.log("data questionnaire",data)
        /*
        data = {question, value }
        */
        let questions = this.state.questions
        let categories = this.state.categories

        const qIndex = questions.findIndex(element => element.id === parseInt(data.question.id))
        console.log("qIndex",qIndex)
        if(qIndex >-1)
        {
                questions[qIndex].completed = true
                const cIndex = categories.findIndex(element => element.id === parseInt(data.question.categoryId))
                console.log("cIndex",cIndex)
                if(cIndex>-1)
                {
                    categories[cIndex].value += data.value
                }
                
        }
        this.setState({
            questions,
            categories
        })
    }
    
    render() {
       


        return (
            <Context.Provider value={this.state}  >
                <div className="survey">
                    <Header questionnaire={this.state}/>
                    <Questions handleclick={this.handleAddPoint} />
                    <Answer questions={this.state.questions} categories={this.state.categories} />

                </div>
        </Context.Provider> 
        )
    }
}
