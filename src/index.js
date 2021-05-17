import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import storage from './utilities/storage.js';
import { configureClient } from './API/client.js';

const accessToken = storage.get('auth');
configureClient({ accessToken });

ReactDOM.render(
  <App isInitiallyLogged={!!accessToken} />, //double negation is a way to receive the boolean of the value
  document.getElementById('root')
);
