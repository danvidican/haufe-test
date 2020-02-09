import React, { Component } from 'react';
import { connect } from 'react-redux';

// import LoginCheck from './containers/LoginCheckContainer';

class LoginContainer extends Component {
  render() {
    return (
      <div>
          <h1>Login</h1>
      </div>
    )
  }

}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

export default connect(mapStateToProps)(LoginContainer);

