import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

import storage from './utilities/storage.js';
import { configureClient } from './API/client.js';

const accessToken = storage.get('auth');
configureClient({ accessToken });

ReactDOM.render(
  <BrowserRouter>
    <App isInitiallyLogged={!!accessToken} />
  </BrowserRouter>,
  document.getElementById('root')
);
