import React, { Component } from 'react';
import './App.css';
import { WeatherData } from '../services/Weather-data.interface';
import { WeatherDataService } from '../services/Weather-data.service';
import jsonData from '../../src/services/weather-data.json'

interface InputProps{
  name: string;
}

class App extends Component<InputProps> {
  weatherService: WeatherDataService = new WeatherDataService();

  render() {
    let weatherData: WeatherData[] = this.weatherService.GetWeatherData(JSON.stringify(jsonData));

    return <div className="App" >
      <div className="App-header">
        <h2>{this.props.name} most accurate weather service</h2>
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
