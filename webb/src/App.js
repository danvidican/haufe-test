import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { store } from './helpers';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <LoginCheck {...this.props} /> */}
      </Provider>
    )
  }

}

export default App;
