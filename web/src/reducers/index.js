import { combineReducers } from 'redux';

import { authentication } from './authenticationReducer.js';
import { users } from './usersReducer.js';

const rootReducer = combineReducers({
  authentication,
  users,
});

export default rootReducer;
