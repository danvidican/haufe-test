import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import userActions from '../actions/userActions';
import autobind from 'react-autobind';

class RegisterContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            toLogin: false
        }

        autobind(this)
    }

    onUsernameChange(event) {
        this.setState({ username: event.target.value })
    }

    onPasswordChange(event) {
        this.setState({ password: event.target.value })
    }

    onRegister(event) {
        event.preventDefault()

        const { username, password } = this.state;

        this.props.dispatch(userActions.register(username, password));
        this.setState({toLogin: true});
    }

    render() {
        const { username, password } = this.state

        if(this.state.toLogin){ 
            return <Redirect push to="/login" />;
        }
        
        return (
            <div id="login">
                <div className="container">
                    <h1 className="text-center">Register</h1>
                    <div className="login-form-container">
                        <hr />
                        <form>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter username" value={username}
                                    onChange={this.onUsernameChange} />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" value={password}
                                    onChange={this.onPasswordChange} />
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

export default connect(mapStateToProps)(RegisterContainer);

