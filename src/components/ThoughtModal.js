import React, {Component} from 'react';
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

class ThoughtModal extends Component{
    state= {
        modal: false,
        name: ''
    }

    toggle = () =>{
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        return (
            <div>
                <Button
                color= "dark"
                style= {{marginBottom: "2rem"}}
                onClick= {this.toggle}>
                    Record your daily thoughts
                </Button>
                <Modal
                    isOpen= {this.state.modal}
                    toggle= {this.toggle}>
                        <ModalHeader toggle = {this.toggle}>
                            Record your daily thoughts
                        </ModalHeader>
                        <ModalBody>
                            <Form onSubmit = {this.onSubmit}>
                                <FormGroup>
                                    <Label for= "thought">Thought</Label>
                                    <Input 
                                    type= "text"
                                    name= "name"
                                    id= "thought"
                                    placeholder= "Record your daily thoughts"
                                    onChange= {this.onChange}/>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default connect ()(ThoughtModal);