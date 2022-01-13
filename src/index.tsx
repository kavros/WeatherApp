import ReactDOM from 'react-dom';
import './index.css';
import List, { InputProps } from './list/List';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'inversify-react';
import { myContainer } from './IoC.config';
import KendoGridExample from './grid/grid';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './navBar/nav-bar';
import { HooksExample } from './hooksExample/hooks-example';
import { WeatherProvider } from './providers/weather-data.provider';
import { WeatherDataService } from './services/Weather-data.service';

let props = { 
    name : "Scotland's" 
} as InputProps;
const weatherService = new WeatherDataService();

const element = 
<WeatherProvider service = {weatherService}>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={ <NavBar/>} >
            <Route path="list" element={ <List {...props}/>} />
            <Route path="grid" element={< KendoGridExample/>} />
            <Route path="example" element={< HooksExample/>} />
          </Route>
      </Routes>
    </BrowserRouter>
</WeatherProvider>;

ReactDOM.render(
  element,
  document.getElementById('root')
);

reportWebVitals();
