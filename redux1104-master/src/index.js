import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {userReducer} from './redux/reducer'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'; 
import { composeWithDevTools } from 'redux-devtools-extension';
const middleware = [
  thunk,
];
const store = createStore(userReducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any)
  ));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
