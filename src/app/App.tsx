import { Component } from 'react';
import "reflect-metadata";
import './App.css';
import { WeatherData } from '../services/Weather-data.dto';
import jsonData from '../../src/services/weather-data.json'
import { IWeatherDataService } from '../services/Weather-data.interface';
import { WeatherDataService } from '../services/Weather-data.service';
import { myContainer } from '../IoC.config';

export interface InputProps {
  name: string;
  }

class App extends Component<InputProps> {
  
  private weatherService: IWeatherDataService = myContainer.get(WeatherDataService);
  
  render() {

    let weatherData: WeatherData[] = 
      this
      .weatherService
      .GetWeatherData(JSON.stringify(jsonData));

    return <div className="App" >
      <div className="App-header">
        <h2> Scotland's most accurate weather service</h2>
        <p>
          {
            weatherData.map((d, idx) => 
            { return (<li key={idx}> {d.location + ', the weather is ' + d.status} </li>) })
          }
        </p>
      </div>
    </div>
  }
}

export default App;
