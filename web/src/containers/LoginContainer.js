import React, { Component } from 'react';
import { connect } from 'react-redux';
import autobind from 'react-autobind';
import { Redirect } from 'react-router';

import userActions from '../actions/userActions';

class LoginContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "vid.dan@gmail.com",
            password: "maria123",
            toRegisterRestaurant: false,
            toRegisterCustomer: false,
            loginFailed: false,
        }

        autobind(this)
    }

    onUserNameChange(event) {
        this.setState({ username: event.target.value })
    }

    onPasswordChange(event) {
        this.setState({ password: event.target.value })
    }

    onLogin(event) {
        event.preventDefault()
        const { username, password } = this.state
        this.props.dispatch(userActions.login(username, password));
        this.setState({loginFailed: true});
    }


    render() {

        if(this.props.loggedIn){  
            return <Redirect push to="/" />;
        }

        if(this.state.toRegisterRestaurant){  
            return <Redirect push to="/registerRestaurant" />;
        }

        if(this.state.toRegisterCustomer){  
            return <Redirect push to="/registerCustomer" />;
        }

        const { username, password } = this.state
        const borderColor = this.state.loginFailed ? "red" : "";
        return (
            <div>
                <div id="login">
                    <div className="container">
                        <h1 className="text-center">Login to your account</h1>
                        <div className="login-form-container">
                            <hr />
                            <form>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter username" value={username}
                                        style = {{borderColor: borderColor.toString() }}    
                                        onChange={this.onUserNameChange} />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password" value={password}
                                        style = {{borderColor: borderColor.toString() }}  
                                        onChange={this.onPasswordChange} />
                                </div>

                                <button type="submit" className="btn-dark btn-lg btn-block"
                                    onClick={this.onLogin}>Login</button>

                                <button type="submit" className="btn-dark btn-lg btn-block"
                                    onClick={() => this.setState({ toRegisterRestaurant: true })}>Register as Restaurant</button>

                                <button type="submit" className="btn-dark btn-lg btn-block"
                                    onClick={() => this.setState({ toRegisterCustomer: true })}>Register as Customer</button>
                                    
                            </form>
                        </div>
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

export default connect(mapStateToProps)(LoginContainer);

