import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';

class AppNavbar extends Component {
   state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(){
        return (
        <div>
            <Navbar color= "dark" dark expand= "sm" className= "mb-5">
            <Container>
                <NavbarBrand href= "/">Login Here</NavbarBrand>
                <NavbarToggler onClick= {this.toggle}>
                </NavbarToggler>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className= "ml-auto" navbar>
                        <NavItem>
                            <RegisterModal />
                        </NavItem>
                        <NavItem>
                            <LoginModal />
                        </NavItem>
                        <NavItem>
                            <Logout/>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
            </Navbar>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(AppNavbar);