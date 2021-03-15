import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import userActions from '../actions/userActions';
import autobind from 'react-autobind';

class RegisterRestaurantContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "email1@test.com",
            password: "email1@test1234",
            name : "restaurant1",
            description: "description1",
            location: "location1",
            openHour: "08:00:00.000",
            closeHour: "20:00:00.000",
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

    onDescriptionChange(event) {
        this.setState({ description: event.target.value })
    }

    onLocationChange(event) {
        this.setState({ location: event.target.value })
    }

    onOpenHourChange(event) {
        this.setState({ openHour: event.target.value })
    }

    onCloseHourChange(event) {
        this.setState({ closeHour: event.target.value })
    }

    onRegister(event) {
        event.preventDefault()

        const { email, password, name, description, location, openHour, closeHour   } = this.state;

        this.props.dispatch(userActions.registerRestaurant(email, password, name, description, location, openHour, closeHour));
        this.setState({toLogin: true});
    }

    render() {
        const { email, password, name, description, location, openHour, closeHour   } = this.state;

        if(this.state.toLogin){ 
            return <Redirect push to="/login" />;
        }
        
        return (
            <div id="login">
                <div className="container">
                    <h1 className="text-center">Register Restaurant</h1>
                    <div className="login-form-container">
                        <hr />
                        <form>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter username" value={email}
                                    onChange={this.onEmailChange} />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="text" value={password}
                                    onChange={this.onPasswordChange} />
                            </div>

                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" placeholder="Name" value={name}
                                    onChange={this.onNameChange} />
                            </div>

                            <div className="form-group">
                                <label>Description</label>
                                <input type="text" className="form-control" placeholder="Description" value={description}
                                    onChange={this.onDescriptionChange} />
                            </div>

                            <div className="form-group">
                                <label>Location</label>
                                <input type="text" className="form-control" placeholder="Location" value={location}
                                    onChange={this.onLocationChange} />
                            </div>

                            <div className="form-group">
                                <label>Open hour</label>
                                <input type="text" className="form-control" placeholder="Open Hour" value={openHour}
                                    onChange={this.onOpenHourChange} />
                            </div>

                            <div className="form-group">
                                <label>Close hour</label>
                                <input type="text" className="form-control" placeholder="Close Hour" value={closeHour}
                                    onChange={this.onCloseHourChange} />
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

export default connect(mapStateToProps)(RegisterRestaurantContainer);

