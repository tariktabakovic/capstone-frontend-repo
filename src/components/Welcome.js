import React, { Component, Fragment } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Button
} from 'reactstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';

class Welcome extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    render(){
        const {isAuthenticated, user} = this.props.auth;
        const guestLinks = (
            <Fragment>
                <Button>
                    <RegisterModal />
                </Button>
                <Button>
                    <LoginModal />
                </Button>
            </Fragment>
        )
        return (
        <div>
            <Container className= "welcome-buttons">
                {guestLinks}
            </Container>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(Welcome);