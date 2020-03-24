import React from 'react';
import ReactDOM from 'react-dom';
import config from 'react-global-configuration';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

config.set({apiHost: 'http://localhost:3000'});

const store = require('./store').default;

const rootElement = document.getElementById('root');

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), rootElement);

serviceWorker.unregister();
