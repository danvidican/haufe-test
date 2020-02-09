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
      userId: null
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
    if(this.state.userId){
      this.props.dispatch(userActions.deleteUser(this.state.selectedValue));
    }
  }


  render() {
    const users = this.props.users ? this.props.users.users : [];
    return (
      <div>
        <h1>UserPanelContainer</h1>

        <p style={{fontSize: "15"}}>
          <DynamicSelect arrayOfData={users} onSelectChange={this.handleSelectChange} /> <br /><br />
          <div>
            Selected value: {this.state.selectedValue}
          </div>
        </p>

        <button type="submit" className="btn-dark btn-lg btn-block"
          onClick={this.onDelete}> Delete Selected User
        </button>

      </div>
    )
  }
}

function mapStateToProps(state) {
  const { users: {users} } = state;
  return {
    users
  };
}

export default connect(mapStateToProps)(UsersPanelContainer);

