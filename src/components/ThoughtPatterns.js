import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';
import {connect} from 'react-redux';
import {getThoughts, deleteThought} from '../actions/thoughtActions';
import PropTypes from 'prop-types';

class ThoughtPattern extends Component {
    
    static propTypes = {
        getThoughts: PropTypes.func.isRequired,
        thought: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }
    
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
                {this.props.isAuthenticated? 
                <ListGroup>
                    <TransitionGroup className= "thought-list">
                        {thoughts.map(({_id, name})=> (
                            <CSSTransition key={_id} timeout= {500} classNames="fade">
                                <ListGroupItem>
                                    <Button className= "remove-btn"
                                    color="dark"
                                    size="sm"
                                    onClick={this.onDeleteClick.bind(this, _id)}
                                    style= {{margin: '2px'}}
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup> : null }
            </Container>
        );
    }
}

const mapStateToProps= (state) =>({
    thought: state.thought,
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, {getThoughts, deleteThought})(ThoughtPattern);
