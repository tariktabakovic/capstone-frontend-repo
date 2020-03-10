import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';
import {connect} from 'react-redux';
import {getThoughts, deleteThought} from '../actions/thoughtActions';
import PropTypes from 'prop-types';

class ThoughtPattern extends Component {

    componentDidMount(){
        this.props.getThoughts();
    }

    onDeleteClick = (id) => {
        this.props.deleteThought(id);
    }
    
    render(){
        const {thoughts} = this.props.thought;
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
                                    onClick={this.onDeleteClick.bind(this, id)}
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

ThoughtPattern.propTypes = {
    getThoughts: PropTypes.func.isRequired,
    thought: PropTypes.object.isRequired
}

const mapStateToProps= (state) =>({
    thought: state.thought
});
export default connect(mapStateToProps, {getThoughts, deleteThought})(ThoughtPattern);
