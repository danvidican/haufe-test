import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'
import Home from "../containers/HomeContainer.js";
import LoginContainer from "../containers/LoginContainer.js";
import { history } from '../helpers';

const PublicRoute = ({ component: Component, user, ...rest }) => (
  <Route {...rest} render={props => (
    <div>
      <Component {...props} />
    </div>
  )} />
)
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('user')
      ? <Component {...props} />
      : <Redirect to="/login" />
  )} />
)

export default class App extends Component {
  render() {
    return (
      <HashRouter history={history}>
        <div>
          <Switch>
            <PublicRoute path='/login' exact component={LoginContainer} />
            <PrivateRoute path='/' exact component={Home} />

            {/* <PublicRoute path='/register' exact component={Register} /> */}

            {/* <PrivateRoute path='/logout' exact component={Logout} /> */}

            {/* <PublicRoute component={NotFound} /> */}
          </Switch>
        </div>
      </HashRouter>
    )
  }
}


