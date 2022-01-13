import { Component } from 'react';
import "reflect-metadata";
import './List.css';
import { WeatherData } from '../interfaces/Weather-data.dto';
import jsonData from '../services/weather-data.json'
import { IWeatherDataService } from '../interfaces/Weather-data.service.interface';
import { WeatherDataService } from '../services/Weather-data.service';
import { myContainer } from '../IoC.config';

export interface InputProps {
  name: string;
  }

class List extends Component<InputProps> {
  
  private weatherService: IWeatherDataService = myContainer.get(WeatherDataService);
  
  render() {

    let weatherData: WeatherData[] = 
      this
      .weatherService
      .GetWeatherData(JSON.stringify(jsonData));

    return <div className="List" >
      <div className="List-header">
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

export default List;
