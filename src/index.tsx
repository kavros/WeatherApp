import ReactDOM from 'react-dom';
import './index.css';
import App, { InputProps } from './app/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'inversify-react';
import { myContainer } from './IoC.config';

let props = { 
    name : "Scotland's" 
} as InputProps;
const element = 
  <Provider  container={myContainer}>
    <App {...props}/>
  </Provider>;

ReactDOM.render(
  element,
  document.getElementById('root')
);

reportWebVitals();
