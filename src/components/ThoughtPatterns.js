import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';
import {connect} from 'react-redux';
import {getThoughts} from '../actions/thoughtActions'

class ThoughtPattern extends Component {
    
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
                                    <Button className= "remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={()=>{
                                        this.setState(state=>({
                                            thoughts: state.thoughts.filter(thought => thought.id !== id)
                                        }))
                                    }}
                                    >&times;</Button>
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
