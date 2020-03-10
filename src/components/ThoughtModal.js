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

    render(){
        return (
            <div>
                <Button
                color= "dark"
                style= {{marginBottom: "2rem"}}
                onClick= {this.toggle}>
                    Record your daily thoughts
                </Button>
            </div>
        );
    }
}

export default connect ()(ThoughtModal);