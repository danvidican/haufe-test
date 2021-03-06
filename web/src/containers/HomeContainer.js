import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import userActions from '../actions/userActions';
import autobind from 'react-autobind';

 class HomeContainer extends Component {

  constructor(props) {
    super(props)

    autobind(this)

  }

  onLogout(event) {
    event.preventDefault()
    this.props.dispatch(userActions.logout());
  }

  render() {
    
    if(!this.props.loggedIn){
      return <Redirect push to="/login" />;
    }
    return (
      <div>
        <h1>Home</h1>

        <button type="submit" className="btn-dark btn-lg btn-block"
          onClick={this.onLogout}> Log out
        </button>
      </div>
    )
  }

}

function mapStateToProps(state) {
  const {dispatch} = state
  const { loggedIn } = state.authentication;

  return {
    dispatch,
    loggedIn
  };
}

export default connect(mapStateToProps)(HomeContainer);

