import React, {Component} from 'react';
import {Container, ListGroup, ListGroupitem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

class ThoughtPattern extends Component {
    state= {
        thoughts: [
            {id: uuid(), name: 'Be nice'},
            {id: uuid(), name: 'Be fun'},
            {id: uuid(), name: 'Be now'},
            {id: uuid(), name: 'Be happy'}
        ]
    }
    render(){
        const {thoughts} = this.state;
        return(
            <Container>
                <Button
                color= "dark"
                style= {{marginBottom: '2rem'}}
                onClick={()=>{
                    const name = prompt ('Ever thought');
                    if(name){
                        this.setState(state=>({
                            thoughts: [...state.thoughts, {id: uuid(), name}]
                        }))
                    }
                }}>Record your daily thought pattens
                </Button>
            </Container>
        );
    }
}
export default ThoughtPattern;
