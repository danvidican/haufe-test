import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import userActions from '../actions/userActions';
import autobind from 'react-autobind';

class RegisterCustomerContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            name: "",
            phoneNumber: "",
            address: "",
            toLogin: false
        }

        autobind(this)
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onPasswordChange(event) {
        this.setState({ password: event.target.value })
    }
    onNameChange(event) {
        this.setState({ name: event.target.value })
    }
    onPhoneNumberChange(event) {
        this.setState({ phoneNumber: event.target.value })
    }
    onAddressChange(event) {
        this.setState({ address: event.target.value })
    }

    onRegister(event) {
        event.preventDefault()

        const { email, password, name, phoneNumber, address } = this.state;

        this.props.dispatch(userActions.registerCustomer(email, password, name, phoneNumber, address));
        this.setState({toLogin: true});
    }

    render() {
        const { email, password, name, phoneNumber, address} = this.state

        if(this.state.toLogin){ 
            return <Redirect push to="/login" />;
        }
        
        return (
            <div id="login">
                <div className="container">
                    <h1 className="text-center">Register Cutomer</h1>
                    <div className="login-form-container">
                        <hr />
                        <form>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" value={email}
                                    onChange={this.onEmailChange} />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" value={password}
                                    onChange={this.onPasswordChange} />
                            </div>

                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter name" value={name}
                                    onChange={this.onNameChange} />
                            </div>

                            <div className="form-group">
                                <label>Phone number</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Phone" value={phoneNumber}
                                    onChange={this.onPhoneNumberChange} />
                            </div>

                            <div className="form-group">
                                <label>Address</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Address" value={address}
                                    onChange={this.onAddressChange} />
                            </div>

                            <button type="submit" className="btn-dark btn-lg btn-block"
                                onClick={this.onRegister}>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { loggedIn } = state.authentication;
    return {
        loggedIn
    };
}

export default connect(mapStateToProps)(RegisterCustomerContainer);

