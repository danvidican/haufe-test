import React, { Component } from 'react';
import { connect } from 'react-redux';

// import userActions from '../actions/userActions';
import autobind from 'react-autobind';

 class UsersPanelContainer extends Component {

  constructor(props) {
    super(props)

    autobind(this)

  }

  render() {
    return (
      <div>
        <h1>UserPanelContainer</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {dispatch} = state
  return {
    dispatch
  };
}

export default connect(mapStateToProps)(UsersPanelContainer);

