import React, { Component } from 'react';
import { connect } from 'react-redux';

import userActions from '../actions/userActions';
import autobind from 'react-autobind';

 class UsersPanelContainer extends Component {

  componentDidMount() {
    this.props.dispatch(userActions.getAll());
  }

  constructor(props) {
    super(props)

    autobind(this)

  }

  render() {
    console.log("users =>> " + this.props.users);
    return (
      <div>
        <h1>UserPanelContainer</h1>
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

export default connect(mapStateToProps)(UsersPanelContainer);

