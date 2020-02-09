import React, { Component } from 'react';
import { connect } from 'react-redux';
import autobind from 'react-autobind';
import { Redirect } from 'react-router';

import userActions from '../actions/userActions';

class LoginContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            toRegister : false
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
    }


    render() {

        if(this.props.loggedIn){  
            return <Redirect push to="/" />;
        }

        if(this.state.toRegister){  
            return <Redirect push to="/register" />;
        }

        const { username, password } = this.state
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
                                        onChange={this.onUserNameChange} />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password" value={password}
                                        onChange={this.onPasswordChange} />
                                </div>

                                <button type="submit" className="btn-dark btn-lg btn-block"
                                    onClick={this.onLogin}>Login</button>

                                <button type="submit" className="btn-dark btn-lg btn-block"
                                    onClick={() =>  this.setState({toRegister: true})}>Register</button>    
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

