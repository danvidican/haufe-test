import React from 'react';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom';
import './index.css';
import  App  from './App';
import { store } from './helpers';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.register();
