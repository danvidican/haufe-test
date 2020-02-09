import React, { Component } from 'react';
import { connect } from 'react-redux';

// import LoginCheck from './containers/LoginCheckContainer';

class HomeContainer extends Component {
  render() {
    return (
      <div>
          <h1>Home</h1>
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

