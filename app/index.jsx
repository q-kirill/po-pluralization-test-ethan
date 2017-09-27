import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/app.js';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { grey800 } from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import injectTapEventPlugin from 'react-tap-event-plugin';

import reducers from './Reducers';

injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

//Spent a lot of time trying to customize color scheme through MuiTheme 
  //MaterialUI makes it difficult to maintain custom color scheme across components (more in README)

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: grey800,
  }
})

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <MuiThemeProvider muiTheme={muiTheme} >
        <App />
      </MuiThemeProvider>
  </Provider>, document.getElementById('app'))