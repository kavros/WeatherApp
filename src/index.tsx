import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';


const element = <App name =  "Scotland's"/>;


ReactDOM.render(
  element,
  document.getElementById('root')
);

reportWebVitals();
