import React from 'react';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom';
import './index.css';
import  App  from './App/App';
import { store } from './helpers';


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.register();
