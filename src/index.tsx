import ReactDOM from 'react-dom';
import './index.css';
import App, { InputProps } from './app/App';
import reportWebVitals from './reportWebVitals';
import { WeatherDataService } from './services/Weather-data.service';

let props = { 
    weatherService : new WeatherDataService(),
    name : "Scotland's" 
} as InputProps;
const element = <App {...props}/>;

ReactDOM.render(
  element,
  document.getElementById('root')
);

reportWebVitals();
