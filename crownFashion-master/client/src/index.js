import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker.js';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';

import {Provider} from 'react-redux';
import {store,persistor} from './Redux/store';

import {PersistGate} from 'redux-persist/integration/react';


ReactDOM.render(
 
 <Provider store={store}>
   <BrowserRouter>
      <PersistGate persistor={persistor}>
          <App /> 
      </PersistGate>
    </BrowserRouter>
 </Provider>
, 
document.getElementById('root'));

serviceWorker.register();
