import React from 'react';
import './App.css';
import { WeatherData } from '../services/Weather-data.interface';
import { WeatherDataService } from '../services/Weather-data.service';
import jsonData from '../../src/services/weather-data.json'

class App extends React.Component {
  weatherService: WeatherDataService = new WeatherDataService();

  render() { 
    let weatherData: WeatherData[] = this.weatherService.GetWeatherData(JSON.stringify(jsonData));
    
    return <div className="App">
      <header className="App-header">
        <h2>Scotland's most accurate weather service</h2>
        <p>
          {
            weatherData.map((d, idx) => { return (<li key={idx}> {d.location + ', the weather is '+ d.status} </li>)})
          }
        </p>
      </header>
    </div>
  }
}

export default App;
