import React, { Component } from 'react';
import { connect } from 'react-redux';

import userActions from '../actions/userActions';
import autobind from 'react-autobind';

import DynamicSelect from "../components/DynamicSelect";

class UsersPanelContainer extends Component {

  componentDidMount() {
    this.props.dispatch(userActions.getAll());
  }

  constructor(props) {
    super(props)
    this.state = {
      selectedValue: 'Nothing selected',
      userId: null,
      username: "",
      password: "",
    }
    autobind(this)

  }

  handleSelectChange = (selectedValue) => {
    this.setState({
      selectedValue: selectedValue,
      userId: selectedValue
    });
  }

  onDelete = (event) => {
    if (this.state.userId) {
      this.props.dispatch(userActions.deleteUser(this.state.selectedValue));
    }
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
    this.props.dispatch(userActions.register(username, password, "external"));
  }


  onLogout(event) {
    event.preventDefault()
    this.props.dispatch(userActions.logout());
  }

  render() {
    const users = this.props.users ? this.props.users.users : [];
    const { username, password } = this.state;
    return (
      <div>
        <h1>UserPanelContainer</h1>

        <p style={{ fontSize: "15" }}>
          <DynamicSelect arrayOfData={users} onSelectChange={this.handleSelectChange} /> <br /><br />
          <div>
            Selected value: {this.state.selectedValue}
          </div>
        </p>

        <button type="submit" className="btn-dark btn-lg btn-block"
          onClick={this.onDelete}> Delete Selected User
        </button>

        <div id="login">
          <div className="container">
            <h1 className="text-center">Register External </h1>
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


        <button type="submit" className="btn-dark btn-lg btn-block"
            onClick={this.onLogout}> Log out
        </button>

      </div>
    )
  }
}

function mapStateToProps(state) {
  const { users: { users } } = state;
  return {
    users
  };
}

export default connect(mapStateToProps)(UsersPanelContainer);

