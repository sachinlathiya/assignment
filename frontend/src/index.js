import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';




ReactDOM.render(
  <BrowserRouter>
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'));
  

  

registerServiceWorker();
