import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import './components/style.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import cartReducer from './components/cart-reducer';
const store=createStore(cartReducer)

ReactDOM.render(
  < Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();