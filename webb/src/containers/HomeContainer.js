import React, { Component } from 'react';
import { connect } from 'react-redux';

import userActions from '../actions/userActions';
import autobind from 'react-autobind';

class HomeContainer extends Component {

  constructor(props) {
    super(props)

    autobind(this)

  }

  onLogin(event) {
    event.preventDefault()
    this.props.dispatch(userActions.logout());
}

  render() {
    return (
      <div>
        <h1>Home</h1>
        
        <button type="submit" className="btn-dark btn-lg btn-block"
          onClick={this.onLogin}> Log out
        </button>
      </div>
    )
  }

}

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users
  };
}

export default connect(mapStateToProps)(HomeContainer);

