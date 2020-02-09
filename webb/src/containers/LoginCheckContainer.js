
import React, { Component } from 'react'
// import Routes from '../../routes'
// import AuthService from '../../services/authService'


class LoginCheckContainer extends Component {

    render() {
        const { loggedIn } = this.props

        if (loggedIn) {
            return (
                <div>
                    <h4>Logged In...</h4>
                </div>
            )
        }

        return (
            <div>
                <h4>Loading...</h4>
            </div>
        )
    }
}


export default LoginCheckContainer
