import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'

import { history, isInternal } from './helpers';

import Home from "./containers/HomeContainer.js";
import LoginContainer from "./containers/LoginContainer.js";
import RegisterRestaurantContainer from "./containers/RegisterRestaurantContainer";
import RegisterCustomerContainer from "./containers/RegisterCustomerContainer";

import UsersPanelContainer from "./containers/UsersPanelContainer";
import NotFound from "./containers/NotFound";

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

const InternalRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isInternal(JSON.parse(localStorage.getItem('user')).token)
      ? <Component {...props} />
      : <Redirect to="/" />
  )} />
)

export default class App extends Component {
  render() {
    return (
      <HashRouter history={history}>
        <div>
          <Switch>
            <PrivateRoute path='/' exact component={Home} />
            <PublicRoute path='/login' exact component={LoginContainer} />
            <PublicRoute path='/registerRestaurant' exact component={RegisterRestaurantContainer} />
            <PublicRoute path='/registerCustomer' exact component={RegisterCustomerContainer} />
            <InternalRoute path='/internal' exact component={UsersPanelContainer} />
            <PublicRoute component={NotFound} /> 
          </Switch>
        </div>
      </HashRouter>
    )
  }
}


