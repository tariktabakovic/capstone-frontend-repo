import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
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
                    const name = prompt ('Record a thought');
                    if(name){
                        this.setState(state=>({
                            thoughts: [...state.thoughts, {id: uuid(), name}]
                        }))
                    }
                }}>Record your daily thought pattens
                </Button>
                <ListGroup>
                    <TransitionGroup className= "thought-list">
                        {thoughts.map(({id, name})=> (
                            <CSSTransition key={id} timeout= {500} classNames="fade">
                                <ListGroupItem>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}
export default ThoughtPattern;
