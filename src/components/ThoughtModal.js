import React, {Component, Fragment} from 'react';
import {
    Button, 
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import {connect} from 'react-redux';
import {addThought} from '../actions/thoughtActions';
import PropTypes from 'prop-types';

class ThoughtModal extends Component{
    state= {
        modal: false,
        name: ''
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    toggle = () =>{
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) =>{
        e.preventDefault();
        const newThought = {
            name: this.state.name
        }

        // Add thought via addThought action
        this.props.addThought(newThought);

        // Close modal
        this.toggle();
    }

    render(){
        return (
            <Fragment>
                <h4 className= "ml-4">WhoIsGrandmaster?</h4>
            <div>
                {this.props.isAuthenticated ?(
                <Button
                color= "dark"
                style= {{marginBottom: "2rem"}}
                style= {{marginLeft: "1.5rem"}}
                onClick= {this.toggle}>
                    Record your daily thoughts
        </Button> ):( 
        <h4 className = "mb-3 ml-4">Please log in to access app</h4> )}
                <Modal
                    isOpen= {this.state.modal}
                    toggle= {this.toggle}>
                        <ModalHeader toggle = {this.toggle}>
                            Record your daily thoughts
                        </ModalHeader>
                        <ModalBody>
                            <Form onSubmit = {this.onSubmit}>
                                <FormGroup>
                                    <Label for= "thought"></Label>
                                    <Input 
                                    type= "text"
                                    name= "name"
                                    id= "thought"
                                    placeholder= "Record your daily thoughts"
                                    onChange= {this.onChange}/>
                                    <Button
                                    color = "dark"
                                    style= {{marginTop: '2rem'}}
                                    block>
                                        Add Thought
                                    </Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                </Modal>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    thought: state.thought,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {addThought})(ThoughtModal);