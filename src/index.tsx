import ReactDOM from 'react-dom';
import './index.css';
import App, { InputProps } from './app/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'inversify-react';
import { myContainer } from './IoC.config';
import KendoGridExample from './grid/grid';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './navBar/navBar';

let props = { 
    name : "Scotland's" 
} as InputProps;
const element = 
<Provider  container={myContainer}>
  <BrowserRouter>
    <Routes>
        <Route path="/" element={ <NavBar/>} >
          <Route path="home" element={ <App {...props}/>} />
          <Route path="grid" element={< KendoGridExample/>} />
        </Route>
    </Routes>
  </BrowserRouter>
</Provider>;
 
ReactDOM.render(
  element,
  document.getElementById('root')
);

reportWebVitals();
